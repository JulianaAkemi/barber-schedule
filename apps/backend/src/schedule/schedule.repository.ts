import { Injectable } from '@nestjs/common';
import {
  Schedule,
  ScheduleRepository as CoreScheduleRepository,
} from '@repo/core';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ScheduleRepository implements CoreScheduleRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(schedule: Schedule): Promise<void> {
    await this.prismaService.schedule.create({
      data: {
        date: schedule.date,
        clientEmail: schedule.clientEmail,
        employee: { connect: { id: schedule.employee.id } },
        tasks: {
          connect: schedule.tasks.map((task) => ({ id: task.id })),
        },
      },
    });
  }

  async searchEmail(email: string): Promise<Schedule[]> {
    return this.prismaService.schedule.findMany({
      where: {
        clientEmail: email,
        date: {
          gte: new Date(),
        },
      },
      include: {
        tasks: true,
        employee: true,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async searchEmployeeAndDate(
    employee: number,
    date: Date,
  ): Promise<Schedule[]> {
    const year = date.getFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();

    const dayStart = new Date(year, month, day, 0, 0, 0);
    const dayEnd = new Date(year, month, day, 23, 59, 59);

    const result: any = await this.prismaService.schedule.findMany({
      where: {
        employeeId: employee,
        date: {
          gte: dayStart,
          lte: dayEnd,
        },
      },
      include: { tasks: true },
    });

    return result;
  }
}

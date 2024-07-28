import { Schedule, GetBusySlots } from '@repo/core';
import { ScheduleRepository } from './schedule.repository';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly repo: ScheduleRepository) {}

  @Post()
  create(@Body() schedule: Schedule) {
    return this.repo.create(schedule);
  }

  @Get(':email')
  searchEmail(@Param('email') email: string) {
    return this.repo.searchEmail(email);
  }

  @Get('ocupied/:employee/:date')
  searchEmployeeOcupiedHours(
    @Param('employee') employee: string,
    @Param('date') dateParam: string,
  ) {
    const useCase = new GetBusySlots(this.repo);
    return useCase.execute(+employee, new Date(dateParam));
  }
}

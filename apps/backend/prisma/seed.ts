import { PrismaClient } from '@prisma/client';
import {
  Employee as PrismaEmployee,
  Task as PrismaTask,
} from 'prisma/prisma-client';
import { tasks, employees } from '@repo/core';

const prisma = new PrismaClient();

async function seed() {
  await prisma.employee.createMany({
    data: employees as PrismaEmployee[],
  });
  await prisma.task.createMany({ data: tasks as PrismaTask[] });
}

seed();

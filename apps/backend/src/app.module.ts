import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [DbModule, ScheduleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

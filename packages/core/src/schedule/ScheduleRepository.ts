import Schedule from "./Schedule";

export default interface ScheduleRepository {
  create(schedule: Schedule): Promise<void>;
  searchEmail(email: string): Promise<Schedule[]>;
  searchEmployeeAndDate(employee: number, date: Date): Promise<Schedule[]>;
}

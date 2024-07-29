import { TIME_SLOT } from "../constants";
import ScheduleRepository from "./ScheduleRepository";

export default class GetBusySlots {
  constructor(private readonly repo: ScheduleRepository) {}

  async execute(employeeId: number, date: Date): Promise<string[]> {
    const appointments = await this.repo.searchEmployeeAndDate(
      employeeId,
      date
    );

    const slots = appointments
      .map((schedule) => {
        return {
          date: schedule.date,
          slots: schedule.tasks.reduce((total, s) => total + s.slots, 0),
        };
      })
      .reduce((busySlots: Date[], data: any) => {
        const time = data.date;
        const slots = data.slots;
        const times = Array.from({ length: slots }, (_, i) =>
          this.sumMinutes(time, i * TIME_SLOT)
        );

        return [...busySlots, ...times];
      }, [])
      .map((d) => d.toTimeString().slice(0, 5));

    return slots; // [ '10:00', '10:15', '10:30', '10:45', '14:15' ]
  }

  private sumMinutes(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes * 60000);
  }
}

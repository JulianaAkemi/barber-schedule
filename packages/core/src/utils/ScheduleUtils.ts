export default class ScheduleUtils {
  private static minutes = [0, 15, 30, 45];

  static timeSlotsOfTheDay() {
    return {
      morning: this.generateTimeSlot([8, 9, 10, 11]),
      afternoon: this.generateTimeSlot([14, 15, 16, 17]),
      night: this.generateTimeSlot([18, 19, 20, 21]),
    };
  }

  private static generateTimeSlot(hours: number[]) {
    return hours.reduce((timeSlots, hour) => {
      const all = this.minutes.map((minute) => {
        return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      });

      return timeSlots.concat(all);
    }, [] as string[]);
  }
}

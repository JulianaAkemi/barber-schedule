import { Employee } from "../employee";
import { Task } from "../task";

export default interface Schedule {
  id: number;
  clientEmail: string;
  date: Date;
  employee: Employee;
  tasks: Task[];
}

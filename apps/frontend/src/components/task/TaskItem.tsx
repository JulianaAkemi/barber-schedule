import { Task } from "@repo/core";
import Image from "next/image";

export interface TaskItemProps {
  task: Task;
  onClick?: (task: Task) => void;
}

export default function TaskItem(props: TaskItemProps) {
  return (
    <div
      className={`flex rounded-xl overflow-hidden bg-zinc-800 ${props.onClick && "cursor-pointer"} select-none`}
      onClick={() => props.onClick?.(props.task)}
    >
      <Image
        src={props.task.imageUrl}
        width={150}
        height={150}
        alt={props.task.name}
        className="object-cover"
      />

      <div className="flex flex-col p-5 gap-2">
        <span className="text-xl font-black">{props.task.name}</span>

        <span className="text-xs text-zinc-400 flex-1">
          {props.task.description}
        </span>

        <span className="text-lg font-bold">
          R$ {props.task.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

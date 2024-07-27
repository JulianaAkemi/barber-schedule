"use client";
import { Task } from "@repo/core";
import { useRouter } from "next/navigation";
import TaskItem from "./TaskItem";
import Title from "../shared/Title";
import useServicos from "@/data/hooks/useTasks";

export default function OurServices() {
  const router = useRouter();
  const { tasks } = useServicos();

  function startScheduling() {
    router.push("/schedule");
  }

  return (
    <div className="flex flex-col gap-16">
      <Title
        tag="Services"
        primary="From Classic to Rock"
        secondary="Sharp hair, lumberjack beard and motorcyclist hands, all with heavy metal sound!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {tasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} onClick={startScheduling} />
        ))}
      </div>
    </div>
  );
}

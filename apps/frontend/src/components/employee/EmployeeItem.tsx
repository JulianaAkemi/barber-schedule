import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Employee } from "@repo/core";
import Image from "next/image";
import Score from "../shared/Score";

export interface EmployeeItemProps {
  employee: Employee;
}

export default function EmployeeItem(props: EmployeeItemProps) {
  return (
    <div className="flex flex-col items-center p-1 bg-zinc-800 rounded-lg">
      <div className="relative h-72 w-full">
        <Image
          src={props.employee.imageUrl}
          fill
          alt={props.employee.name}
          className="object-cover object-top rounded-t-lg"
        />
      </div>

      <div className="flex flex-col p-4 gap-5">
        <span className="text-2xl font-black">{props.employee.name}</span>

        <span className="text-sm text-zinc-400">
          {props.employee.description}
        </span>

        <div className="flex gap-3 flex-wrap">
          <Score
            value={props.employee.score}
            qtyScore={props.employee.qtyScore}
          />
        </div>

        <div className="flex gap-3 text-zinc-300">
          <IconBrandYoutube stroke={1} />
          <IconBrandInstagram stroke={1} />
          <IconBrandX stroke={1} />
          <IconBrandLinkedin stroke={1} />
        </div>
      </div>
    </div>
  );
}

"use client";
import { Employee } from "@repo/core";
import EmployeeItem from "@/components/employee/EmployeeItem";
import Title from "@/components/shared/Title";
import useEmployees from "@/data/hooks/useEmployees";

export default function Employees() {
  const { employees } = useEmployees();

  return (
    <div className="container flex flex-col items-center gap-y-16">
      <Title
        tag="Team"
        primary="Our Stars"
        secondary="Só os mais brabos estão aqui! Temos o orgulho de ter o time mais qualificado do Brasil!"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {employees.map((employee: Employee) => (
          <EmployeeItem key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}

import { useContext } from "react";
import { ScheduleContext } from "@/data/contexts/ScheduleContext";

const useSchedule = () => useContext(ScheduleContext);
export default useSchedule;

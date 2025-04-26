import { Days, WorkSchedule } from "../../types/doctorstypes";

export function isWithinWorkSchedule(schedule: WorkSchedule[]): boolean {
    // Get current day name and hour in 24-hour format
    const now = new Date();
    const dayNames: Days[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = dayNames[now.getDay()];
    const currentHour = now.getHours();
  
    // Check if current time falls within any schedule entry for the current day
    return schedule.some(({ day, startTime, endTime }) => {
      if (day === currentDay) {
        return currentHour >= startTime && currentHour < endTime;
      }
      return false;
    });
  }
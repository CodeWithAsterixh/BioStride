export function formatHour(hour: number): string {
    if (hour < 0 || hour > 24) {
      throw new Error("Hour must be between 0 and 24");
    }
  
    let formattedHour: number;
    let meridiem: "am" | "pm";
  
    if (hour === 0 || hour === 24) {
      formattedHour = 12;
      meridiem = "am";
    } else if (hour === 12) {
      formattedHour = 12;
      meridiem = "pm";
    } else if (hour < 12) {
      formattedHour = hour;
      meridiem = "am";
    } else {
      formattedHour = hour - 12;
      meridiem = "pm";
    }
    
    return `${formattedHour} ${meridiem}`;
  }
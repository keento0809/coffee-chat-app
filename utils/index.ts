type TimeOption = {
  value: string;
  label: string;
};

export const generateTimeOptions = (): TimeOption[] => {
  const options: TimeOption[] = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const hourStr = hour.toString().padStart(2, "0");
      const minuteStr = minute.toString().padStart(2, "0");
      options.push({
        value: `${hourStr}:${minuteStr}`,
        label: `${hourStr}:${minuteStr}`,
      });
    }
  }
  return options;
};

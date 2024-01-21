import { useEffect, useState } from "react";

const useFormattedDate = (dateString: string | undefined) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    if (dateString) {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: "UTC",
        hour12: true,
      };

      const formattedDateString = new Intl.DateTimeFormat(
        "en-US",
        options
      ).format(new Date(dateString));

      setFormattedDate(formattedDateString);
    } else {
      // Handle the case where dateString is undefined or empty
      setFormattedDate(null);
    }
  }, [dateString]);

  return formattedDate;
};

export default useFormattedDate;

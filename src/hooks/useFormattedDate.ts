import { useEffect, useState } from "react";

const useFormattedDate = (dateString: string) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
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
  }, [dateString]);

  return formattedDate;
};

export default useFormattedDate;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { LuClock3 } from "react-icons/lu";

interface DatePickerComponentProps {
  onSelectDate: (date: Date) => void;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  onSelectDate,
}) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: any) => {
        setStartDate(date);
        onSelectDate(date);
      }}
      showIcon
      icon={<LuClock3 />}
      dateFormat="Pp"
      placeholderText="Select Date and Time"
    />
  );
};

export default DatePickerComponent;

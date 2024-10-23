"use client";
import React from "react";
import { DateRangePicker, DateRange } from "date-range-picker-mui";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState<DateRange>({});

  const toggle = () => setOpen(!open);

  return (
    <div>
      <button onClick={toggle}>Select Date Range</button>
      <DateRangePicker
        open={open}
        toggle={toggle}
        onChange={(range) => setDateRange(range)}
      />
      <p>
        Selected: {dateRange.startDate?.toLocaleDateString()} -{" "}
        {dateRange.endDate?.toLocaleDateString()}
      </p>
    </div>
  );
};

export default HomePage;

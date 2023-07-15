'use client';

import { Range, RangeKeyDict, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
interface CalendarProps {
  value: Range;
  disabledDates?: Date[];
  onChange: (value: RangeKeyDict) => void;
}

const Calendar = ({ value, disabledDates, onChange }: CalendarProps) => {
  return <DateRange />;
};

export default Calendar;

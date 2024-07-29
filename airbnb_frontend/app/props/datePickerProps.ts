import { Range, RangeKeyDict } from "react-date-range";

export interface DatePickerProps {
  value: Range,
  onChange: (value: RangeKeyDict) => void,
  bookedDates?: Date[],
}
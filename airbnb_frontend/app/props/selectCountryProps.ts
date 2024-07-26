import { SelectCountryValue } from "../types/selectCountryValue";

export interface SelectCountryProps {
  value?: SelectCountryValue;
  onChange: (value: SelectCountryValue) => void;
}
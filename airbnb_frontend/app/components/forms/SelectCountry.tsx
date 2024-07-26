"use client";

import Select from "react-select";
import useCountries from "@/app/hooks/useCountires";
import { SelectCountryValue } from "@/app/types/selectCountryValue";
import { SelectCountryProps } from "@/app/props/selectCountryProps";

const SelectCountry: React.FC<SelectCountryProps> = ({
  value,
  onChange,
}) => {
  const {getAll} = useCountries();

  return (
    <>
      <Select
        isClearable
        placeholder="Anywhere"
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as SelectCountryValue)}
      />
    </>
  )
}

export default SelectCountry;

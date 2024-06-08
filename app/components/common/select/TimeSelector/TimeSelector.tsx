import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/shadcn/select/select";

export type SelectItem = {
  label: string;
  value: string;
};

type TimeSelectorProps = {
  placeholderText: string;
  selectItems: SelectItem[];
};

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  placeholderText,
  selectItems,
}) => {
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder={placeholderText} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{placeholderText}</SelectLabel>
          {selectItems.map((item) => {
            return (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

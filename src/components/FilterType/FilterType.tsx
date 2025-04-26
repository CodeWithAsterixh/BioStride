import { useState } from "react";
import { filterTypes } from ".";

type props = {
  onChange?: (type: filterTypes) => void;
};

export default function FilterType({ onChange }: props) {
  const [selected, setSelected] = useState<filterTypes>("day");
  const handleSelect = (type: filterTypes) => {
    setSelected(type);
    if (onChange) onChange(type);
  };

  const filterTypes: filterTypes[] = ["day", "month", "year"];
  return (
    <div className="flex items-center bg-primary/10 gap-0.5 rounded-md overflow-hidden">
      {filterTypes.map((type) => (
        <button
          key={type}
          className="filterType"
          onClick={() => handleSelect(type)}
          data-selected={selected === type}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

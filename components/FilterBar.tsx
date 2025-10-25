// components/FilterBar.tsx
import React from "react";
import Pill from "./Pill";

type Props = {
  filters: string[];
  activeFilter: string | null;
  onSelect: (f: string | null) => void;
  onSearch: (q: string) => void;
};

const FilterBar: React.FC<Props> = ({ filters, activeFilter, onSelect, onSearch }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Pill label="All" active={activeFilter === null} onClick={() => onSelect(null)} />
          {filters.map((f) => (
            <Pill key={f} label={f} active={activeFilter === f} onClick={() => onSelect(f)} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="search" className="sr-only">Search</label>
          <input
            id="search"
            type="search"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search by name or location"
            className="px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

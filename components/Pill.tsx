// components/Pill.tsx
import React from "react";

type Props = {
  label: string;
  active?: boolean;
  onClick?: (label: string) => void;
};

const Pill: React.FC<Props> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={() => onClick?.(label)}
      className={`px-3 py-1 rounded-full text-sm transition ${
        active ? "bg-sky-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );
};

export default Pill;

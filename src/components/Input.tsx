// Interfaces
import type { ReactNode } from "react";

interface InputProps {
  child: ReactNode;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  maxLength: number
};

export default function Input({ value, setValue, child, maxLength }: InputProps) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-1">
        <p>{child}</p>
        <input maxLength={maxLength} type="text" className="w-full outline-0" value={value} onChange={e => setValue(e.target.value)} />
      </div>
      <hr className="border-1 text-gray" />
    </div>
  );
}

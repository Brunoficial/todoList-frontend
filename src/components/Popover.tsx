import React, { type SetStateAction } from "react";
import { Icons } from "../assets/icons";

interface PopoverProps {
  showPopover: boolean;
  setShowPopover: React.Dispatch<SetStateAction<boolean>>
  children: React.ReactNode;
}

export default function Popover({ showPopover, setShowPopover, children }: PopoverProps) {
  return (
    <div
      className={`absolute  left-0 top-0 w-full h-full bg-black/50 z-0 transition-all ${
        showPopover
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } `}
    >
      <div
        className={`flex flex-col relative top-1/2 left-1/2 -translate-1/2 w-2xl items-center justify-center transition-all ease-in-out bg-white rounded-[10px] px-8 py-6 shadow-2xl z-50 ${
          showPopover
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {children}
        <button
          className="absolute right-3 top-2 cursor-pointer"
          onClick={() => {
            setShowPopover(!showPopover);
          }}
        >
          <Icons.Close />
        </button>
      </div>
    </div>
  );
}

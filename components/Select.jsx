"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import dropdown from "@/assets/images/downarrow.svg";

const Select = ({ options, placeholder }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [seletedValue, setSeletedValue] = useState();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      className="w-full flex px-2 flex-col relative rounded-md border-[1px] border-[#e7e7e7] cursor-pointer bg-white"
      ref={ref}
      onClick={() => setOpen(!open)}
    >
      <div className="flex px-2 py-2 justify-between items-center text-gray-400">
        <h1>{seletedValue ? seletedValue : placeholder}</h1>&nbsp;
        <Image src={dropdown} width={20} height={20} alt="dropdown-img" />
      </div>
      {open && (
        <div className="px-3 py-2 absolute top-10 bg-white w-full left-0 border-[1px] border-slate-400 rounded-md z-10">
          {options?.map((value, index) => {
            return (
              <p
                className="py-3 text-gray-800 hover:bg-blue-500 px-2 hover:text-white rounded-md hover:cursor-pointer"
                onClick={() => setSeletedValue(value)}
                key={index}
              >
                {value}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;

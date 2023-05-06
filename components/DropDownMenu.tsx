import { NextPage } from "next";
import styles from "../styles/Scrollbar.module.css";
import { MouseEventHandler, useState } from "react";

interface Props {
  className?: string;
  options: Array<string>;
}

const ContactForm = ({ options, className }: Props) => {
  className ??= "";
  const [isDropDownHidden, setisDropDownHidden] = useState("hidden");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const toggleDropDown: MouseEventHandler = (e) => {
    e.preventDefault();
    setisDropDownHidden(isDropDownHidden ? "" : "hidden");
  };
  const selectDamageOption: MouseEventHandler = (e) => {
    e.preventDefault();
    setSelectedOption(e.currentTarget.id);
  };

  return (
    <div
      className={`w-[12rem] bg-slate-600 py-1 px-3 rounded-lg text-slate-100 cursor-default inline-block relative ${className}`}
      onClick={toggleDropDown}
    >
      <div className="flex flex-row items-center">
        <div className="mr-auto select-none">
          {selectedOption ? selectedOption : "---"}
        </div>
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      <ul
        className={`${styles.scroll} absolute left-0 z-100 bg-slate-600 py-2 rounded-b-lg w-[12rem] max-h-32 overflow-y-scroll ${isDropDownHidden}`}
      >
        {options.map((option) => {
          return (
            <li
              className="py-1 pl-3 mr-auto hover:bg-slate-600 cursor-pointer text-left  select-none"
              onClick={selectDamageOption}
              id={option}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactForm;

import { FormEventHandler } from "react";

interface Props {
  id?: string;
  name: string;
  className?: string;
  placeholder?: string;
  type?: string;
  onChange: FormEventHandler;
}

const TextInput = ({ id, className, placeholder, type, name, onChange }: Props) => {
  return (
    <input
      id={id || ""}
      name={name}
      type={type || ""}
      placeholder={placeholder || ""}
      onChange={onChange}
      className={`px-1 bg-transparent text-slate-100 border-b-2 border-slate-500 focus:outline-none focus:border-green-300 ${className}`}
    ></input>
  );
};

export default TextInput;

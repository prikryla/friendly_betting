import React from "react";
import Link from "next/link";

interface IButtonProps {
  text: string;
  href?: string;
}

const Button: React.FC<IButtonProps> = ({ text, href }) => {
  return (
    <button className="w-80 lg:w-96 h-16 border rounded-full text-2xl font-semibold border-line cursor-pointer">
      <Link href={`/${href}`}>{text}</Link>
    </button>
  );
};

export default Button;

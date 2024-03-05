import Link from "next/link";

interface IButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<IButtonProps> = ({ text, href }) => {
  return (
    <button className="border pl-10 pr-10 pt-5 pb-5 rounded-full w-96 text-2xl font-semibold">
      <Link href={`/${href}`}>{text}</Link>
    </button>
  );
};

export default Button;

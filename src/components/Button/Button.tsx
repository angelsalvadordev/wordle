import { FC } from "react";

export interface ButtonProps {
  text: string;
  color?: "green" | "gray";
  classNames?: string;
  onClick?: () => void;
}

const colors = {
  green: "bg-light-green",
  gray: "bg-gray-4",
};

const Button: FC<ButtonProps> = ({
  text,
  color = "gray",
  classNames = "",
  onClick,
}) => {
  const handleOnClick = () => {
    onClick?.();
  };

  const findedColor = colors[color] || colors.gray;

  return (
    <button
      className={`rounded-md outline-none border-none px-20 py-3 text-2xl text-white font-extrabold ${findedColor} ${classNames}`}
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
};

export default Button;

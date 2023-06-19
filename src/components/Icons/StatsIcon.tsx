import { FC } from "react";
import { SvgProps } from "./icons.interface";

const StatisticsIcon: FC<SvgProps> = ({ classNames = "", onClick }) => {
  return (
    <svg
      className={classNames}
      {...(onClick && { onClick })}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="36"
      viewBox="0 0 40 36"
      fill="none"
    >
      <rect
        className="fill-gray-7 dark:fill-white"
        x="4.93549"
        y="6"
        width="29.6129"
        height="24"
        rx="2"
      />
      <path
        className="stroke-white dark:stroke-dark-blue"
        d="M13.1613 15L13.1613 24"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="stroke-white dark:stroke-dark-blue"
        d="M19.7419 18V24"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="stroke-white dark:stroke-dark-blue"
        d="M26.3226 12V24"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StatisticsIcon;

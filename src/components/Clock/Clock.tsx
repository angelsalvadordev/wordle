import { FC } from "react";

export interface ClockProps {
  minutes: number;
  seconds: number;
}

const Clock: FC<ClockProps> = ({ minutes, seconds }) => {
  const numberFormatted = (num: number): string => {
    return num.toString().length > 1 ? num.toString() : `0${num}`;
  };

  return (
    <div className="font-bold text-2xl dark:text-white">
      {numberFormatted(minutes)}:{numberFormatted(seconds)}
    </div>
  );
};

export default Clock;

import { addMinutes, format, isAfter, parse } from "date-fns";
import { TIME_TO_CHANGE_WORD } from "../constants/settings";

export const getNextWordDate = () => {
  const currentDate = new Date();
  const futureDate = addMinutes(currentDate, TIME_TO_CHANGE_WORD);
  const formattedDate = format(futureDate, "yyyy-MM-dd'T'HH:mm:ss");

  return formattedDate;
};

export const isAfterDate = (date: string) => {
  const currentDate = new Date();
  const formattedDate = parse(date, "yyyy-MM-dd'T'HH:mm:ss", new Date());

  return isAfter(currentDate, formattedDate);
};

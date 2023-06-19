import { useId } from "react";
import LetterBox from "../LetterBox/LetterBox";
import { emptyRowExample } from "../../constants/examples";

const EmptyRow = () => {
  const id = useId();

  return (
    <div className="flex gap-3 mb-4">
      {emptyRowExample.map((_, i) => (
        <LetterBox key={`${id}-empty-${i}`} />
      ))}
    </div>
  );
};

export default EmptyRow;

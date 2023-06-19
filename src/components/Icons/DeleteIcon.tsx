import { FC } from "react";
import { SvgProps } from "./icons.interface";

const DeleteIcon: FC<SvgProps> = ({ classNames, onClick }) => {
  return (
    <svg
      className={classNames}
      {...(onClick && { onClick })}
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="17"
      viewBox="0 0 23 17"
      fill="none"
    >
      <path
        className="fill-gray-6 dark:fill-white"
        d="M9.94968 4.31639L13.587 7.78048L17.2243 4.31639L18.3244 5.47152L14.7435 8.88191L18.3244 12.2923L17.2243 13.4474L13.587 9.98334L9.94968 13.4474L8.84955 12.2923L12.4305 8.88191L8.84955 5.47152L9.94968 4.31639Z"
      />
      <path
        className="fill-gray-6 dark:fill-white"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.68607 0.906006C6.39072 0.906006 6.1119 1.04237 5.93057 1.27551L0.47151 8.2943C0.202693 8.63992 0.202694 9.1239 0.47151 9.46952L5.93057 16.4883C6.1119 16.7214 6.39071 16.8578 6.68607 16.8578H21.6027C22.1313 16.8578 22.5599 16.4293 22.5599 15.9007V1.86311C22.5599 1.33451 22.1313 0.906006 21.6027 0.906006H6.68607ZM2.03536 8.88191L6.99814 2.50119H20.9647V15.2626H6.99814L2.03536 8.88191Z"
      />
    </svg>
  );
};

export default DeleteIcon;

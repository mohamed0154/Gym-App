import { reverseEasing } from "motion";
import { mirrorEasing, motion } from "motion/react";
const Button = ({ name }) => {
  return (
    <button
      transition={{ duration: 3 }}
      className="bg-black text-base rounded-md px-4 py-3 border-2 border-blue-500 land-btn duration-200"
    >
      {name}
    </button>
  );
};

export default Button;

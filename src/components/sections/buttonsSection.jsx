import { motion } from "motion/react";
const ButtonsSection = ({ musleButtons, ChooseWorkout }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 justify-around gap-3 w-[90%] sm:w-[500px] md:w-[600px]">
      {musleButtons.map((e, key) => {
        return (
          <motion.button
            initial={{ opacity: 0, transform: "translateY(100px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true }}
            transition={{
              damping: 10,
              duration: 3,
              delay: key / 3,
              type: "spring",
            }}
            key={key}
            onClick={() => ChooseWorkout(key, e)}
            className="bg-transparent border-2 border-slate-600 hover:bg-slate-800 text-white text-base min-h-10 rounded"
          >
            {e}
          </motion.button>
        );
      })}
    </div>
  );
};

export default ButtonsSection;

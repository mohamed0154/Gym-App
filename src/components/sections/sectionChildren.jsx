import { motion, AnimatePresence } from "motion/react";
import { variants, childVariants } from "../helpers/variables";
const SectionChildren = ({
  setStatus,
  status,
  musles,
  Musle,
  gymExercises,
}) => {
  return (
    <div
      className="down-menu w-[90%] sm:w-[500px] md:w-[600px]
 bg-slate-950  pb-1 rounded-md cursor-pointer"
    >
      <div
        className=" flex flex-col items-center relative p-3 "
        onClick={() => setStatus(!status)}
      >
        <i className="fa-solid fa-caret-down absolute right-10 top-1/2 -translate-y-1/2"></i>
        <span className="tracking-wider text-lg uppercase">
          {musles.length > 0
            ? musles.map((e) => {
                return <span> {e} - </span>;
              })
            : "select musle group"}
        </span>
      </div>
      <AnimatePresence>
        {status && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit={{ height: 0 }}
            variants={variants}
            className="text-center overflow-hidden"
          >
            {gymExercises.map((el, key) => {
              return (
                <motion.div
                  variants={childVariants}
                  key={key}
                  onClick={() => Musle(el)}
                  className={
                    "py-3 text-lg font-semibold border-b border-blue-400 " +
                    (musles.includes(el) ? "bg-slate-400" : "")
                  }
                >
                  {el}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionChildren;

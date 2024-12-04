import { motion } from "motion/react";
const Section = ({ number, title, description, children }) => {
  return (
    <div className=" text-white flex flex-col items-center gap-8 pt-20">
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-150px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        viewport={{ once: true }}
        transition={{ damping: 6, delay: 0.5, duration: 1, type: "string" }}
        className="flex items-center gap-2 font-semibold "
      >
        <span className="text-5xl text-slate-400">{number}</span>
        <span className="text-3xl pt-1">{title}</span>
      </motion.div>
      <p className="text-xl m-0">{description}</p>
      {children}
    </div>
  );
};

export default Section;

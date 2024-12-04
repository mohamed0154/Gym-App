import { motion } from "motion/react";
import { useState } from "react";
const HeavyTraning = ({ title, link, musleGroup, reps, rest, tempo }) => {
  const [complete, setComplete] = useState(0);

  function SetComplete() {
    complete >= 5 ? "" : setComplete((prev) => complete + 1);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 1, type: "tween" }}
      className="flex flex-col gap-10 bg-slate-950 p-6 "
    >
      <div className="flex flex-col gap-1">
        <span className="text-md sm:text-xl  text-white">{title}</span>
        <span className="text-slate-400">{link}</span>
      </div>
      <div>
        <span className="flex flex-col gap-1 text-md sm:text-xl  text-white">
          Musle groups
        </span>
        <span className="text-slate-400">{musleGroup}</span>
      </div>
      <div className="flex ">
        <div className="flex flex-col w-[50%]">
          {" "}
          <span className="text-white">reps</span>
          <span className="text-slate-400">{reps}</span>
        </div>

        <div className="flex flex-col w-[50%]">
          <span className="text-white">rest</span>
          <span className="text-slate-400 ">{rest}</span>
        </div>
      </div>

      <div>
        <div className="flex ">
          <div className="flex flex-col w-[50%]">
            <span className="text-white">Tempo</span>
            <span className="text-slate-400  ">{tempo}</span>
          </div>
          <div
            className="flex flex-col gap-1 border border-slate-700 w-[50%] p-1 px-3 cursor-pointer"
            onClick={SetComplete}
          >
            <span className="text-slate-400">Set Completed</span>
            <span className="text-slate-400 ">{complete} / 5</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default HeavyTraning;

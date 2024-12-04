import { motion } from "motion/react";
import gymImg from "../assets/gym-bg.avif";

import Button from "./helpers/button";
const Landing = () => {
  return (
    <div className=" landing overflow-hidden min-h-screen bg-slate-900 text-white flex justify-center items-center ">
      <div className="md:max-w-[800px] lg:max-w-[900px] flex flex-col items-center gap-10 text-center p-5 tracking-wider">
        <div className="flex flex-col gap-4">
          <span className="uppercase text-xl">It's time to get</span>
          <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold">
            swole<span className="text-blue-400 ">normous</span>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, transform: "translatey(50px)" }}
          animate={{ opacity: 1, transform: "translatey(0px)" }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl sm:leading-7 md:leading-8  "
        >
          Lorem ipsum dolor sit amet, consectetur{" "}
          <span className="text-blue-400">adipisicing</span> elit. Id
          blanditiis, ducimus harum non fugiat nobis{" "}
          <span className="text-blue-400">quaerat</span> reprehenderit velit!
          Cupiditate animi a expedita quae earum repellendus{" "}
          <span className="text-blue-400">ratione</span> eius enim dignissimos
          aspernatur.
        </motion.p>

        <Button name={"Accept & Begin"} />
      </div>
    </div>
  );
};

export default Landing;

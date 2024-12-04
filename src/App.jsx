import { useState } from "react";
import Landing from "./components/landing";
import Header from "./components/sections/header";
import GymContent from "./components/sections/gymContent";
import { motion, AnimatePresence } from "motion/react";
import { li } from "motion/react-client";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { delay, stagger, transform } from "motion";

function App() {
  const [count, setCount] = useState(false);

  return (
    <div className="app">
      <Landing />
      <GymContent />
    </div>
  );
}

export default App;

import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

export const arrr = [
  { Individual: ["Chest", "By", "Try", "Shoulder", "Arm", "Leg"] },
  { BroSplit: ["push", "Shoulder", "Arm", "Leg"] },
  { BudyBuilderSplit: ["push", "Pull", "quads", "hamstrings", "calves"] },
  {
    UpperLower: [
      "Chest",
      "Shoulder",
      "Arm",
      "Leg",
      "Pull",
      "quads",
      "hamstrings",
      "calves",
    ],
  },
];
export const musleButtons = [
  "Individual",
  "Bro Split",
  "BudyBuilderSplit",
  "UpperLower",
];
export const ultimateButtons = [
  "Strength Power",
  "growth hypertrophy",
  "BudyBuilderSplit",
  "UpperLower",
];
export const buttonsList = {
  Individual: ["Chest", "By", "Try", "Shoulder", "Arm", "Leg"],
  BroSplit: ["push", "Shoulder", "Arm", "Leg"],
  BudyBuilderSplit: ["push", "Pull", "quads", "hamstrings", "calves"],
  UpperLower: [
    "Chest",
    "Shoulder",
    "Arm",
    "Leg",
    "Pull",
    "quads",
    "hamstrings",
    "calves",
  ],
};

export const exercisesType = [
  {
    title: "Started Damled Overhead Prss",
    link: "Compund",
    musleGroup: "chest",
    reps: 4,
    rest: 80,
    tempo: 300,
  },
  {
    title: "Started Damled Overhead Prss",
    link: "Compund",
    musleGroup: "Arm",
    reps: 4,
    rest: 80,
    tempo: 300,
  },
  {
    title: "Started Damled Overhead Prss",
    link: "Compund",
    musleGroup: "leg",
    reps: 4,
    rest: 80,
    tempo: 300,
  },
  {
    title: "Started Damled Overhead Prss",
    link: "Compund",
    musleGroup: "Shoulders",
    reps: 4,
    rest: 80,
    tempo: 300,
  },
];

export const variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "fit-content",
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      damping: 15,
      stiffness: 80,
      type: "spring",
    },
  },
};
export const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

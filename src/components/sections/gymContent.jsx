import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";

import {
  musleButtons,
  ultimateButtons,
  buttonsList,
  exercisesType,
} from "../helpers/variables";
import Header from "./header";
import Section from "./section";
import Button from "../helpers/button";
import ButtonsSection from "./buttonsSection";
import HeavyTraning from "./heavyTraning";
import SectionChildren from "./sectionChildren";

const GymContent = () => {
  const [status, setStatus] = useState(false);
  const [gymExercises, setGymExercises] = useState([""]);
  const [type, setType] = useState("");
  const [musles, setMusles] = useState([]);

  // Store Data in LocalStorage
  function LocalStorageExercisess(localGymExercisess) {
    localStorage.setItem(
      "localGymExercisess",
      JSON.stringify({ localGymExercisess })
    );
  }

  function ChooseWorkout(key, type) {
    const keyExercise = Object.keys(buttonsList)[key];
    setType((prevType) => type);
    musles.splice(0);
    LocalStorageExercisess(buttonsList[keyExercise]);
    setGymExercises(buttonsList[keyExercise]);
  }

  // Get Data from LocalStorage
  useEffect(() => {
    let localData = localStorage.getItem("localGymExercisess");
    if (!localData) {
      return;
    }

    localData = JSON.parse(localData).localGymExercisess;
    setGymExercises(localData);
  }, []);

  function Musle(el) {
    if (musles.includes(el)) {
      setMusles(musles.filter((mus) => mus !== el));
      return;
    }

    if (type !== "Individual") {
      setMusles([el]);
      return;
    }
    if (musles.length > 3) {
      return;
    }

    const arrMusles = [...musles, el];
    setMusles(arrMusles);
  }
  return (
    <>
      <div className=" py-5 bg-slate-900 ">
        <Header
          title={"generate your work out"}
          description={[" it's ", "Huge ", "clock"]}
        />
        <Section
          number={"01"}
          title={"Pick your poison"}
          description={"Select your workout you wish endure"}
        >
          <ButtonsSection
            musleButtons={musleButtons}
            ChooseWorkout={ChooseWorkout}
          />
        </Section>

        <Section
          number={"02"}
          title={"Pick your poison"}
          description={"Select your workout you wish endure"}
          children={
            <SectionChildren
              setStatus={setStatus}
              status={status}
              musles={musles}
              Musle={Musle}
              gymExercises={gymExercises}
            />
          }
        />

        <Section
          number={"03"}
          title={"Become your poison"}
          description={"Select your uptimate object wish endure"}
        >
          <ButtonsSection
            musleButtons={ultimateButtons}
            ChooseWorkout={ChooseWorkout}
          />
          <Button name={"Formulate"} />
        </Section>
      </div>
      <div className=" py-5 bg-slate-900">
        <Header
          title={"Welcome To"}
          description={[" The", " Danger ", "Zone"]}
        />
        <div className="grid md:grid-cols-2 gap-3 p-5">
          {exercisesType.map((el, key) => {
            return (
              <HeavyTraning
                key={key}
                title={el.title}
                link={el.link}
                musleGroup={el.musleGroup}
                reps={el.reps}
                rest={el.rest}
                tempo={el.tempo}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GymContent;

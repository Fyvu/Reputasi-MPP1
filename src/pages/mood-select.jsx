import { useNavigate } from "react-router-dom";
import { moods } from "../objects/theme-mood";
import { AnimatePresence, motion } from "motion/react";

export default function MoodSelect({ onSelectMood }) {
  const navigate = useNavigate();
  function HandleClick(mood) {
    onSelectMood(mood);
    localStorage.setItem("StoreMood", mood);
    navigate("/Home");
  }
  return (
    <div className="flex flex-col items-center justify-center overflow-auto min-h-screen m-10 md:m-0">
      <h1 className="text-2xl">Mood Kamu Apa Hari Ini?</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1">
        <AnimatePresence>
          {Object.keys(moods).map((mood, index) => (
            <motion.button
              key={mood}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 0.2, delay: index * 0.05, ease: [0, 0.71, 0.2, 1.01] }}
              onClick={() => {
                HandleClick(mood);
              }}
              className={` text-center ${moods[mood].button} `}
            >
              {mood}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

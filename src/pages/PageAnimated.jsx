import { AnimatePresence, motion } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";
import MoodSelect from "./mood-select";
import Projects from "./projects";
import Home from "./home";

export default function PageAnimated({ onSelectMood }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}>
              <MoodSelect onSelectMood={onSelectMood} />
            </motion.div>
          }
        />
        <Route
          path="/Home"
          element={
            <motion.div initial={{ opacity: 0, y: -200 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -200 }} transition={{ duration: 0.6, ease: [0.8, 0.3, 0.1, 1.01] }}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/Projects"
          element={
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 200 }} transition={{ duration: 0.6, ease: [0.8, 0.5, 0.1, 1.01] }}>
              <Projects />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

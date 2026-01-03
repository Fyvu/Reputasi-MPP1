import { useState, useEffect } from "react";
import PCard from "../component/project-card";
import { moods } from "../objects/theme-mood";
import ButtonLink from "../component/button-link";
import MyButton from "../component/button";
import { AnimatePresence, motion } from "motion/react";

export default function Projects() {
  const [theme, setTheme] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [getProject, setProject] = useState(null);

  useEffect(() => {
    // Move localStorage access to useEffect for client-side only execution
    const getMood = localStorage.getItem("StoreMood") || "Biasa";
    setTheme(moods[getMood]);
  }, []);

  function HanddleClick(project) {
    setShowModal(true);
    setProject(project);
    document.body.style.overflow = "hidden";
  }

  function modalClose() {
    setShowModal(false);
    document.body.style.overflow = "auto";
  }

  return (
    <div className="relative overflow-x-hidden min-h-screen flex flex-col items-center justify-start text-center px-4 md:px-6 lg:px-8">
      <div className="absolute top-1 left-1 md:top-5 md:left-5">
        <ButtonLink Label="く" link="/Home" />
      </div>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-16 md:mt-20">Projects</h1>

      <div className="w-full max-w-4xl mx-auto my-6 md:my-10 lg:mt-12">
        <PCard onClick={HanddleClick} />
      </div>

      <AnimatePresence>
        {showModal && getProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={modalClose}
            />

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className={`relative z-10 p-4 md:p-6 lg:p-8 flex flex-col text-start ${
                theme.secondary || "bg-white"
              } w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg md:shadow-xl lg:shadow-2xl shadow-black/20 max-h-[90vh] overflow-y-auto`}
            >
              <div className="flex items-center justify-center">
                <MyButton Label="✖" Click={modalClose} />
              </div>

              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center">{getProject.title}</h1>
              <h3 className="text-center text-sm md:text-base lg:text-lg mb-3 md:mb-4">{getProject.organized_by}</h3>

              <div className="w-full">
                <img className="aspect-video w-full rounded-lg md:rounded-xl object-cover shadow-gray-700 shadow-md" src={getProject.img} alt={getProject.title} />
              </div>

              <div className="my-3 md:my-4 lg:my-5">
                <p className="text-sm md:text-base">{getProject.desc}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

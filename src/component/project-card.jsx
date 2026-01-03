import { motion } from "motion/react";
import { projects } from "../objects/projects";

export default function PCard({ onClick }) {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1">
      {Object.keys(projects).map((key, index) => {
        const item = projects[key];
        return (
          <motion.div key={key} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: index * 0.1, ease: [0, 0.71, 0.2, 1.01] }}>
            <div key={key} className="flex flex-col m-5 rounded-lg shadow-black/50 shadow-md hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer" onClick={() => onClick(item)}>
              <div className="w-full">
                <img className="aspect-video object-cover" src={item.img} alt={item.title} />
              </div>
              <h1 className="text-2xl mt-2">{item.title || "Project"}</h1>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

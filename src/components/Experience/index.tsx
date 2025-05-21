import { useState } from "react";
import { experienceList } from "./experienceList";
import { DotOutline } from "@phosphor-icons/react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "motion/react";

interface ExperienceItem {
  id: number;
  title: string;
  position: string;
  enterprise: string;
  time: string;
  link: string;
  collaboration: string[];
}

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem>(
    experienceList[0]
  );

  return (
    <section
      id="experience"
      className="w-full pt-40 flex justify-center items-center flex-col"
      aria-label="Experiências profissionais"
    >
      <h2 className="text-4xl font-medium mb-12">Onde eu trabalhei</h2>
      <div className="inline-flex" role="tablist">
        <div className="flex flex-col">
          {experienceList.map((experience) => (
            <button
              aria-selected={experience.id === selectedExperience.id}
              aria-controls={`panel-${experience.id}`}
              onClick={() => setSelectedExperience(experience)}
              className={cn(
                "text-left p-2 px-4 hover:bg-blue/50 transition-colors border-r-4 border-blue/20 cursor-pointer",
                experience.title === selectedExperience.title && "border-blue"
              )}
              role="tab"
              key={experience.id}
            >
              {experience.title}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExperience.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="px-10 max-w-2xl min-w-2xl min-h-[400px]"
            role="tabpanel"
            id={`panel-${selectedExperience.id}`}
            tabIndex={0}
          >
            <div className="inline-flex space-x-2">
              <h4 className="font-bold text-xl">
                {selectedExperience.position}
              </h4>
              <a
                href={selectedExperience.link}
                target="_blank"
                className="text-xl text-blue border-b-2"
              >
                {selectedExperience.enterprise}
              </a>
            </div>
            <p className="opacity-80 mb-6 ">{selectedExperience.time}</p>
            {selectedExperience.collaboration.map((list, index) => (
              <div key={index} className="flex items-center gap-4 py-2">
                <div>
                  <DotOutline size={32} />
                </div>
                <p className="opacity-80">{list}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

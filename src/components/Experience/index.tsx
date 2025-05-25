import { useState } from "react";
import { experienceList } from "./experienceList";
import { DotOutline } from "@phosphor-icons/react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

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
      className="py-20 flex justify-center items-center flex-col"
      aria-label="Experiências profissionais"
    >
      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-medium mb-12"
      >
        Onde eu trabalhei
      </motion.h2>
      <div className="flex justify-center md:gap-6 max-md:flex-col max-md:items-center ">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col max-md:flex-row"
          role="tablist"
          aria-label="Seção"
        >
          {experienceList.map((experience) => (
            <button
              aria-selected={experience.id === selectedExperience.id}
              aria-controls={`panel-${experience.id}`}
              onClick={() => setSelectedExperience(experience)}
              className={cn(
                "text-left p-2 px-4 hover:bg-blue/50 transition-colors max-md:border-b-4 max-md:border-r-0 border-r-4 max-md:w-28 max-md:text-center max-md:text-sm border-blue/20 cursor-pointer",
                experience.title === selectedExperience.title && "border-blue"
              )}
              role="tab"
              key={experience.id}
            >
              {experience.title}
            </button>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExperience.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="max-w-[600px] max-md:min-w-0 max-md:text-center"
            role="tabpanel"
            id={`panel-${selectedExperience.id}`}
            tabIndex={0}
          >
            <div className="inline-flex space-x-2 mt-4">
              <h3 className="font-bold text-xl max-sm:text-base">
                {selectedExperience.position}
              </h3>
              <a
                href={selectedExperience.link}
                target="_blank"
                className="text-xl text-blue border-b-2 max-sm:text-base"
              >
                {selectedExperience.enterprise}
              </a>
            </div>
            <div>
              <p className="opacity-80 mb-6 text-left max-md:text-center max-md:text-sm">
                {selectedExperience.time}
              </p>
            </div>
            {selectedExperience.collaboration.map((list, index) => (
              <div
                key={index}
                className="flex items-center max-md:justify-center gap-4 max-md:gap-0 py-2"
              >
                <div className="">
                  <DotOutline size={32} />
                </div>
                <p className="opacity-80 w-[80vw] md:w-[60vw] max-md:text-left">
                  {list}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

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
      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-medium mb-12"
      >
        Onde eu trabalhei
      </motion.h2>
      <div className="inline-flex" role="tablist">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
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
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExperience.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="px-10 max-w-2xl min-w-2xl min-h-[400px]"
            role="tabpanel"
            id={`panel-${selectedExperience.id}`}
            tabIndex={0}
          >
            <div className="inline-flex space-x-2">
              <motion.h3
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-bold text-xl"
              >
                {selectedExperience.position}
              </motion.h3>
              <motion.a
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                href={selectedExperience.link}
                target="_blank"
                className="text-xl text-blue border-b-2"
              >
                {selectedExperience.enterprise}
              </motion.a>
            </div>
            <motion.p
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="opacity-80 mb-6 "
            >
              {selectedExperience.time}
            </motion.p>
            {selectedExperience.collaboration.map((list, index) => (
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
                key={index}
                className="flex items-center gap-4 py-2"
              >
                <div>
                  <DotOutline size={32} />
                </div>
                <p className="opacity-80">{list}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

import { useState } from "react";
import { experienceList } from "./experienceList";
import { cn } from "../../utils/cn";
import { Dot } from "lucide-react";

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
    const [selectedExperience, setSelectedExperience] =
        useState<ExperienceItem>(experienceList[0]);

    return (
        <section
            id="experience"
            className="h-[80vh] flex justify-center items-center flex-col max-sm:mb-12"
            aria-label="Experiências profissionais"
        >
            <h2 className="text-4xl font-medium mb-12">Onde eu trabalhei</h2>
            <div className="flex justify-center md:gap-6 max-md:flex-col max-md:items-center ">
                <div
                    className="flex flex-col max-md:flex-row"
                    role="tablist"
                    aria-label="Seção"
                >
                    {experienceList.map((experience) => (
                        <button
                            aria-selected={
                                experience.id === selectedExperience.id
                            }
                            aria-controls={`panel-${experience.id}`}
                            onClick={() => setSelectedExperience(experience)}
                            className={cn(
                                "text-left p-2 px-4 hover:bg-blue/50 transition-colors max-md:border-b-4 max-md:border-r-0 border-r-4 max-md:w-28 max-md:text-center max-md:text-sm border-blue/20 cursor-pointer",
                                experience.title === selectedExperience.title &&
                                    "border-blue"
                            )}
                            role="tab"
                            key={experience.id}
                        >
                            {experience.title}
                        </button>
                    ))}
                </div>
                <div
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
                                <Dot size={32} />
                            </div>
                            <p className="opacity-80 w-[80vw] md:w-[60vw] max-md:text-left">
                                {list}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

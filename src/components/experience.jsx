import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import data from "../data/experiences.json";
import { motion } from "framer-motion";

const Section = ({ title, items }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <Card className="bg-white dark:bg-zinc-900 border border-black dark:border-zinc-700 shadow-md dark:shadow-lg transition-all">
            <CardContent className="p-5 space-y-2">
              <div className="text-lg font-semibold text-zinc-800 dark:text-white">
                {item.title}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400 italic">
                {item.organization || item.company} — {item.date}
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {item.responsibilities.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);

const Experience = () => {
  const { workExperiences, organizationalExperiences, volunteerExperiences } =
    data;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 space-y-10">
      {workExperiences.length > 0 && (
        <Section title="Work Experiences" items={workExperiences} />
      )}
      {organizationalExperiences.length > 0 && (
        <Section
          title="Organizational Experiences"
          items={organizationalExperiences}
        />
      )}
      {volunteerExperiences.length > 0 && (
        <Section title="Volunteer Experiences" items={volunteerExperiences} />
      )}
    </div>
  );
};

export default Experience;

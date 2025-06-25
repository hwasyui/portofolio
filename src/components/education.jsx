import React from "react";
import data from "../data/educations.json";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Education = () => {
  return (
    <section className="relative px-4 py-16 md:px-20 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-14 relative z-10">
        Education
      </h2>

      <div className="flex flex-col gap-12 relative z-10">
        {data.map((edu, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            className="relative pl-10 md:pl-16"
          >
            <motion.div
              whileHover={{
                scale: 1.015,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className="border-l-4 border-primary dark:bg-zinc-900 rounded-xl shadow-md"
              >
                <CardContent className="pl-6 pr-4 py-6 md:py-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {edu.school}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground gap-1 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">
                    {edu.degree}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground gap-1 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {edu.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

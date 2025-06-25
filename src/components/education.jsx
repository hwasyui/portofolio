import React from "react";
import data from "../data/educations.json";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section className="px-4 py-16 md:px-20 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-14">Education</h2>
      <div className="flex flex-col gap-8">
        {data.map((edu, index) => (
          <Card
            key={index}
            className="relative border-l-4  dark:bg-zinc-900 border-primary rounded-xl shadow-sm dark:shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="pl-6 pr-4 py-6 md:py-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl md:text-2xl font-semibold">{edu.school}</h3>
                <div className="flex items-center text-sm text-muted-foreground gap-1 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-1">{edu.degree}</p>
              <div className="flex items-center text-sm text-muted-foreground gap-1 mb-3">
                <MapPin className="w-4 h-4" />
                <span>{edu.location}</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {edu.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;

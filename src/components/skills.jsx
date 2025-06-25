import React from "react";
import {
  Code2,
  Database,
  Cpu,
  Bot,
  BarChart2,
  Wrench,
  Settings2,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import skills from "../data/skills.json";

const fadeVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const SkillGroup = ({ title, icon, items }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 text-lg font-semibold dark:text-white ">
      {icon}
      <span>{title}</span>
    </div>
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((item) => (
        <Badge
          variant="outline"
          key={item}
          className="text-sm px-3 dark:bg-zinc-900 py-1 border-muted-foreground whitespace-nowrap"
        >
          {item}
        </Badge>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Skills</h2>

        <Tabs defaultValue="fullstack" className="w-full">
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            <TabsList className="inline-flex gap-2 mb-6 border-b border-border pb-2">
              {[
                { value: "fullstack", label: "Full-Stack", icon: Code2 },
                { value: "databases", label: "Databases", icon: Database },
                { value: "languages", label: "Languages", icon: Cpu },
                { value: "ai", label: "AI", icon: Bot },
                { value: "tools", label: "Tools", icon: Wrench },
                { value: "viz", label: "Visualization", icon: BarChart2 },
              ].map(({ value, label, icon: Icon }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="data-[state=active]:bg-gray-200 dark:data-[state=active]:bg-gray-700
                             data-[state=active]:text-black dark:data-[state=active]:text-white
                             data-[state=active]:scale-105 transition-all duration-300 ease-in-out
                             rounded-md px-4 py-2 flex items-center gap-2 whitespace-nowrap"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="fullstack">
            <motion.div variants={fadeVariants} initial="initial" animate="animate">
              <SkillGroup
                title="Full-Stack Web Development"
                icon={<Code2 className="w-5 h-5" />}
                items={skills.fullstack}
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="databases">
            <motion.div variants={fadeVariants} initial="initial" animate="animate">
              <SkillGroup
                title="Databases"
                icon={<Database className="w-5 h-5" />}
                items={skills.databases}
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="languages">
            <motion.div variants={fadeVariants} initial="initial" animate="animate">
              <SkillGroup
                title="Programming Languages"
                icon={<Cpu className="w-5 h-5" />}
                items={skills.languages}
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="ai">
            <motion.div variants={fadeVariants} initial="initial" animate="animate" className="space-y-6">
              {Object.entries(skills.ai).map(([title, items]) => (
                <SkillGroup
                  key={title}
                  title={title}
                  icon={<Bot className="w-5 h-5" />}
                  items={items}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="tools">
            <motion.div variants={fadeVariants} initial="initial" animate="animate">
              <SkillGroup
                title="Tools & Platforms"
                icon={<Settings2 className="w-5 h-5" />}
                items={skills.tools}
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="viz">
            <motion.div variants={fadeVariants} initial="initial" animate="animate">
              <SkillGroup
                title="Data Visualization"
                icon={<BarChart2 className="w-5 h-5" />}
                items={skills.visualization}
              />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;

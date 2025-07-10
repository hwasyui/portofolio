import React from "react";
import {
  Code2,
  Cpu,
  Bot,
  Wrench,
  Terminal
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
    <div className="flex items-center gap-2 text-lg font-semibold dark:text-white">
      {icon}
      <span>{title}</span>
    </div>
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((item) => (
        <motion.div
          key={item}
          whileHover={{
            scale: 1.08,
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Badge
            variant="outline"
            className="text-sm px-3 py-1 dark:bg-zinc-900 border-muted-foreground whitespace-nowrap cursor-pointer transition-all"
          >
            {item}
          </Badge>
        </motion.div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Skills</h2>

        <Tabs defaultValue="FullStack" className="w-full">
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            <TabsList className="inline-flex gap-2 mb-6 border-b border-border pb-2">
              {[
                { value: "FullStack", label: "Full-Stack Web Dev", icon: Code2 },
                { value: "Languages & Tools", label: "Languages & Tools", icon: Cpu },
                { value: "AI & Machine Learning", label: "AI & ML", icon: Bot },
                { value: "Automation & Data", label: "Automation & Data", icon: Wrench },
                { value: "Deployment & Platforms", label: "Deployment", icon: Terminal },
              ].map(({ value, label, icon: Icon }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="data-[state=active]:bg-gray-200 dark:data-[state=active]:bg-zinc-900
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

          <TabsContent value="FullStack">
            <motion.div variants={fadeVariants} initial="initial" animate="animate" className="space-y-6">
              {Object.entries(skills["Full-Stack Web Development"]).map(([title, items]) => (
                <SkillGroup
                  key={title}
                  title={title}
                  icon={<Code2 className="w-5 h-5" />}
                  items={items}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="Languages & Tools">
            <motion.div variants={fadeVariants} initial="initial" animate="animate">
              <SkillGroup
                title="Languages & Tools"
                icon={<Cpu className="w-5 h-5" />}
                items={skills["Languages & Tools"]}
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="AI & Machine Learning">
            <motion.div variants={fadeVariants} initial="initial" animate="animate" className="space-y-6">
              {Object.entries(skills["AI & Machine Learning"]).map(([title, items]) => (
                <SkillGroup
                  key={title}
                  title={title}
                  icon={<Bot className="w-5 h-5" />}
                  items={items}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="Automation & Data">
            <motion.div variants={fadeVariants} initial="initial" animate="animate">
              {Object.entries(skills["Automation & Data"]).map(([title, items]) => (
                <SkillGroup
                  key={title}
                  title={title}
                  icon={<Bot className="w-5 h-5" />}
                  items={items}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="Deployment & Platforms">
            <motion.div variants={fadeVariants} initial="initial" animate="animate">
              <SkillGroup
                title="Deployment & Platforms"
                icon={<Terminal className="w-5 h-5" />}
                items={skills["Deployment & Platforms"]}
              />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;

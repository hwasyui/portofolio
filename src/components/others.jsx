import React, { useState } from "react";
import data from "../data/others.json";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you use a Button component

const Others = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll
    ? data.certificates
    : data.certificates.slice(0, 3);

  return (
    <div className="w-full p-4 md:p-6 bg-white border-black border-1 dark:bg-zinc-900 rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Others</h2>

      {/* Languages */}
      <div>
        <h3 className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-2">Languages</h3>
        <ul className="space-y-1 pl-4 list-disc">
          {data.languages.map((lang, idx) => (
            <li key={idx} className="text-zinc-600 dark:text-zinc-300">
              {lang.name}{" "}
              <span className="italic text-sm text-zinc-500">({lang.level})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Certificates */}
      <div>
        <h3 className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-2">Certificates</h3>
        <ul className="space-y-3">
          {visibleCertificates.map((cert, idx) => (
            <li
              key={idx}
              className="group flex flex-col md:flex-row md:items-center md:justify-between bg-zinc-50 dark:bg-zinc-800 px-4 py-3 rounded-xl transition-all duration-200 hover:shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-700"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-800 dark:text-zinc-100 font-medium">{cert.title}</span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      <ArrowUpRight className="w-4 h-4 inline" />
                    </a>
                  )}
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{cert.id}</span>
              </div>
              <Badge className="mt-2 md:mt-0 bg-zinc-200 dark:bg-zinc-700 text-xs">
                {cert.issuer}
              </Badge>
            </li>
          ))}
        </ul>
        {data.certificates.length > 3 && (
          <div className="mt-4 text-center">
            <Button
              variant="outline"
              size="sm"
              className="text-sm text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-700"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Others;

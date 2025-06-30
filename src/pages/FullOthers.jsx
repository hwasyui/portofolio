import React from "react";
import Others from "../components/others";

const FullOthers = () => {
  return (
    <main className="flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <section id="all-others" className="scroll-mt-20 min-h-screen px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Others showAll={true} />
        </div>
      </section>
    </main>
  );
};

export default FullOthers;

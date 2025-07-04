"use client";

import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false }); // Skip ssr, no hydration even with parent.

type TypeWriterProps = {
  text: string;
  duration: number;
  className?: string; 
};

export default function TypeWriter({text, duration, className} : TypeWriterProps) {
  return (
    <div
      id="typewriter"
      className={`text-center ${className ?? ""}`}
    >
      <Typewriter
        options={{ loop: false, delay:50}}
        onInit={(typewriter) => {
          typewriter.pauseFor(duration);
          typewriter.typeString(text).start();

        }}
      />
    </div>
  );
}

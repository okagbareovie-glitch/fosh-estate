"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ContainerTextFlipProps = {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
};

export function ContainerTextFlip({
  words = ["Legacy", "Ownership", "Value", "Security"],
  interval = 2600,
  className,
  textClassName,
  animationDuration = 650,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState<number | "auto">("auto");
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentWidth = textRef.current?.scrollWidth;
    if (currentWidth) {
      setWidth(currentWidth + 24);
    }
  }, [currentWordIndex]);

  useEffect(() => {
    if (words.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setCurrentWordIndex((index) => (index + 1) % words.length);
    }, interval);

    return () => window.clearInterval(intervalId);
  }, [interval, words.length]);

  const currentWord = words[currentWordIndex] || "";

  return (
    <motion.span
      layout
      layoutId={`fosh-flip-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-flex min-h-[1.06em] items-center justify-center rounded-md border border-[#b9dcff] bg-[#e8f3ff] px-3 pb-1 pt-0.5 align-baseline text-[var(--blue)] shadow-[inset_0_-1px_#cfe6ff,inset_0_0_0_1px_rgba(0,94,178,0.08),0_10px_24px_rgba(0,94,178,0.08)]",
        className
      )}
      aria-label={currentWord}
    >
      <motion.span
        key={currentWord}
        ref={textRef}
        layoutId={`fosh-flip-word-${currentWord}-${id}`}
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block whitespace-nowrap", textClassName)}
      >
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: index * 0.018 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </motion.span>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Globe2, MapPinned, Phone } from "lucide-react";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const infoIcons = {
  website: Globe2,
  phone: Phone,
  address: MapPinned,
} as const;

type InfoType = keyof typeof infoIcons;

type HeroSectionProps = Omit<HTMLMotionProps<"section">, "title"> & {
  eyebrow?: string;
  logo?: {
    url?: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 18, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function InfoItem({ type, children }: { type: InfoType; children: React.ReactNode }) {
  const Icon = infoIcons[type];

  return (
    <div className="flex min-w-0 items-start gap-2">
      <Icon aria-hidden className="size-4 shrink-0 text-[var(--blue)]" />
      <span className="min-w-0 overflow-visible text-wrap break-words leading-5 text-pretty">
        {children}
      </span>
    </div>
  );
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      className,
      eyebrow,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      secondaryAction,
      backgroundImage,
      contactInfo,
      ...props
    },
    ref
  ) => {
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex min-h-[calc(100svh-86px)] w-full flex-col overflow-hidden bg-[var(--background)] text-[var(--ink)] md:flex-row",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        <div className="flex w-full flex-col justify-between px-5 py-10 sm:px-8 md:w-[56%] md:px-10 md:py-12 lg:px-16 xl:px-[max(4rem,calc((100vw-1280px)/2))] xl:pr-16">
          <div>
            <motion.header className="mb-10 md:mb-14" variants={itemVariants}>
              {logo ? (
                <div className="flex items-center">
                  {logo.url ? (
                    <Image
                      src={logo.url}
                      alt={logo.alt}
                      width={190}
                      height={96}
                      unoptimized
                      className="mr-3 h-12 w-auto max-w-[154px] rounded-sm object-contain"
                    />
                  ) : (
                    <div className="mr-3 grid size-12 place-items-center rounded-md bg-[var(--navy)] text-base font-semibold text-white">
                      FE
                    </div>
                  )}
                  <div>
                    {logo.text ? (
                      <p className="text-lg font-semibold text-[var(--navy)]">
                        {logo.text}
                      </p>
                    ) : null}
                    {slogan ? (
                      <p className="text-xs font-medium tracking-[0.12em] text-[var(--muted-foreground)]">
                        {slogan}
                      </p>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </motion.header>

            <motion.main variants={containerVariants}>
              {eyebrow ? (
                <motion.p
                  className="mb-5 font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]"
                  variants={itemVariants}
                >
                  {eyebrow}
                </motion.p>
              ) : null}
              <motion.h1
                className="max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.02] tracking-normal text-[var(--navy)] sm:text-6xl lg:text-7xl"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.div
                className="my-6 h-1 w-20 rounded-full bg-[var(--blue)]"
                variants={itemVariants}
              />
              <motion.p
                className="max-w-xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                variants={itemVariants}
              >
                <a
                  href={callToAction.href}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
                >
                  {callToAction.text}
                  <ArrowRight aria-hidden size={18} />
                </a>
                {secondaryAction ? (
                  <a
                    href={secondaryAction.href}
                    className="inline-flex min-h-14 items-center justify-center rounded-md border border-[var(--line-strong)] bg-white px-6 text-base font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)]"
                  >
                    {secondaryAction.text}
                  </a>
                ) : null}
              </motion.div>
            </motion.main>
          </div>

          <motion.footer className="mt-12 w-full" variants={itemVariants}>
            <div className="grid gap-4 border-y border-[var(--line)] py-5 text-sm text-[var(--muted-foreground)] sm:grid-cols-[1fr_0.9fr_1.2fr]">
              <InfoItem type="website">{contactInfo.website}</InfoItem>
              <InfoItem type="phone">{contactInfo.phone}</InfoItem>
              <InfoItem type="address">{contactInfo.address}</InfoItem>
            </div>
          </motion.footer>
        </div>

        <motion.div
          className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--navy)] md:aspect-auto md:min-h-auto md:w-[44%] md:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]"
          variants={imageVariants}
        >
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 44vw, 100vw"
            className="object-cover object-[70%_center] md:object-[72%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,6,19,0.02),rgba(0,6,19,0.42))]" />
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };

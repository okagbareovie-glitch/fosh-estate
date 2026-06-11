"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/format";
import { cn } from "@/lib/utils";

type Navbar1Props = {
  className?: string;
};

export function Navbar1({ className }: Navbar1Props) {
  const [isOpen, setIsOpen] = useState(false);
  const enquiryHref = createWhatsAppUrl(
    "Hello Fosh Estate, I want to ask about current land availability, pricing, and inspection dates.",
  );

  const toggleMenu = () => setIsOpen((value) => !value);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <div className={cn("flex w-full justify-center px-4 py-6", className)}>
      <div className="relative z-10 flex w-full max-w-3xl items-center justify-between rounded-full bg-white px-6 py-3 shadow-lg">
        <Link
          href="/"
          aria-label="Fosh Estate home"
          className="flex items-center"
        >
          <motion.div
            className="mr-6 h-8 w-20"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={siteConfig.logo}
              alt="Fosh Estate logo"
              width={150}
              height={80}
              priority
              className="h-8 w-auto object-contain"
            />
          </motion.div>
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          {siteConfig.navItems.map((item) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-[var(--navy)] transition-colors hover:text-[var(--blue)]"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href={enquiryHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--blue)]"
          >
            Enquire now
            <ArrowRight aria-hidden size={15} />
          </a>
        </motion.div>

        <motion.button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="flex items-center md:hidden"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="h-6 w-6 text-[var(--navy)]" />
        </motion.button>
      </div>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <motion.div
              className="fixed inset-0 z-[99999] flex flex-col md:hidden"
              style={{ backgroundColor: "#ffffff" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between border-b border-gray-100 px-6 pb-4 pt-6">
                <Link
                  href="/"
                  onClick={toggleMenu}
                  aria-label="Fosh Estate home"
                >
                  <Image
                    src={siteConfig.logo}
                    alt="Fosh Estate logo"
                    width={120}
                    height={64}
                    className="h-7 w-auto object-contain"
                  />
                </Link>
                <motion.button
                  type="button"
                  aria-label="Close navigation menu"
                  className="rounded-full p-2 transition-colors hover:bg-gray-100"
                  onClick={toggleMenu}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-6 w-6 text-[var(--navy)]" />
                </motion.button>
              </div>

              <div className="flex flex-1 flex-col gap-1 px-6 pt-8">
                {siteConfig.navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 + 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-gray-100 py-4 text-lg font-semibold text-[var(--navy)] transition-colors hover:text-[var(--blue)]"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="pt-8"
                >
                  <a
                    href={enquiryHref}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-5 py-4 text-base font-semibold text-white transition-colors hover:bg-[var(--blue)]"
                    onClick={toggleMenu}
                  >
                    Enquire now
                    <ArrowRight aria-hidden size={16} />
                  </a>
                </motion.div>
              </div>
            </motion.div>,
            document.body,
          )
        : null}
    </div>
  );
}

"use client";

import { FC, useState } from "react";

import { motion } from "framer-motion";

import { cn } from "@/utils/utils";
import { barlow } from "@/lib/fonts";
import { Logo, NavItems } from "@/components";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setTheme, theme } = useTheme();

  return (
    <header className={`sticky top-0 z-20 font-barlow text-gray-800 ${barlow.className}`}>
      <nav className="bg-white dark:bg-[#161625]">
        <div
          className="mx-auto w-full px-4 sm:px-6 lg:px-8
        "
        >
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Logo />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex items-center gap-9">
                <div className="ml-4 hidden items-center gap-6 text-2xl md:flex">
                  <NavItems setIsOpen={setIsOpen} isOpen={isOpen} />
                </div>

                <motion.div
                  className="cursor-pointer will-change-transform md:will-change-auto"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "light" ? (
                    <IoMoonOutline
                      className="h-8 w-8"
                      onClick={() => setTheme("dark")}
                    />
                  ) : (
                    <IoSunnyOutline
                      className="h-8 w-8 text-white"
                      onClick={() => setTheme("light")}
                    />
                  )}
                </motion.div>
              </div>

              <div className="flex items-center text-2xl md:hidden">
                <motion.button
                  className="inline-flex items-center justify-center p-2 will-change-transform md:will-change-auto"
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  aria-label="navigation menu"
                >
                  {isOpen ? (
                    <RxCross1 className="dark:text-white" />
                  ) : (
                    <RxHamburgerMenu className="dark:text-white" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          {isOpen && (
            <motion.div
              className="fixed left-0 h-screen w-screen bg-white will-change-transform dark:bg-rich-black md:hidden md:will-change-auto"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className={`space-y-2 px-2 pb-3 pl-4 pt-2 text-2xl sm:px-3`}>
                <NavItems setIsOpen={setIsOpen} isOpen={isOpen} />
              </div>
            </motion.div>
          )}
        </div>
        <hr className={cn("shadow-lg dark:hidden", isOpen && "hidden")} />
      </nav>
    </header>
  );
};

export default Navbar;

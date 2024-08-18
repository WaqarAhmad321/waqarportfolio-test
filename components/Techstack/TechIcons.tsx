"use client";

import { TechIconProps } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";
import { FC } from "react";

const fadeInAnimationVariants = {
  initial: {
    transform: "scale(0)",
  },
  animate: (index: number) => ({
    transform: "scale(1)",
    transition: {
      type: "spring",
      delay: 0.05 * index,
      ease: "linear",
    },
  }),
};

const RenderIcons: FC<TechIconProps> = ({ label, src, displayLabel }) => {
  return (
    <div className="group mb-2 flex flex-col items-center">
      <p
        className={cn(
          "mb-2 mt-2 whitespace-nowrap text-xs font-light sm:text-sm",
          displayLabel || "invisible transition-transform group-hover:visible",
        )}
      >
        {label}
      </p>

      <motion.div
        className="flex h-16 w-16 items-center justify-center"
        animate={
          label?.toLowerCase() === "react" && {
            rotate: [0, 360],
            transition: {
              repeat: Infinity,
              duration: 15,
              ease: "linear",
              repeatType: "loop",
            },
          }
        }
      >
        <Image
          src={src}
          alt={`${label} logo`}
          priority
          width={60}
          height={60}
          className={cn(
            "h-auto w-12 transition-transform group-hover:scale-125 sm:w-20",
            {
              "w-24 sm:w-32": label?.toLowerCase() === "tailwind",
              "w-24 sm:w-36": label?.toLowerCase() === "nodejs",
            },
          )}
        />
      </motion.div>
    </div>
  );
};

const TechIcons: FC<TechIconProps> = ({ index, label, src, displayLabel }) => {
  const icons = (
    <RenderIcons label={label} src={src} displayLabel={displayLabel} />
  );

  return displayLabel ? (
    <motion.div
      className="m-2 flex flex-col items-center will-change-transform md:will-change-auto"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      custom={index}
    >
      {icons}
    </motion.div>
  ) : (
    icons
  );
};

export default TechIcons;

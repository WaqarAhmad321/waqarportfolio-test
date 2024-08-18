import Image from "next/image";
import logos from "@/lib/logos";
import { TechStackProps } from "@/lib/types";

import { TechIcons } from "@/components";
import { FC } from "react";
import CoderImage from "./CoderImage";

const iconsArray: TechStackProps[] = [
  logos.typescript,
  logos.react,
  logos.nextjs,
  logos.javascript,
  logos.tailwind,
  logos.reactQuery,
  logos.nodejs,
  logos.monogdb,
  logos.redux,
  logos.reactRouter,
  logos.git,
  logos.firebase,
];

const TechStack: FC = () => {
  return (
    <div id="techstack">
      <div className="flex flex-col items-center xl:flex-row">
        <div className="w-full text-center text-6xl font-light leading-snug">
          <h3 className="text-center font-bold text-heading-color dark:text-white">
            My Tech Stack
          </h3>
          <div className="xl:ml-26 mt-5 grid grid-cols-4 xl:grid xl:grid-cols-6">
            {iconsArray.map(({ label, src }, index) => (
              <TechIcons
                index={index}
                label={label}
                src={src}
                key={label}
                displayLabel={true}
              />
            ))}
          </div>
        </div>
        
        <CoderImage />
      </div>
    </div>
  );
};

export default TechStack;

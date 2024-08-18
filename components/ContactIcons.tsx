"use client";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { BsEnvelopeFill } from "react-icons/bs";
import { IconLinksProps } from "@/lib/types";
import Link from "next/link";
import { cn } from "@/utils/utils";

const icons: IconLinksProps[] = [
  {
    href: "https://github.com/WaqarAhmad321/",
    icon: <RxGithubLogo />,
    title: "github",
  },
  {
    href: "https://www.linkedin.com/in/waqar-ahmad321/",
    icon: <RxLinkedinLogo />,
    title: "linkedIn",
  },
  {
    href: "mailto:codewithwaqarahmad@gmail.com",
    icon: <BsEnvelopeFill />,
    title: "mail",
  },
];

const ContactIcons = ({ displayTitle }: { displayTitle?: boolean }) => {
  return (
    <>
      {icons.map((icon) => (
        <Link
          key={icon.title}
          href={icon.href}
          target="_blank"
          className={cn(
            "flex flex-row items-center text-heading-color transition-colors hover:text-slate-800 dark:text-gray-400 dark:hover:text-gray-300",
            displayTitle ? "gap-5" : "gap-3",
          )}
          aria-label={`${icon.title} logo`}
          rel="noopener noreferrer"
        >
          <span className="text-4xl">{icon.icon}</span>
          <span className="flex flex-row text-xl capitalize hover:text-blue-700 dark:hover:text-gray-300">
            {displayTitle && icon.title}
          </span>
        </Link>
      ))}
    </>
  );
};

export default ContactIcons;

import { FC } from "react";

import ReactMarkdown from "react-markdown";

import Link from "next/link";
import { cn } from "@/utils/utils";
import { ProjectType } from "@/lib/projects";
import { Button, TechIcons, Wave, ProjectVideo } from "@/components";
import { RxExternalLink, RxGithubLogo } from "react-icons/rx";

interface ProjectProps extends ProjectType {
  index: number;
}

interface RenderProjectsProps extends ProjectType {
  odd: boolean;
}

const RenderDescription = ({ description }: { description: string[] }) => {
  return (
    <div className={`mb-2 mt-5 text-lg lg:mt-0`}>
      {description.map((desc, index) => (
        <ReactMarkdown key={index} className="mb-3">
          {desc}
        </ReactMarkdown>
      ))}
    </div>
  );
};

const RenderProjects: FC<RenderProjectsProps> = ({
  odd,
  title,
  description,
  links,
  stack,
  image,
}) => {
  return (
    <div
      className={cn("flex flex-col gap-6", {
        "bg-[#D8E6FC] dark:bg-black": odd,
      })}
    >
      <div className="w-full">
        <h4 className="text-center text-5xl font-medium text-gray-900 dark:text-white md:font-semibold">
          {title}
        </h4>
      </div>

      <div className="mx-6 flex flex-col xl:mx-40 xl:grid xl:grid-cols-2 xl:gap-4">
        <div className={cn("flex flex-col", odd && "xl:order-first")}>
          <RenderDescription description={description} />

          <div className="flex justify-between gap-3 xss:justify-around xs:justify-normal">
            <Link href={links.github} target="_blank">
              <Button variant="secondary" size="sm" aria-label="Source Code">
                Source Code
                <RxGithubLogo className="text-2xl" />
              </Button>
            </Link>
            <Link href={links.demo} target="_blank">
              <Button variant="secondary" size="sm" aria-label="Live Demo">
                Live Demo
                <RxExternalLink className="text-2xl" />
              </Button>
            </Link>
          </div>

          <div className="mb-24 flex justify-between xs:justify-normal xs:gap-6 sm:gap-8 md:mb-0 md:gap-10">
            {stack.map((icon) => (
              <TechIcons
                key={icon.label}
                label={icon.label}
                src={icon.src}
                displayLabel={false}
              />
            ))}
          </div>
        </div>

        <ProjectVideo title={title} image={image} />
      </div>
    </div>
  );
};

const Project: FC<ProjectProps> = ({
  index,
  title,
  description,
  image,
  links,
  stack,
}) => {
  const odd = index % 2 === 1 ? true : false;

  const project = (
    <RenderProjects
      odd={odd}
      title={title}
      description={description}
      image={image}
      links={links}
      stack={stack}
    />
  );

  return odd ? <Wave>{project}</Wave> : project;
};

export default Project;

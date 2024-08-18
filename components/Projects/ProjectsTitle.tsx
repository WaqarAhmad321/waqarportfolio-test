import React, { FC } from "react";

const ProjectsTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h3
      id="projects"
      className="mt-8 text-center text-7xl font-bold capitalize text-heading-color dark:text-white md:text-8xl"
    >
      {title}
    </h3>
  );
};

export default ProjectsTitle;

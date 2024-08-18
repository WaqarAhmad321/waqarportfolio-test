import { ProjectType } from "@/lib/projects";
import { Project } from "@/components";

const Projects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <>
      {projects.map(({ title, description, image, links, stack }, index) => (
        <Project
          key={title}
          index={index + 1}
          title={title}
          description={description}
          image={image}
          links={links}
          stack={stack}
        />
      ))}
    </>
  );
};

export default Projects;

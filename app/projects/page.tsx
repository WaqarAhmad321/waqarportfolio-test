import Link from "next/link";
import { barlow } from "@/lib/fonts";
import allProjects, { ProjectType } from "@/lib/projects";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Button, Projects, ProjectsTitle } from "@/components";

const allProjectsArray: ProjectType[] = [
  allProjects.theWildOasis,
  allProjects.worldWise,
  allProjects.carHub,
  allProjects.fastReactPizza,
  allProjects.thisWebsite,
  allProjects.usePopCorn,
  allProjects.travelList,
];

const allProjectsPage = () => {
  return (
    <section
      className={`font-barlow mt-10 overflow-hidden will-change-transform md:will-change-auto ${barlow.className}`}
    >
      <ProjectsTitle title="Projects I have worked on" />
      <div className="mt-24 md:mt-10">
        <Projects projects={allProjectsArray} />
        <div className="mb-24 flex w-screen items-center justify-center">
          <Link href="/" replace={false}>
            <Button
              variant="outlined"
              size="md"
              className="focus:ring focus:ring-special focus:ring-offset-2"
            >
              <span className="text-2xl">
                <MdOutlineArrowBackIosNew />
              </span>
              Go Back Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default allProjectsPage;

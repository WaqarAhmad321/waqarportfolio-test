import Link from "next/link";
import dynamic from "next/dynamic";
import { barlow } from "@/lib/fonts";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import allProjects, { ProjectType } from "@/lib/projects";
import { Button, Hero, Projects, ProjectsTitle, TechStack } from "@/components";

const Footer = dynamic(() => import("@/components/Footer/Footer"));

const projectsArray: ProjectType[] = [
  allProjects.theWildOasis,
  allProjects.worldWise,
  allProjects.carHub,
  allProjects.fastReactPizza,
  allProjects.thisWebsite,
  allProjects.usePopCorn,
];

export default function Home() {
  return (
    <main className={`overflow-hidden font-barlow ${barlow.className}`}>
      <Hero />

      <section className="mt-16 px-6 sm:px-16">
        <TechStack />
      </section>

      <section id="projects" className="mt-8">
        <ProjectsTitle title="featured projects" />
      </section>

      <section className="mt-24 md:mt-12">
        <Projects projects={projectsArray} />
        <div className="mb-2 mt-10 flex justify-center">
          <Link href="/projects">
            <Button
              variant="outlined"
              size="md"
              className="focus:ring focus:ring-special focus:ring-offset-2"
              aria-label="View All Projects button"
            >
              View All Projects
              <span className="text-2xl">
                <MdOutlineArrowForwardIos />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}

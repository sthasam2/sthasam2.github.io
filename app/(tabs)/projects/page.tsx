import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on",
};

const Projects = () => {
  return (
    <div>
      <PageHeader title={metadata.title} subtitle={metadata.description} />
    </div>
  );
};

export default Projects;

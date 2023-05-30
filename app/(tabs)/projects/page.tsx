import { PageHeader } from "@/components/PageHeader";
import { pagesMetadata } from "@/data/pagesMetadata";

export const metadata = {
  ...pagesMetadata.project,
};

const Projects = () => {
  return (
    <div>
      <PageHeader title={metadata.title} subtitle={metadata.description} />
    </div>
  );
};

export default Projects;

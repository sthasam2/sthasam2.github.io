import { PageHeader } from "@/components/PageHeader";
import { pagesMetadata } from "@/data/pagesMetadata";

export const metadata = {
  ...pagesMetadata.resume,
};

const Resume = () => {
  return (
    <div>
      <PageHeader title={metadata.title} subtitle={metadata.description} />
    </div>
  );
};

export default Resume;

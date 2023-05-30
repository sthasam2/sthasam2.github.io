import { PageHeader } from "@/components/PageHeader";
import { pagesMetadata } from "@/data/pagesMetadata";

export const metadata = {
  ...pagesMetadata.about,
};

const About = () => {
  return (
    <div>
      <PageHeader title={metadata.title} subtitle={metadata.description} />
    </div>
  );
};

export default About;

import { PageHeader } from "@/components/PageHeader";
import { pagesMetadata } from "@/data/pagesMetadata";

export const metadata = {
  ...pagesMetadata.gist,
};

const Gists = () => {
  return (
    <>
      <PageHeader title={metadata.title} subtitle={metadata.description} />
    </>
  );
};

export default Gists;

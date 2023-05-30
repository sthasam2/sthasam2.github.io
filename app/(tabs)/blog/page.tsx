import { PageHeader } from "@/components/PageHeader";
import { pagesMetadata } from "@/data/pagesMetadata";

export const metadata = {
  ...pagesMetadata.blog,
};

export default function Blog() {
  return (
    <>
      <PageHeader title={metadata.title} subtitle={metadata.description} />
    </>
  );
}

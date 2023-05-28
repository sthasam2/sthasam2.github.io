import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Gists",
  description: "Some snippets and gists I've accumulated over the years",
};

const Gists = () => {
  return (
    <>
      <PageHeader title={metadata.title} subtitle={metadata.description} />
    </>
  );
};

export default Gists;

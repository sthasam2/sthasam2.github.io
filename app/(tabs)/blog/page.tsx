import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Blogs",
  description: "Take a look at what I've managed to write about.",
};

export default function Blog() {
  return (
    <>
      <PageHeader title={metadata.title} subtitle={metadata.description} />
    </>
  );
}

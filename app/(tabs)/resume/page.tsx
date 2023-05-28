import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Resume",
  description: "See how I stack up",
};

const Resume = () => {
  return (
    <div>
      <PageHeader title={metadata.title} subtitle={metadata.description} />
    </div>
  );
};

export default Resume;

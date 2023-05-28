import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "About",
  description: "A little bit about me",
};

const About = () => {
  return (
    <div>
      <PageHeader title={metadata.title} subtitle={metadata.description} />
    </div>
  );
};

export default About;

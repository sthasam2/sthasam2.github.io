import { siteMetadata } from "@/data/siteMetadata";
// import {}

export function Heading() {
  return (
    <h1 className="text-lg">
      I am <span className="font-medium">{siteMetadata.fullName}</span> - a
      <span className="font-medium"> Software Engineer</span> based in{" "}
      <span className="font-medium ">Nepal</span>
    </h1>
  );
}

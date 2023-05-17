import { HeadingProps } from "@/types";

export function Heading({ fullName, designation, location }: HeadingProps) {
  return (
    <h1 className="text-lg">
      I am <span className="font-medium">{fullName}</span> - a
      <span className="font-medium"> {designation}</span> based in{" "}
      <span className="font-medium ">{location}</span>
    </h1>
  );
}

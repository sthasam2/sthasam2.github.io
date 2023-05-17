import { Greeting } from "@/components/homepage/Greeting";
import { Heading } from "@/components/homepage/Heading";
import { TypedBios } from "@/components/homepage/TypedBios";
import { siteMetadata } from "@/data/siteMetadata";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-between p-24">
        <Greeting message="Namaste, Solti!" />
        <Heading
          fullName={siteMetadata.fullName}
          designation={siteMetadata.designation}
          location={siteMetadata.location}
        />
        <TypedBios
          bios={[
            "Random Shit 1",
            "Second Random Shit 2",
            "Third Random Shit 3",
            "Fourth Random Shit 4",
          ]}
        />
      </main>
    </div>
  );
}

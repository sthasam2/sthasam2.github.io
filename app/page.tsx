import { Greeting } from "@/components/homepage/Greeting";
import { Heading } from "@/components/homepage/Heading";
import { TypedBios } from "@/components/homepage/TypedBios";
import { ProfileCard } from "@/components/homepage/ProfileCard";
import { siteMetadata } from "@/data/siteMetadata";

export default function Home() {
  return (
    <div>
      <main className="mx-auto mt-8 flex max-w-3xl flex-row justify-between px-3 xl:max-w-5xl xl:px-1">
        <div className="">
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
        </div>
        <div>
          <div className="hidden space-x-2 md:block">
            <ProfileCard />
          </div>
        </div>
      </main>
    </div>
  );
}

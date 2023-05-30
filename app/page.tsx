import { Greeting } from "@/components/homepage/Greeting";
import { Heading } from "@/components/homepage/Heading";
import { TypedBios } from "@/components/homepage/TypedBios";
import { ProfileCard } from "@/components/homepage/ProfileCard";
import { siteMetadata } from "@/data/siteMetadata";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <main className="flex flex-row justify-between mx-auto ">
        <div className="">
          <Greeting message="Namaste, Solti!" />
          <div className="text-lg md:text-xl">
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
        </div>
        <div className="hidden md:block">
          <ProfileCard imageSrc="/static/portfolio.webp" />
        </div>
      </main>
    </Container>
  );
}

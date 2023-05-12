import { Greeting } from "@/components/homepage/Greeting";
import { Heading } from "@/components/homepage/Heading";
import { TypedBios } from "@/components/homepage/TypedBios";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-between p-24">
        <Greeting message="Namaste, Solti!" />
        <Heading />
        <TypedBios />
      </main>
    </div>
  );
}

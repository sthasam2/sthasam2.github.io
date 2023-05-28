import { Container } from "@/components/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}

import { Inter } from "next/font/google";
import { ThemeToggle } from "../../components/ThemeToggle";
import { Heading, Text } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Heading as="h1">Next.js + Radix-UI + Next-themes</Heading>
      <Text>This is a radix</Text>
      <ThemeToggle />
    </div>
  );
}

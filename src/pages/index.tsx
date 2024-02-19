import { Inter } from "next/font/google";
import { ThemeToggle } from "../../components/ThemeToggle";
import { Button, Heading, Text } from "@radix-ui/themes";

import { BookmarkIcon } from "@radix-ui/react-icons";
import AccentColorPicker from "../../components/ColorPicker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Heading as="h1">Next.js + Radix-UI + Next-themes</Heading>
      <Text>This is a radix</Text>
      <ThemeToggle />
      <Button>
        <BookmarkIcon width="16" height="16" /> Bookmark
      </Button>
      <AccentColorPicker />
    </div>
  );
}

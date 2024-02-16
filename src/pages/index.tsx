import { Inter } from "next/font/google";
import { ThemeToggle } from "../../components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-2">
      <h1>Next.js + Radix-UI + Next-themes</h1>
      <ThemeToggle />
    </div>
  );
}

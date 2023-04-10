import Image from "next/image";
import { Inter } from "next/font/google";
import NavbaSection from "@/components/NavbarSection";
import HeroSection from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavbaSection />
      <HeroSection />
    </main>
  );
}

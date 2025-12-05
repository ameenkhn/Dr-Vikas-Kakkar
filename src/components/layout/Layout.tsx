import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { FomoToast } from "@/components/sections/FomoToast";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
      <FomoToast />
    </div>
  );
}

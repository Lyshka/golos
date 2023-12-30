import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import React from "react";

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className="min-h-screen max-w-full flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;

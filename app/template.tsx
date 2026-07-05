"use client";
import { permanentRedirect, usePathname } from "next/navigation";
import { type ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Template = ({ children }: { children: ReactNode }) => {
  if (
    usePathname() !== "/under-construction" &&
    process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === "true"
  ) {
    permanentRedirect("/under-construction");
  }

  return (
    <>
      {usePathname() !== "/under-construction" && <Header />}
      <div className={`} flex min-h-dvh flex-col items-center justify-between`}>
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Template;

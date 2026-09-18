"use client";

import { ComingSoonProvider } from "@/components/coming-soon-context";
import { ComingSoonModal } from "@/components/coming-soon-modal";
import { Loader } from "@/components/loader";
import { Navbar } from "@/components/navbar";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ComingSoonProvider>
      <Loader />
      <Navbar />
      {children}
      <ComingSoonModal />
    </ComingSoonProvider>
  );
}

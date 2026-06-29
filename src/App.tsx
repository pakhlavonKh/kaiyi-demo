import { useState } from "react";

import { BranchesBlock } from "@/components/site/BranchesBlock";
import { CtaBand, Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { MobileStickyBar } from "@/components/site/MobileStickyBar";
import { PowertrainCompare } from "@/components/site/PowertrainCompare";
import { StatsStrip } from "@/components/site/StatsStrip";
import { FinanceBlock } from "@/components/site/FinanceBlock";
import type { Engine } from "@/components/site/engine-data";

export type CarColor = "white" | "black" | "grey";

export function App() {
  const [engine, setEngine] = useState<Engine>("gas");
  const [color, setColor] = useState<CarColor>("white");

  return (
    <div id="top" className="relative isolate min-h-screen overflow-hidden bg-[color:var(--obsidian)] text-[color:var(--pearl)]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-8rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-[-10rem] top-[24rem] h-[24rem] w-[24rem] rounded-full bg-white/4 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[18rem] bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <Header />
      <main className="pb-16 md:pb-0">
        <section id="model">
          <Hero engine={engine} color={color} onEngineChange={setEngine} onColorChange={setColor} />
          <StatsStrip engine={engine} />
        </section>
        <PowertrainCompare onSelect={setEngine} />
        <Gallery />
        <FinanceBlock />
        <BranchesBlock />
        <CtaBand />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
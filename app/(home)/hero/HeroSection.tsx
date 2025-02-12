"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";

export function HeroSection() {
  return (
    <div className="h-screen w-full flex md:items-center md:justify-center dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent 
  bg-gradient-to-b from-neutral-900 to-neutral-600 
  dark:from-neutral-50 dark:to-neutral-400"
        >
          Spotlight <br /> which is not overused.
        </h1>

        <TextGenerateEffect
          className="mt-4 font-normal text-base dark:bg-black dark:text-white-300 max-w-lg text-center mx-auto"
          words={
            " A subtle yet effective spotlight effect, because the previous version is used a bit too much these days."
          }
        />
      </div>
    </div>
  );
}

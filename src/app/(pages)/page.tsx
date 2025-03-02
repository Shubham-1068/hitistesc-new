"use client";
import { Spotlight } from "@/components/Spotlight";
import {
  HeroSection,
  About,
  RecentEvent,
  Explore,
  Message,
} from "@/components/ui/home";
import Guest from "@/components/ui/home/Guest";
import Decorations from "@/components/ui/home/Decorations";
import Banner from "@/components/ui/home/Banner";


export default function Hero() {
  return (
    <div className="mt-12 md:mt-2 h-full">
      <Decorations />
      <div className="relative hidden md:block">
        <Spotlight />
      </div>
      <HeroSection />
      <Banner />
      <div id="recent-events" className="relative">
        <RecentEvent />
        <div className="" />
      </div>
      <div className="relative">
        <div className="" />
      </div>
      <div className="relative">
        <About />
        <div className="" />
        <Explore  />
        <Guest />
        <Message />
      </div>
    </div>
  );
}
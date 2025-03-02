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
import Contributers from "@/components/ui/home/Contributers";


const dataContributers = [
  {
    quote: "Backend Developer | NodeJS, Java, Spring Boot, RESTful APIs, Docker",
    name: "Urooz Ahmad",
    designation: "Technical Lead, ISTE HIT",
    src: "https://media.licdn.com/dms/image/v2/C5603AQHvo0D1uB5qxQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1664129380158?e=1746662400&v=beta&t=Ex_SBvj8_UWHhPMXRrXOyA4ANEQLvEKhYjFQy7aMbys",
  },
  {
    quote: "Building Pegman | Kubernetes | Spring Boot | Grpc | Node.js",
    name: "Abhishek Kumar Verma",
    designation: "Technical Lead, ISTE HIT",
    src: "https://media.licdn.com/dms/image/v2/D4E03AQEacusWy4tNyg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713864732220?e=1746662400&v=beta&t=1fboH7OPaCRiQS2KXaJrUjCLLGiszTcxfU7JeXylq5c",
  },
  {
    quote: "Web Developer | Next.js | Node.js | Typescript | Java | Docker",
    name: "Shubham Raj",
    designation: "2nd Year Technical Team Member, ISTE HIT",
    src: "https://media.licdn.com/dms/image/v2/D4D03AQGTB7AbpEe8Rw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728377047932?e=1746662400&v=beta&t=mUlsJ6QuOmmrqBM5ylwxK6ffOgmHqwjIqxlUm_BN0VY",
  },
  {
    quote: "Pre-Final Year Student | C++ | React | Firebase | MERN Stack | PwC Launchpad 3.0 (2025) Qualified",
    name: "Arijit Ghosh",
    designation: "3rd Year Technical Team Member, ISTE HIT",
    src: "https://media.licdn.com/dms/image/v2/D4D03AQFrdDpvjqUhOw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1671470969045?e=1746662400&v=beta&t=T8bxjp3gMT2z5HByXnh1FQHPzEVx31gIChCSGSFDsXk",
  },
];


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
        <Contributers testimonials={dataContributers} />
        <Message />
      </div>
    </div>
  );
}
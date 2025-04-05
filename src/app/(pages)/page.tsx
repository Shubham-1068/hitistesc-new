"use client";
import { Spotlight } from "@/components/Spotlight";
import {
  HeroSection,
  About,
  RecentEvent,
  Explore,
} from "@/components/ui/home";
import Guest from "@/components/ui/home/Guest";
import Decorations from "@/components/ui/home/Decorations";
import Banner from "@/components/ui/home/Banner";
import Contributers from "@/components/ui/home/Contributers";
import Footer from "@/components/ui/footer/footer";
import Sponsors from "@/components/ui/home/Sponsors";

const dataContributers = [
  {
    quote: "Backend Developer | NodeJS, Java, Spring Boot, RESTful APIs, Docker",
    name: "Urooz Ahmad",
    designation: "Technical Lead, ISTE HIT",
    src: "https://media.licdn.com/dms/image/v2/D5603AQGVPpENlP2FBA/profile-displayphoto-shrink_400_400/B56ZXJLw.mGsAk-/0/1742837060354?e=1749081600&v=beta&t=Oy-pqlaClGY7RAzH7Q0Vqjw7X8BleIIW26ucAPQy3Y0",
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
    src: "https://media.licdn.com/dms/image/v2/D4D03AQGZFbTjyNtClw/profile-displayphoto-shrink_800_800/B4DZVa6ICSG4Ac-/0/1740986942829?e=1746662400&v=beta&t=w2-KwqJIVzDNvI1R3UMLD1LISsGgkk2nK5j5hjvwWNU",
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
      <Sponsors />
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
        {/* <Message /> */}
        <Footer />
      </div>
    </div>
  );
}
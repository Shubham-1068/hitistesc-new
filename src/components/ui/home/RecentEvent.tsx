import React from 'react';
import { Rocket, Calendar, ArrowRight } from 'lucide-react';

import IpadScroll from '@/components/IpadScroll';
import Link from 'next/link';

function App() {
  const events = [
    {
      id: 1,
      title: "Annual Hackathon 2025",
      date: "March 15-17, 2025",
      image: "https://res.cloudinary.com/dds4wowea/image/upload/v1739639103/ideathon_ugcda9.jpg",
      description: "Join us for 48 hours of coding, innovation, and fun!"
    },
    {
      id: 2,
      title: "AI Odyssey",
      date: "April 5, 2025",
      image: "https://res.cloudinary.com/dds4wowea/image/upload/v1739429882/IMG_20250210_174708_r6qojr.jpg",
      description: "Learn from industry experts about the latest tech trends."
    },
    {
      id: 3,
      title: "Alumni Connect",
      date: "May 12, 2025",
      image: "https://res.cloudinary.com/dds4wowea/image/upload/v1739424323/Screenshot_20250213_105424_Instagram_wqo5xr.jpg",
      description: "Connect with professionals and expand your network."
    },
    {
      id: 4,
      title: "Quest for Enigma",
      date: "June 20-25, 2025",
      image: "https://res.cloudinary.com/dds4wowea/image/upload/v1735397965/IMG_6073_fgnwsz.jpg",
      description: "A fantastic event that tested knowledge, boosted problem-solving skills, and kept the excitement high!"
    },
    {
      id: 5,
      title: "Web D Explore",
      date: "July 8, 2025",
      image: "https://res.cloudinary.com/dds4wowea/image/upload/v1739639580/webD_mhtpwf.jpg",
      description: "A perfect blend of learning, hands-on experience, and skill-building for future tech enthusiasts!"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white -mt-12 md:-mt-36">
      <IpadScroll
        titleComponent={
          <div className="flex flex-col items-center gap-4 md:mb-9 -mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
              Recent Events
            </h1>
            <p className="text-md text-gray-300 max-w-2xl px-8 md:px-0">
              Stay updated with the latest activities and upcoming events
            </p>
          </div>
        }
      >
        <div className="h-full flex items-center justify-center">
          <div className="w-full h-full overflow-hidden">
            <div className="image-scroll-container paused-on-hover">
              {events.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="relative h-full">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="h-full w-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <div className="flex items-center text-blue-300 mb-1">
                        {/* <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.date}</span> */}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-300 mb-3">{event.description}</p>
                      <Link
                        href={'/events'}
                        className="cursor-pointer inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span className="mr-1">Know More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate first few events to create seamless loop */}
              {events.slice(0, 3).map((event, index) => (
                <div key={`dup-${index}`} className="event-card">
                  <div className="relative h-full">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="h-full w-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <div className="flex items-center text-blue-300 mb-1">
                        {/* <Calendar className="w-4 h-4 mr-2" /> */}
                        {/* <span className="text-sm">{event.date}</span> */}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-300 mb-3">{event.description}</p>
                      <Link
                        href={'/events'} 
                        className="cursor-pointer inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span className="mr-1">Know More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </IpadScroll>
    </div>
  );
}

export default App;
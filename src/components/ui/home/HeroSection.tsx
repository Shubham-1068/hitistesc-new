import Link from "next/link";
import React from "react";
interface HeroSectionProps {}

const imagesData: string[] = [
  "https://res.cloudinary.com/dds4wowea/image/upload/v1739429882/IMG_20250210_174708_r6qojr.jpg",
  "https://res.cloudinary.com/ds4lbluhe/image/upload/v1708693635/IMG_20231101_185655_pwdjnf.jpg",
  "https://res.cloudinary.com/dds4wowea/image/upload/v1739641141/Brochure_ubqan0.jpg",
  "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/04/03/19/37/soldering-7897827_1280.jpg",
  "https://res.cloudinary.com/dds4wowea/image/upload/v1735392094/IMG_3504_q3xnlq.jpg",
];

export default function HeroSection() {
  return (
    <div className="relative h-[100vh] px-4 md:px-0">
      <div className="pb-16 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg my-auto">
            <h1 className="font font-annonymousPro text-4xl font-bold tracking-tight text-[#DCFFB7] sm:text-6xl">
              ISTE HIT-Chapter
            </h1>
            <h1 className="font font-annonymousPro text-2xl font-bold tracking-tight text-[#DCFFB7] sm:text-4xl mt-2">
              #Join the Revolution
            </h1>
            <p className="font-lemon mt-5 md:text-lg text-base text-[#FFF8E3]">
              Empowering Tomorrow Innovators: ISTE HIT –Chapter, Where
              Technology Meets Heroism!
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl "
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8 sm:mt-16 lg:mt-72">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {imagesData.slice(0, 2).map((imageUrl, index) => (
                        <div
                          key={index}
                          className="md:h-64 md:w-44 h-60 w-[42vw] overflow-hidden rounded-lg shadow-md shadow-[#FFF8E3] sm:opacity-0 lg:opacity-100"
                        >
                          <img
                            src={imageUrl}
                            className="h-full w-full object-cover object-center"
                            alt={`Image ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {imagesData.slice(2, 5).map((imageUrl, index) => (
                        <div
                          key={index}
                          className="md:h-64 md:w-44 h-52 w-[42vw] overflow-hidden rounded-lg shadow-md shadow-[#FFF8E3]"
                        >
                          <img
                            src={imageUrl}
                            className="h-full w-full object-cover object-center"
                            alt={`Image ${index + 3}`}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {imagesData.slice(5, 7).map((imageUrl, index) => (
                        <div
                          key={index}
                          className="hidden md:block md:h-64 md:w-44 h-52 w-20 overflow-hidden rounded-lg shadow-md shadow-[#FFF8E3]"
                        >
                          <img
                            src={imageUrl}
                            className="h-full w-full object-cover object-center"
                            alt={`Image ${index + 6}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/join-membership">
                <button className="group relative md:left-0 -left-1 overflow-hidden rounded-md border border-b-4 border-gray-400 bg-gray-950 px-3 md:px-4 py-2 font-medium text-[#FFF8E3] outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75">
                  <span className="absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md bg-gray-400 opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-gray-400 duration-500 group-hover:top-[150%]"></span>
                  Join Membership
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

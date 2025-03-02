import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const ipadScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // Modified rotation to flatten quickly when coming into view
  const rotate = useTransform(scrollYProgress, [0, 0.1, 1], [20, 0, 0]);
  const tiltX = useTransform(scrollYProgress, [0, 0.1, 1], [5, 0, 0]);
  const tiltY = useTransform(scrollYProgress, [0, 0.1, 1], [-5, 0, 0]);
  
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[70rem] flex items-center justify-center relative md:p-20"
      ref={containerRef}
    >
      <div
        className="py-8 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card 
          rotate={rotate} 
          translate={translate} 
          scale={scale}
          tiltX={tiltX}
          tiltY={tiltY}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  tiltX,
  tiltY,
  isHovered,
  setIsHovered,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        // Keep iPad still on hover
        rotateY: tiltY,
        rotateZ: tiltX,
        transition: "all 0.3s ease-out",
      }}
      className="md:max-w-3xl -mt-0 mx-auto h-[36rem] md:h-[30rem] w-full border-4 border-[#383838] p-3 md:p-4 bg-[#111111] rounded-[30px] shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-black md:rounded-2xl md:p-2">
        {children}
      </div>
    </motion.div>
  );
};

export default ipadScroll;
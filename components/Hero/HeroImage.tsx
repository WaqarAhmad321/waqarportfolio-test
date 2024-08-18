import Image from "next/image";
import React from "react";
import heroImage from "@/public/hero-image.png";

const HeroImage = () => {
  return (
    <div className="hidden max-w-[90rem] lg:mt-0 xl:block">
      <Image
        src="https://res.cloudinary.com/dkky0lrvb/image/upload/f_auto,q_auto/v1/portfolio-images/wrtckackgrxjrguy5iti"
        alt="hero image"
        priority
        fetchPriority="high"
        width={1920}
        height={1920}
        className="w-[90rem] animate-updown drop-shadow-2xl"
      />
    </div>
  );
};

export default HeroImage;

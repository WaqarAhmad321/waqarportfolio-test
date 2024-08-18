"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const CoderImage = () => {
  const { theme } = useTheme();

  return (
    <div className="order-last mb-10 mt-4 md:mb-0 xl:order-first">
      <Image
        src={
          theme === "dark"
            ? "/coder-img.svg"
            : "https://res.cloudinary.com/dkky0lrvb/image/upload/f_auto,q_auto/v1/portfolio-images/w8eh1dmp6lyjgxbwy4yo"
        }
        width={1144}
        height={617}
        alt="A coder having headphones placed between his neck coding on computer placed on table with github's developers activity in background"
        className="w-[43.75rem]"
      />
    </div>
  );
};

export default CoderImage;

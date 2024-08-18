import React from "react";
import Image from "next/image";

type ProjectVideoProps = {
  title: string;
  image?: {
    main?: { src: string; width?: number; height?: number };
    mp4?: string;
    webm?: string;
  };
};

const ProjectVideo = ({ title, image }: ProjectVideoProps) => {
  if (image !== undefined)
    return (
      <div className="order-first">
        {image.main && (
          <Image
            src={image.main.src}
            alt={`${title} image`}
            width={image.main.width}
            height={image.main.height}
            className="mx-auto rounded-lg shadow-lg"
            aria-label="Project image"
          />
        )}
        {image.mp4 && (
          <video
            autoPlay
            playsInline
            loop
            preload="auto"
            muted
            controls
            aria-label={`${title} video preview}`}
            width={300}
            height={300}
            className="mx-auto w-full rounded-lg shadow-lg"
          >
            <source src={image?.mp4} type="video/mp4" />
          </video>
        )}
      </div>
    );
};

export default ProjectVideo;

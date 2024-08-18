"use client";

import Image from "next/image";
import { ContactForm, ContactIcons } from "@/components";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="text-heading-color dark:text-white md:w-full">
      {theme === "dark" ? (
        <Image
          src="/layers.svg"
          width={1920}
          height={1080}
          alt="Waves Image"
          className="h-56 md:h-96 md:w-full"
        />
      ) : (
        <Image
          src={
            "https://res.cloudinary.com/dkky0lrvb/image/upload/f_auto,q_auto/v1/portfolio-images/wimwutqpbkjxt5r9l0nd"
          }
          width={1920}
          height={1080}
          alt="Waves Image"
          className="h-56 md:h-96 md:w-full"
        />
      )}

      <div
        id="footer"
        className="m-4 flex flex-col gap-4 lg:flex-row lg:justify-around lg:gap-0"
      >
        <div className="flex flex-col gap-4 lg:gap-0">
          <h3 className="text-5xl font-bold text-heading-color dark:text-white">
            Connect through
          </h3>
          <div className="flex flex-row gap-4">
            <div className="flex flex-grow flex-col justify-center gap-6 lg:mt-8 lg:justify-normal lg:gap-4">
              <ContactIcons displayTitle={true} />
            </div>

            <div className="hidden xs:block lg:flex lg:items-center lg:justify-center">
              <Image
                src="https://res.cloudinary.com/dkky0lrvb/image/upload/f_auto,q_auto/v1/portfolio-images/b0he513slsu5e5uqav1s"
                width={1144}
                height={617}
                alt="A mail box flying through 3 baloons attacked to the top and a lot of small sized mails in the background"
                className="w-[20rem]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-5xl font-bold dark:text-white">Say Hi!</h3>
          <ContactForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

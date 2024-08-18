import React from "react";
import { Button, ContactIcons, ScrollLink } from "@/components";
import Link from "next/link";

const HeroContact = () => {
  return (
    <div>
      <div className="mt-5 flex flex-row gap-2 text-4xl md:gap-4">
        <ContactIcons />
      </div>

      <div className="mt-6 flex gap-4">
        <ScrollLink href="#footer">
          <Button variant="primary" size="lg" aria-label="Contact Me button">
            Contact Me
          </Button>
        </ScrollLink>

        <Link href="projects">
          <Button
            variant="outlined"
            size="lg"
            className="focus:outline-4 focus:ring focus:ring-special focus:ring-offset-2"
            aria-label="See my work button"
          >
            See my work
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroContact;

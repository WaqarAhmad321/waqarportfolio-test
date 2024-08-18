"use client";

import Link, { LinkProps } from "next/link";
import React, { FC, PropsWithChildren } from "react";

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;

type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

const ScrollLink: FC<ScrollLinkProps> = ({ children, ...props }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.querySelector(targetId);

    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
      
    });
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};

export default ScrollLink;

import { ReactElement } from "react";

export type TechStackProps = {
  index?: number;
  label?: string;
  src: string;
};

export type IconLinksProps = {
  href: string;
  icon: ReactElement;
  title: string;
};

export interface TechIconProps extends TechStackProps {
  displayLabel: boolean;
}

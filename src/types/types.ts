import { HTMLAttributes, ReactNode } from "react";

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  header: string;
}

export interface SectionItemProps {
  title: string;
  subtitle?: string;
}

export interface SectionHeaderProps {
  header: string;
}

export interface ContactsProps {
  name: string;
  email: string;
  message: string;
}

export interface SectionSubtitleProps {
  subtitle: string;
}

export interface IProject {
  title: string;
  desc?: string;
  frontend?: string;
  styling?: string;
  ui?: string;
  backend?: string;
  dataStorage?: string;
  stateManager?: string;
  auth?: string;
  hosting?: string;
  github?: string;
  link?: string;
}

export interface NavLinkProps {
  link: string;
  name: string | ReactNode;
}

export interface MessageProps {
  message?: string;
}

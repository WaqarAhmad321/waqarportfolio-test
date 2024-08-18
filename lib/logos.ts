type logoNames =
  | "typescript"
  | "react"
  | "nextjs"
  | "javascript"
  | "tailwind"
  | "reactQuery"
  | "framerMotion"
  | "css"
  | "supabase"
  | "redux"
  | "reactRouter"
  | "git"
  | "styledComponents"
  | "cssModules"
  | "firebase"
  | "monogdb"
  | "nodejs";

type Logos = {
  [K in logoNames]: {
    label: string;
    src: string;
  };
};

const logos: Logos = {
  typescript: {
    label: "TypeScript",
    src: "/techstack/typescript.svg",
  },
  react: {
    label: "React",
    src: "/techstack/react.svg",
  },
  nextjs: {
    label: "Next.js",
    src: "/techstack/nextjs.svg",
  },
  javascript: {
    label: "JavaScript",
    src: "/techstack/javascript.svg",
  },
  tailwind: {
    label: "Tailwind",
    src: "/techstack/tailwind-css.svg",
  },
  reactQuery: {
    label: "React Query",
    src: "/techstack/react-query.svg",
  },
  supabase: {
    label: "Supabase",
    src: "/techstack/supabase.svg",
  },
  redux: {
    label: "Redux",
    src: "/techstack/redux.svg",
  },
  reactRouter: {
    label: "React Router",
    src: "/techstack/react-router.svg",
  },
  git: {
    label: "Git",
    src: "/techstack/git.svg",
  },
  framerMotion: {
    label: "Framer Motion",
    src: "/techstack/framer-motion.svg",
  },
  css: {
    label: "CSS",
    src: "/techstack/css.svg",
  },
  styledComponents: {
    label: "Styled Components",
    src: "/techstack/styled-components.svg",
  },
  cssModules: {
    label: "Css Modules",
    src: "/techstack/css-modules.webp",
  },
  firebase: {
    label: "Firebase",
    src: "/techstack/firebase-icon.svg",
  },
  monogdb: {
    label: "MongoDB",
    src: "/techstack/mongodb.svg",
  },
  nodejs: {
    label: "nodejs",
    src: "/techstack/nodejs.svg",
  },
};

export default logos;

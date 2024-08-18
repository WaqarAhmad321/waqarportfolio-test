import logos from "./logos";
import { TechStackProps } from "./types";

type ProjectNames =
  | "theWildOasis"
  | "worldWise"
  | "carHub"
  | "fastReactPizza"
  | "usePopCorn"
  | "travelList"
  | "thisWebsite";

export type ProjectType = {
  title: string;
  description: string[];
  image: {
    main?: { src: string; width?: number; height?: number };
    mp4?: string;
  };
  links: { github: string; demo: string };
  stack: TechStackProps[];
};

type Projects = { [K in ProjectNames]: ProjectType };

const allProjects: Projects = {
  theWildOasis: {
    title: "The Wild Oasis",
    description: [
      "The Wild Oasis is a hotel management web application built using **React** and utilizing **Supabase** as its backend.",
      "This web app enables the hotel employees to efficiently **monitor** cabins, bookings, guests, and check-ins and check-outs. The homepage features interactive **graphs** made using **recharts** allowing employees to view average stay durations and daily sales.",
      "It fetches data from **Supabase** using **React Query**. Employees have **CRUD**, **sorting**, and **filtering** functionalities for bookings, guests, and cabins.",
      "Furthermore, it includes **settings** for the hotel and users along with strong **authentication**, ensuring that only authorized employees can access the system.",
    ],
    image: {
      mp4: "https://res.cloudinary.com/dkky0lrvb/video/upload/v1708074983/portfolio-projects-videos/czspje4scf0swt82vu1g.mp4",
    },
    stack: [
      logos.react,
      logos.reactQuery,
      logos.supabase,
      logos.styledComponents,
    ],
    links: {
      github: "https://github.com/WaqarAhmad321/the-wild-oasis",
      demo: "https://the-wild-oasis-project.vercel.app",
    },
  },
  worldWise: {
    title: "World Wise",
    description: [
      "World Wise allows users to take notes of their tours and travels. It's a multipage web application built using **React** and **React Router**, styled using **CSS modules**.",
      "The application features a world map allowing users to mark visited countries, with a primary focus on the **notes** section for users to add travel notes along with respective dates. These notes are stored in the browser's **local storage**. The map functionality is implemented using **Leaflet**.",
      "Users can access their notes, visited countries, and cities through the sidebar.",
      "The state of the application is managed using **React Context** and **useReducer**.",
    ],
    image: {
      mp4: "https://res.cloudinary.com/dkky0lrvb/video/upload/v1708074987/portfolio-projects-videos/gt92uinlf75sshd3hftl.mp4",
    },
    stack: [logos.react, logos.reactRouter, logos.javascript, logos.cssModules],
    links: {
      github: "https://github.com/WaqarAhmad321/world-wise-ReactJs",
      demo: "https://world-wise-react-js.vercel.app",
    },
  },
  carHub: {
    title: "Car Hub",
    description: [
      "CarHub is a car showroom web application built using **Next.js** and **Typescript**. The application is styled using **Tailwind CSS**. ",
      "The main purpose of the application is to **showcase** cars and their details.",
      "The users can search cars by **model** and **manufacturer**. The application also features a **filter** option, where users can filter cars by **fuel type**, and the year of manufacture.",
      "This was my first project using **Next.js** and **Typescript**. I learned a lot about **Next.js** and **Typescript** while working on this project.",
      "The application is fully **responsive** across all screen sizes.",
    ],
    image: {
      mp4: "https://res.cloudinary.com/dkky0lrvb/video/upload/v1708074978/portfolio-projects-videos/hqazas1dl7xgo8nfew1q.mp4",
    },
    stack: [logos.nextjs, logos.react, logos.typescript, logos.tailwind],
    links: {
      github: "https://github.com/WaqarAhmad321/nextcar",
      demo: "https://carhub-orpin.vercel.app",
    },
  },
  fastReactPizza: {
    title: "Fast React Pizza Co.",
    description: [
      "Fast React Pizza Co. is a pizza ordering web application where the users can order pizzas and checkout. The application is built using **React** and **Redux**. The application is styled using **Tailwind CSS**.",
      "It allows users to add pizzas to their cart, **search** their order and checkout. The users can also remove pizzas from their cart. The application also features a **cart** page where users can view their cart and also increase or decrease the **quantity** of pizzas.",
      "The state of the application is managed using **Redux Toolkit**. The application also features persist the state of the application in the **local storage** of the browser.",
    ],
    image: {
      mp4: "https://res.cloudinary.com/dkky0lrvb/video/upload/v1708074971/portfolio-projects-videos/xpcfrbfcra1zzrnzp2vn.mp4",
    },
    stack: [logos.react, logos.redux, logos.reactRouter, logos.tailwind],
    links: {
      github: "https://github.com/WaqarAhmad321/fast-react-pizza-ReactJs",
      demo: "https://fast-react-pizza-react-js.vercel.app",
    },
  },
  thisWebsite: {
    title: "This Website",
    description: [
      "My portfolio website built with **React** using **Next.js** framework.",
      "The source code is written in **100% TypeScript** and the project is easy to maintain with the type safety provided by Typescript. The source code is very moduler allowing easy debugging.",
      "This website is styled using **Tailwind CSS** and **Framer Motion** for animations. It is also fully **responsive** across all screen sizes.",
      "This description is typed as **markdown** in source code, the Project component takes in props for links, icons, title, images, etc; nothing is hard coded.",
    ],
    image: {
      main: {
        src: "https://res.cloudinary.com/dkky0lrvb/image/upload/f_auto,q_auto/v1/portfolio-projects-videos/d1l50jlx6u9satfcdcmy",
        width: 1432,
        height: 600,
      },
    },
    stack: [logos.nextjs, logos.typescript, logos.tailwind, logos.framerMotion],
    links: {
      github: "https://github.com/WaqarAhmad321/waqarahmad-portfolio",
      demo: "https://waqarahmad-portfolio.vercel.app",
    },
  },
  usePopCorn: {
    title: "usePopCorn",
    description: [
      "usePopCorn enable the users to **search** for movies and tv shows and view their **details**. ",
      "Users can search movies, add movies to a **watchlist**, rate them, and access details such as storyline, IMDb ratings, genre, and more. The watchlist is stored in the browser's **local storage**.",
      "The app utilizes the OMDB API to fetch movie data.",
    ],
    image: {
      mp4: "https://res.cloudinary.com/dkky0lrvb/video/upload/v1708074978/portfolio-projects-videos/gsu36ylbi7hw8gbvgukx.mp4",
    },
    stack: [logos.react, logos.javascript, logos.css],
    links: {
      github: "https://github.com/WaqarAhmad321/usePopcorn-ReactJs",
      demo: "https://usepopcorn-reactjs.vercel.app",
    },
  },
  travelList: {
    title: "Travel List",
    description: [
      "Travel List is a travel list web application where the users can **list** their items, and the number of things they want need for the trip.",
      "Users can **add**, **remove**, and **sort** items from the list. The list is stored in the browser's **local storage**.",
      "The application is built using **React** and styled using **pure CSS**.",
      "It was my first project using **React**. I learned a lot about **React** while working on this project.",
    ],
    image: {
      main: {
        src: "https://res.cloudinary.com/dkky0lrvb/image/upload/f_auto,q_auto/v1/portfolio-projects-videos/jcp5diqxxlh7xjhdzdoe",
        width: 1600,
        height: 900,
      },
    },
    stack: [logos.react, logos.git, logos.css],
    links: {
      github: "https://github.com/WaqarAhmad321/travel-list-ReactJs",
      demo: "https://travel-list-react-js.vercel.app",
    },
  },
};
export default allProjects;

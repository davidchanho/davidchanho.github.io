import d3 from "../assets/d3.png";
import pandas from "../assets/pandas.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import redux from "../assets/redux.jpg";
import typescript from "../assets/typescript.jpeg";

export const data = {
  about: {
    name: "David Ho",
    img: "https://ca.slack-edge.com/TL77KG802-ULG4SK5Q9-a5e3db5965c6-512",
    about: `I'm a Raleigh based Web Developer. I graduated from Coding
        Bootcamp of UNC Chapel Hill in 2020. I am currently looking for an
        entry level web developer role.`,
    address: "4241 Tristone Falls Avenue #1G",
    city: "Raleigh",
    state: "NC",
    zipcode: "27616",
    phone: "919-306-0509",
    email: "davidchanho.dev@gmail.com",
  },
  projects: [
    {
      title: "Slack",
      desc: "A team chatting app",
      frontend: "React",
      styling: "Scss Modules",
      ui: "n/a",
      backend: "Firebase",
      dataStorage: "Firestore",
      stateManager: "React Context",
      auth: "Firebase Auth",
      hosting: "Firebase Hosting",
      github: "https://github.com/davidchanho/react-native-slack",
      link: "https://react-firebase-chat-23479.firebaseapp.com/",
    },
    {
      title: "Spotify",
      desc: "A music app",
      frontend: "React Native",
      styling: "Styled-Components",
      ui: "React-Native-Elements",
      backend: "Firebase",
      dataStorage: "SQL",
      stateManager: "Redux Toolkit",
      auth: "",
      hosting: "AWS S3",
      github: "https://github.com/davidchanho/react-spotify",
      link: "",
    },
    {
      title: "Jira",
      desc: "A project management system",
      frontend: "React",
      styling: "",
      ui: "bootstrap",
      backend: "Django (Python)",
      dataStorage: "SQL",
      stateManager: "Redux Toolkit",
      auth: "",
      hosting: "AWS S3",
      github: "https://github.com/davidchanho/react-jira-clone",
      link: "",
    },
    {
      title: "Amazon",
      desc: "A ecommerce site",
      frontend: "Vue",
      styling: "",
      ui: "Vueify",
      backend: "Laravel (PHP)",
      dataStorage: "SQL",
      stateManager: "Redux Toolkit",
      auth: "",
      hosting: "AWS S3",
      github: "https://github.com/davidchanho/vue-amazon",
      link: "",
    },
    {
      title: "Medium",
      desc: "An article publishing site",
      frontend: "React",
      styling: "",
      ui: "bootstrap",
      backend: "Node.js",
      dataStorage: "MongoDB",
      stateManager: "Redux",
      auth: "",
      hosting: "Heroku",
      github: "https://github.com/davidchanho/mediumClone",
      link: "",
    },
    {
      title: "React Portfolio Template",
      desc: "A template",
      frontend: "React",
      styling: "Styled-Components",
      ui: "bootstrap",
      backend: "n/a",
      dataStorage: "n/a",
      stateManager: "n/a",
      auth: "n/a",
      hosting: "Github-pages",
      github: "https://github.com/davidchanho/react-portfolio-template",
      link: "",
    },
  ],
  favoriteTech: [
    {
      src: typescript,
      text:
        "I enjoy using typescript in my projects due to its ability to automatically handle imports and notifies me of potential errors.",
    },
    {
      src: react,
      text:
        "React is a great framework. It have great flexiblity and have a large community around it.",
    },
    {
      src: redux,
      text:
        "Redux a helpful library to manage state globally. I have a fondness for Redux-Toolkit which is a collection of packages that simplifies redux set up and reduces redunant code.",
    },
    {
      src: d3,
      text: "D3.js is my go to for data visualizations for websites. ",
    },
    {
      src: python,
      text: "Python is a simple programming language with",
    },
    {
      src: pandas,
      text: "Pandas ",
    },
  ],
  education: {
    school: [
      {
        title: "Johnson & Wales University &middot; 2012",
        subtitle: "Bachelors in Accounting",
      },
    ],
    certifications: [
      { title: "Coding Bootcamp of UNC Chapel Hill &middot; 2020" },
      { title: "Coursera IBM Data Science &middot; 2020" },
    ],
  },
};

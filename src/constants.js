// Skills Section Logo's
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cLogo from './assets/tech_logo/c.png';
import cssLogo from './assets/tech_logo/css.png';
import expressjsLogo from './assets/tech_logo/express.png';
import figmaLogo from './assets/tech_logo/figma.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import htmlLogo from './assets/tech_logo/html.png';
import javaLogo from './assets/tech_logo/java.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import mcLogo from './assets/tech_logo/mc.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import nosqlLogo from './assets/tech_logo/nosql.png';
import postmanLogo from './assets/tech_logo/postman.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import redisLogo from './assets/tech_logo/redis.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import viteLogo from './assets/tech_logo/vite.svg';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Education Section Logo's
import andhra_logo from './assets/education_logo/andhra_logo.jpg';
import khalsa_logo from './assets/education_logo/khalsa_Logo.jpg';
import svist_logo from './assets/education_logo/svist_logo.jpg';

//ABOUT SKILLS INFORMATION
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },

  {
    title: 'Backend',
    skills: [
   
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Mysql', logo: mysqlLogo},
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Nosql', logo: nosqlLogo},
      { name: 'Redis', logo: redisLogo},
    ],
  },

  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },

  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Vite', logo: viteLogo}
    ],
  },
];
  // ABOUT EDUCATION
  export const education = [
    {
      id: 1,
      img: svist_logo,
      school: "SVIST College, Kolkata",
      date: "july 2022 - Aug 2026",
      grade: "Final year",
      desc: "I pursuing my Bachelor's degree in Computer Science and Engineering (CSE) from Swami Vivekananda Institute of Science & Technology(SVIST), WestBengal, Kolkata. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at SVIST College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology- B.Tech (Computer Science and Engineering)",
    },

    {
      id: 2,
      img: khalsa_logo,
      school: "Khalsa English High School, Kolkata",
      date: "Apr 2020 - March 2022",
      grade: "65%",
      desc: "I completed my class 12 education from Khalsa English High School, WestBengal, Kolkata, under the WBCHSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Application.",
      degree: "WBCHSE(XII) - PCM with Computer Application",
    },

    {
      id: 3,
      img: andhra_logo,
      school: "Andhra Association High School, Kolkata",
      date: "Apr 2019 - March 2020",
      grade: "68%",
      desc: "I completed my class 10 education from Andhra Association High School, WestBengal, Kolkata, under the WBCSE board, where I studied Science with Computer.",
      degree: "WBCSE(X), Science with Computer Application",
    },
  ];

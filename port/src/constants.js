// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import ASPNET from './assets/tech_logo/ASP.NET.png'
import Sql from './assets/tech_logo/sql.png'
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import postgreLogo from './assets/tech_logo/postgre.png';
// Experience Section Logo's
import RRFin from './assets/company_logo/RRFin.jfif'
import techplement from './assets/company_logo/techplement.jfif'
import bharat from './assets/company_logo/bharatlogo.jfif'

// Education Section Logo's
import uptu from './assets/education_logo/uptu.png'
import tmbu from './assets/education_logo/tmbu.jfif'
import cu from './assets/education_logo/cu.png'
import sunbeam from './assets/education_logo/sunbeam.png'

// Project Section Logo's
import rrpolicy from './assets/work_logo/rrpolicy.jpg'
import ochi from './assets/work_logo/ochi.png'
import cloud from './assets/work_logo/cloud.png'
import todo from './assets/work_logo/todo.png'
import unorder from './assets/work_logo/unorder.png'
import weather from './assets/work_logo/weather.png'

export const SkillsInfo = [
  {
    title: 'FrontEnd',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'ASP.NET', logo: ASPNET },
      { name: 'Next JS', logo: nextjsLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'SQL', logo: Sql },
      { name: 'HTML', logo: htmlLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'My SQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Database/BackEnd',
    skills: [
      { name: 'Microsoft SQL Server', logo: Sql },
      { name: 'My SQL', logo: mysqlLogo },
       { name: 'Node JS', logo: nodejsLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: RRFin,
    role: "Web Developer",
    company: "RR Financial Consultants Ltd",
    date: "Aug 2024 - Present",
    desc: "As an IT Associate at RR Finance, my primary responsibilities revolve around comprehensive web development, with a specialized focus on ASP.NET Web Forms technology. I manage both front-end development and crucial database operations. My work involves leveraging SQL Server for various tasks, including data modeling, efficient querying, and performance optimization. Furthermore, I am responsible for designing and developing intuitive user interfaces, utilizing modern frameworks like Bootstrap and Tailwind CSS to ensure responsive and user-friendly experiences across all platforms.",
    skills: [
      "ASP.NET",
      "SQL Server",
      "Visual Studio Code 2010",
      "Web APIs",
      "C Sharp",
      "Bootstrap Css"
    ],
  },
  {
    id: 1,
    img: bharat,
    role: "Front End Developer Intern",
    company: "Bharat Intern",
    date: "May 2024 – June 2024",
    desc: "During my internship as a Front End Developer at Bharat Intern, I gained valuable hands-on experience in building responsive web applications. My key contributions included creating a responsive portfolio website, a Netflix UI clone, and a functional weather application. These projects were developed using core web technologies such as HTML, CSS, and JavaScript, enhancing my skills in front-end development and user interface creation.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node Js",
    ],
  },
  {
    id: 2,
    img: techplement,
    role: "Front End Developer Intern",
    company: "TECHPLEMENT ",
    date: "June 2024 – July 2024",
    desc: "As a Front End Developer Intern at TECHPLEMENT, I was responsible for the development of a Quiz Application using the MERN Stack. My work involved creating key components necessary for building quizzes, which included the functionality to add new questions and their corresponding options. This experience significantly enhanced my skills in full-stack development, with a particular focus on front-end implementation within a MERN environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node JS",
      "React JS",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: cu,
    school: "Chandigarh University",
    date: "Aug 2020 - May 2024",
    grade: "7 CGPA",
    desc: "Earned my Bachelor of Engineering with a strong focus on software development, full-stack web technologies, and programming fundamentals. Throughout the program, I worked extensively with technologies like React.js, SQL, C++, Python, and Tailwind CSS, applying them in academic projects and internships. This hands-on approach helped me develop both front-end and back-end skills. I also took part in extracurricular activities such as the All India University Cricket Tournament, which enhanced my teamwork and time management abilities alongside academics. My experience at Chandigarh University prepared me to approach real-world tech challenges with a practical mindset and a strong technical foundation.",
    degree: "Bachelor of Engineering(CSE)",
  },
  {
    id: 1,
    img: sunbeam,
    school: "Sunbeam Academy",
    date: "April 2018 - March 2019",
    grade: "69.2%",
    desc: "Completed my Class 12th with a focus on science and mathematics, achieving a solid academic foundation with 69.2%. During this time, I developed analytical thinking, problem-solving skills, and a disciplined approach to learning, which later supported my transition into engineering and programming. The structured academic environment at Sunbeam Academy played a key role in shaping my interest in technology and logical reasoning.",
    degree: "Higher Secondary(12th Grade)",
  },
  {
    id: 2,
    img: sunbeam,
    school: "Sunbeam Academy",
    date: "April 2016 - March 2017",
    grade: "7.4 CGPA",
    desc: "Completed Class 10th with a score of 70.3%, laying a strong academic foundation in core subjects like mathematics and science. During this time, I developed early interest in problem-solving, logical reasoning, and structured learning—skills that later guided my choice to pursue engineering. My experience at Sunbeam Academy also helped instill discipline, consistency, and a curiosity for how things work, which naturally evolved into a passion for technology and development.",
    degree: "Secondary School(12th Grade)",
  },

];

export const projects = [
  {
    id: 0,
    title: "RR Policy(Health Insurance)",
    description:
      "At RR Finance, I specialized in web development, leveraging ASP.NET Web Forms technology. My responsibilities encompassed both comprehensive front-end development and robust database management using SQL Server. This included critical tasks like data modeling, efficient querying, and performance optimization to ensure seamless data flow. Furthermore, I was responsible for designing and building highly responsive and user-friendly interfaces, meticulously crafted with Bootstrap CSS",
    image: rrpolicy,
    tags: ["Asp.net", "C#", "JavaScript", "Bootstrap CSS", "Sql 2005/2012"],
    // github: "#",
    webapp: "https://ins.rrpolicy.com/main-mediclaim",
  },
  {
    id: 1,
    title: "OCHI DESIGN REACT APP",
    description:
      "The OCHI DESIGN REACT APP project involved the creation of an engaging and visually dynamic website. This application was built primarily using React JS, ensuring a modern and component-based architecture. A key focus of this project was implementing sophisticated animations and interactive elements, achieved through the effective use of React Animations. Styling was meticulously handled with Tailwind CSS, allowing for a highly customizable and responsive design. The development process also leveraged Vite for a fast and optimized build experience, and incorporated various React Hooks to manage state and side effects, resulting in a smooth and interactive user experience.",
    image: ochi,
    tags: ["React Js", "Tailwind CSS", "Vite", "React Animations", "React Hooks"],
    github: "https://github.com/rajAditya-singh/OCHI_design",
    webapp: "https://ochidesign-pied.vercel.app/",
  },
  {
    id: 2,
    title: "Advance TODO App",
    description:
      "The Advance TODO App is a robust and highly functional task management application. This project was developed using React JS, providing a modern and efficient front-end framework. The styling was implemented with Tailwind CSS, ensuring a clean, responsive, and customizable user interface. A key feature of this application is its state management, which is handled effectively using React-Redux, allowing for predictable and centralized data flow. Furthermore, the application utilizes local storage for data persistence, ensuring that user tasks are saved even after closing the browser. Developed in VS Code, this project showcases practical application development with advanced state management and data persistence.",
    image: todo,
    tags: [" React Js", "Tailwind CSS", "React-Redux", "VS code", "Local Storage"],
    github: "https://github.com/rajAditya-singh/chai-aur-react/tree/main/10todocontext",
    webapp: "https://todoadvance.vercel.app/",
  },
  {
    id: 3,
    title: "Cloud Management React App",
    description:
      "The Cloud Management project is a highly responsive web application designed for managing cloud-related functionalities. Developed using React JS, it provides a modern and efficient single-page application experience. The entire interface is styled with Tailwind CSS, ensuring a sleek, customizable, and adaptive design that looks great on various devices and screen sizes. This project emphasizes clean code and a user-friendly interface, demonstrating proficiency in building scalable and responsive web solutions within a modern development environment like VS Code.",
    image: cloud,
    tags: ["React Js", "Tailwind CSS", "JavaScript", "VS Code", "Vite"],
    github: "https://github.com/rajAditya-singh/Cloud_management_ReactApp",
    webapp: "https://cloudmanagementreactapp.vercel.app/",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "The Weather App is a responsive web application designed to provide real-time weather information. This project was developed using fundamental web technologies: HTML for structuring the content, CSS for styling to ensure an appealing and user-friendly interface, and JavaScript for implementing the core functionality, including fetching weather data and dynamically updating the UI. This application was built as part of an internship task, showcasing proficiency in creating interactive and responsive web experiences using standard front-end tools and developed within VS Code.",
    image: weather,
    tags: ["HTML", "CSS", "JavaScript", "Weather API", "VS Code"],
    github: "https://github.com/rajAditya-singh/weather_app",
    webapp: "https://techplement-weather-app.vercel.app/",
  },
  {
    id: 5,
    title: "Food Ordering Website",
    description:
      "The Food Ordering Website is a dynamic web application designed to facilitate online food orders. This project was developed using foundational web technologies: HTML for structuring the various sections of the site, CSS for styling to create an appealing and intuitive user interface, and JavaScript for implementing interactive functionalities such as menu selection, order processing, and possibly form validation. This application showcases proficiency in building complete, user-friendly web experiences using standard front-end tools, all developed within VS Code.",
    image: unorder,
    tags: ["HTML", "CSS", "JavaScript", "VS Code"],
    github: "https://github.com/rajAditya-singh/urorder",
    webapp: "https://urorder.vercel.app/",
  },

];  
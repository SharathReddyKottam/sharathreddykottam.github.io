const portfolio = {
  // ========================
  //   HEADER & HERO SECTION
  // ========================
  name: "Sharath Chandra Reddy Kottam",
  title: "Software Developer | Cloud & Backend Engineer",
  description:
    "Backend-focused developer experienced with REST APIs, microservices, CI/CD pipelines, and container orchestration using tools like FastAPI, Spring Boot, Docker, and Kubernetes. Passionate about clean architecture, automation, and scalable backend systems.",
  resume: "/Sharath_Resume.pdf",
  social: {
    github: "https://github.com/SharathReddyKottam",
    linkedin: "https://linkedin.com/in/sharath-kottam",
    email: "sharathckottam9@gmail.com",
  },

  // ========================
  //      ABOUT SECTION
  // ========================
  about: {
    title: "About Me",
    description:
      "I'm a backend engineer who enjoys building secure and scalable systems. I’ve developed RESTful APIs, automated internal tooling, and deployed containerized microservices on cloud infrastructure. I thrive in collaborative environments and am always eager to explore new technologies. Currently pursuing a Master's in Information Systems at George Mason University.",
  },

  // ========================
  //     PROJECTS SECTION
  // ========================
  projects: [
    {
      title: "DevConnect – REST API Developer Platform",
      techStack: "FastAPI, PostgreSQL, JWT, Docker, GitHub Actions",
      description:
        "Backend system enabling user authentication, profile/project management, and developer networking via REST APIs. Used SQL Alchemy ORM and JWT-based access. Deployed with Docker and CI via GitHub Actions.",
      link: "https://github.com/SharathReddyKottam/DevConnect", // update with actual repo if exists
    },
    {
      title: "Student Survey Microservices",
      techStack: "Spring Boot, MySQL, Docker, Jenkins, Kubernetes",
      description:
        "Containerized survey platform deployed to AWS EC2 Kubernetes cluster using Rancher. Features REST APIs for survey creation and results, CI/CD with Jenkins and Maven, and cloud-based MySQL backend.",
      link: "#", // replace with actual repo or demo
    },
  ],

  // ========================
  //     SKILLS SECTION
  // ========================
  skills: [
    "Python",
    "Java",
    "SQL",
    "JavaScript",
    "FastAPI",
    "Spring Boot",
    "Flask",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Jenkins",
    "AWS EC2 & RDS",
    "PostgreSQL",
    "MySQL",
    "SQL Alchemy",
    "Swagger UI",
    "JWT",
    "Postman",
    "Git",
  ],

  // ========================
  //     CONTACT SECTION
  // ========================
  contact: {
    email: "sharathckottam9@gmail.com",
    github: "https://github.com/SharathReddyKottam",
    linkedin: "https://linkedin.com/in/sharath-kottam",
  },
};

export default portfolio;

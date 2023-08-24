import {
    content,
    web,
    azure,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    kyndryl,
    seerbytes,
    orel,
    nft,
    tago,
    tripguide,
    threejs,
    pipeline,
    analysis,
    kevin,
    arsalan,
    mehroz
  } from "../assets";
  
  export const navLinks = [
    {
      id: "About",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const overview = { content: 'Hi. I am a skilled Software Engineer with experience in Data Engineering & Web Development. I have expertise in React js & Node js for Web and Python & Data Stage for Data Engineering.  I have a deep understanding of computer fundamentals and profound technical & research skills that enable me to develop effective and efficient solutions software solutions.'}

  const services = [
  
    {
      title: "Data Engineer",
      icon: pipeline,
    },
    {
      title: "Data Analyst",
      icon: analysis,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Content Creator",
      icon: content,
    },
  ];
  
  const technologies = [
    {
      name:'Azure',
      icon:azure
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Engineer",
      company_name: "IBM Kyndryl",
      icon: kyndryl,
      iconBg: "#383E56",
      date: "Feb 2022 - Present",
      points: [
        "Designing & developing data warehouse solutions with data ingestion from multiple sources (structured/unstructured)",
        "Translate business prepositions into quantitative queries & collect/clean the necessary data.",
        "ETL development using the IBM Infosphere platform.",
        "Write SQL Queries & Python Scripts for ETL processes.",
        "Build Scalable databases capable of ETL processes using SQL/JSON Schema.",
        "Evaluate the workflow & improve the efficiency of data pipelines & scripts for big data processing.Designing & developing data warehouse solutions with data ingestion from multiple sources (structured/unstructured) Translate business prepositions into quantitative queries & collect/clean the necessary data. ETL development using the IBM Infosphere platform. Write SQL Queries & Python Scripts for ETL processes. Build Scalable databases capable of ETL processes using SQL/JSON Schema. Evaluate the workflow & improve the efficiency of data pipelines & scripts for big data processing."
      ],
    },
    {
      title: "Machine Learning Engineer",
      company_name: "Orel Vision",
      icon: orel,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - Dec 2022",
      points: [
        "Responsible for developing Artificial Intelligence solutions to equip Agricultural drones.",
        "Worked on Computer Vision tasks, from dataset gathering or generation to ML model training.",
        "Trained models to detect, estimate and segment for agricultural surveillance."
      ],
    },
    {
      title: "Business Developer",
      company_name: "Seerbytes",
      icon: seerbytes,
      iconBg: "#383E56",
      date: "Mar 2019 - Dec 2019",
      points: [
        "Did market research and competitor analysis for company clients.",
        "Based on data, developed business plans and policies to shape software products for better customer service and business performance.",
        "Developed various desktop and web applications using Asp .NET for enterprise services in parallel."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I can highly recommend this freelancer. He is very professional and committed to doing a great job. We have had a very good process with online status meetings. I will use him again!",
      name: "Kevin Kvist",
      designation: "Client from",
      company: "Upwork",
      image: kevin,
    },
    {
      testimonial:
        "I have worked with Talha for almost a year and found him very enthusiast, hardworking and dedicated resource. He has shown all those capabilities which will make him a successful resource.",
      name: "Arsalan Mughal",
      designation: "Data Lead at",
      company: "Kyndryl",
      image: arsalan,
    },
    {
      testimonial:
        "He have consistently demonstrated a solid grasp of data engineering concepts, a keen ability to collaborate within teams, and a proactive approach to problem-solving.",
      name: "Mehroz Khan",
      designation: "Data Engineer at",
      company: "Kyndryl",
      image: mehroz,
    },
  ];
  
  const projects = [
    {
      name: "NFT Fan Club",
      description:
        "Web based Football Fan Club where fans gather and admire their favorite players & trade NFTs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nft,
      source_code_link: "",
    },
    {
      name: "E-Wallet",
      description:
        "A Landing Page for an upcoming E-Wallet application that provides users with online banking servicies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        
      ],
      image: tago,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,overview };
  
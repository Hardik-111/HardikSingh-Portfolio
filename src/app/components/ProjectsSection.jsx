"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "My Portfolio Website",
    description: " A dynamic and interactive portfolio showcasing my skills and projects built using Next.js and React, featuring modern design elements and seamless navigation.",
    image: "./images/projects/portfolio1.png",
    tag: ["All", "Web"],
    gitUrl: "./",
    previewUrl: "./",
  },
  {
    id: 2,
    title: "NewsX Website",
    description:
      "Explore a diverse range of news categories including business, sports, entertainment, health, and science, with infinite scroll functionality and customizable theme options for an enhanced reading experience.",
    image: "./images/projects/news2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hardik-111/NewsX",
    previewUrl: "https://github.com/Hardik-111/NewsX",
  },
  {
    id: 3,
    title: "MonageX",
    description: "A comprehensive money management app with features including expense tracking, income recording, intuitive graphs, group collaboration, and notifications. Seamlessly developed with robust authentication, user-friendly expense tracking, insightful graph displays, and group collaboration capabilities.",
    image: "./images/projects/expense4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hardik-111/Monagex",
    previewUrl: "https://github.com/Hardik-111/Monagex",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 4,
    title: "VIBE-Lane",
    description: "Offering a diverse product range and user-friendly shopping cart system. Key features include secure authentication, intuitive shopping cart functionality, advanced product filtering, and seamless payment processing. Built with MongoDB, ExpressJS, ReactJS, NodeJS, Stripe, and Material-UI.",
    image: "./images/projects/ecom3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hardik-111/VIBE-Lane?tab=readme-ov-file",
    previewUrl: "https://github.com/Hardik-111/VIBE-Lane?tab=readme-ov-file",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        /> */}
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

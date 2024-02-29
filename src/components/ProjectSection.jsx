"use client";
import React, { useState } from "react";
import ProjectCard3D from "./ProjectCard3D";
import ProjectTag from "./ProjectTag";
// import projectScreenshots from "../../public/images/Project Screenshots";

const projectData = [
  {
    id: 1,
    title: "deskDecor",
    description: "E-commerce, stripe integration",
    imgUrl: [
      "/images/Project_Screenshots/deskDecor-01.png",
      "/images/Project_Screenshots/deskDecor-02.png",
      "/images/Project_Screenshots/deskDecor-03.png",
    ],
    gitURL: "https://github.com/DiMNDev/deskDecor-fullStack",
    previewURL: "#",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "poemsPoets",
    description: "Social, Puzzle",
    imgUrl: [
      "/images/Project_Screenshots/poemsPoets-01.png",
      "/images/Project_Screenshots/poemsPoets-02.png",
      "/images/Project_Screenshots/poemsPoets-03.png",
    ],
    gitURL: "https://github.com/DiMNDev/poemsPoets",
    previewURL: "https://www.poemspoets.com",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "poemsPoets",
    description: "Social, Puzzle",
    imgUrl: [
      "/images/Project_Screenshots/poemsPoets-m01.png",
      "/images/Project_Screenshots/poemsPoets-m02.png",
      "/images/Project_Screenshots/poemsPoets-m03.png",
    ],
    gitURL: "https://github.com/DiMNDev/poemsPoets",
    previewURL: "#",
    tag: ["All", "Mobile"],
  },
  {
    id: 4,
    title: "Stickman",
    description: "Mobile Platformer",
    imgUrl: [
      "/images/resized_project_screenshots/stickman-01.webp",
      "/images/resized_project_screenshots/stickman-02.webp",
      "/images/resized_project_screenshots/stickman-03.webp",
    ],
    gitURL: "https://github.com/DiMNDev/theAdventuresOfStickman",
    previewURL: "#",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "Our Favorite Books",
    description: "Book Social Network",
    imgUrl: [
      "/images/Project_Screenshots/favoriteBook-01.png",
      "/images/Project_Screenshots/favoriteBook-02.png",
      "/images/Project_Screenshots/favoriteBook-03.png",
    ],
    gitURL: "https://github.com/DiMNDev/favoriteBookUI",
    previewURL: "https://dimndev.github.io/favoriteBookUI/",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div
        id="filterButtons"
        className="text-white flex flex-row justify-center items-center gap-2 py-6"
      >
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />

        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />

        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
      </div>
      <div id="mapProjects">
        {filteredProjects.map((project) => (
          <ProjectCard3D
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitURL={project.gitURL}
            previewURL={project.previewURL}
            tag={project.tag[1]}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;

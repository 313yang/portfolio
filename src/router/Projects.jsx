import ProjectContent from "../components/ProjectContent";
import projectData from "./projectData.json";
function Projects() {
  return (
    <section className="project-section">
      <div>
        <h1 className="menu-title">Projects</h1>
      </div>
      <div className="project-section__contents">
        {projectData.projects.map((work) => (
          <ProjectContent
            key={work.title}
            title={work.title}
            description={work.description}
            pageLink={work.pageLink}
            githubLink={work.githubLink}
            skill={work.skill}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

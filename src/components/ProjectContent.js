import PropTypes from "prop-types";
import "../assets/Project.css";
function ProjectContent({ title, description, pageLink, githubLink, skill }) {
  return (
    <>
      <div className="project-section__content">
        <img src={`./img/${title}.PNG`} alt={title} title={title} />
        <div className="project-section__content__description">
          <h2>{title}</h2>
          <ul>
            {skill.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
          <p>{description}</p>
          <div className="project-section__content__btn">
            <a
              href={pageLink}
              target="_blank"
              rel="noreferrer"
              className="project-section__link"
            >
              <button className="project-section__linkBtn">
                <i className="fas fa-globe"></i>
              </button>
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="project-section__link"
            >
              <button className="project-section__linkBtn">
                <i className="fab fa-github"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectContent;

ProjectContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  skill: PropTypes.array.isRequired,
};

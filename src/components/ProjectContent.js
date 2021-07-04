import PropTypes from "prop-types";
import "../assets/Project.css";
function ProjectContent({ title, description, pageLink, githubLink }) {
  return (
    <>
      <div className="project-section__content">
        <div className="project-section__content__img">
          <img src={`./img/${title}.PNG`} alt={title} title={title} />
        </div>
        <div className="project-section__content__description">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="project-section__content__btn">
            <a href={pageLink} className="project-section__link">
              <button className="project-section__linkBtn">
                <i class="fas fa-globe"></i>
              </button>
            </a>
            <a href={githubLink} className="project-section__link">
              <button className="project-section__linkBtn">
                <i class="fab fa-github"></i>
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
};

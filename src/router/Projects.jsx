import ProjectContent from "../components/ProjectContent";

function Projects() {
  const projects = [
    {
      title: "Vimolog",
      description:
        "유튜브 클론 코딩으로 Node.js로 백엔드 구축.\n MongoDB를 이용해 유저 및 동영상 등의 데이터를 관리.\n Pug로 템플릿을 렌더링, Webpack으로 SCSS,JS를 설정해 사용.",
      pageLink: "https://vimolog.herokuapp.com/",
      githubLink: "https://github.com/313yang/VimoLog",
      skill: [
        "NODEJS",
        "EXPRESS",
        "JAVASCRIPT",
        "BABEL",
        "WEBPACK",
        "PUG",
        "SCSS",
      ],
    },
    {
      title: "genie's labrary",
      description:
        "'밀리의 서재'를 모티브로 한 e-book 웹사이트. React를 기반으로 제작.\n Kakao 도서검색 REST API를 사용해 도서목록 정렬, 검색 가능.",
      pageLink: "https://313yang.github.io/genies-library/",
      githubLink: "https://github.com/313yang/genies-library",
      skill: ["REACT"],
    },
  ];
  return (
    <section className="project-section">
      <div>
        <h1 className="menu-title">Projects</h1>
      </div>
      <div className="project-section__contents">
        {projects.map((work) => (
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

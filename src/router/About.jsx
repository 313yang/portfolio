import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/About.css";

function About() {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    const getLanguages = async () => {
      const owner = "313yang";
      const repo = "skill";
      const { data } = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/languages`,
        {
          headers: {
            accept: "application/vnd.github.v3+json",
          },
        }
      );
      setLanguages(data);
    };
    getLanguages();
  }, [languages]);
  const string =
    "안녕하세요. 프론트엔드 개발자를 꿈꾸는 양벼리입니다.\n Javascript를 위주로 다양한 토이 프로젝트를 만드는 것을 좋아합니다.\n 현실에 안주하지 않고 끊임없이 배우는 개발자로 남는 것이 목표입니다.";
  return (
    <section className="about-section">
      <div className="about-me">
        <h1>About Me</h1>
        <p>{string}</p>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <span></span>
      </div>
    </section>
  );
}
export default About;

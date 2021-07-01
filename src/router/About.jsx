//import axios from "axios";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "../assets/About.css";

function About() {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setData({
      labels: ["JavaScript", "HTML", "CSS", "Pug", "SCSS"],
      datasets: [
        {
          label: "Skills",
          backgroundColor: [
            "#f1e05a",
            "#e34c26",
            "#2992C9",
            "#E8C69E",
            "#C76395",
          ],
          data: [40.7, 35.2, 16.5, 4.3, 3.3],
          borderWidth: 0,
        },
      ],
    });
    setOptions({
      responsive: true,
      color: "#919191",
      plugins: {
        legend: {
          position: "right",
        },
      },
    });
  }, [setData, setOptions]);

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
        <p>총 12개의 Github repositories 중 언어 사용비율</p>
        <Pie data={data} options={options} />
      </div>
    </section>
  );
}
export default About;

import "../assets/Home.css";
import "../assets/star.css";

import Header from "../components/Header";
import { useEffect, useState } from "react";

const words = [
  "",
  "끝없이 성장하는",
  "열정이 넘치는",
  "디자인 좀 하는",
  "책임감 있는",
  "프론트엔드",
  "",
];

function Home() {
  const [text, setText] = useState(0);
  const [index, setindex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  // typing
  useEffect(() => {
    if (text === words[index].length + 1 && !reverse) {
      if (index === words.length - 1) {
        setReverse(true);
        setindex(0);
        return;
      }
      setReverse(true);
      return;
    }
    if (text === 0 && reverse) {
      setReverse(false);
      setindex((index) => index + 1);
      return;
    }
    const timeout1 = setTimeout(
      () => {
        setText((text) => text + (reverse ? -1 : +1));
      },
      reverse ? 70 : text === words[index].length ? 1200 : 120
    );

    return () => clearTimeout(timeout1);
  }, [text, index, reverse]);
  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // SCROLL
  const handleScrollClick = () => {
    const scrollY = window.screenY;
    if (scrollY < 100) {
      window.scrollTo({ top: 1000, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <div className="bg">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <section className="home-section">
        <div className="home-section__info">
          <div className="home-section__info-title">
            <h1>Hello, I'm Yang Byeo ri</h1>
            <div className="info-sub">
              <h4>저는</h4>
              <h4 id="typing">{`${words[index].slice(0, text)}${
                blink ? "|" : " "
              }`}</h4>
              <h4>개발자 입니다.</h4>
            </div>
            <div className="info-links">
              <a
                href="https://github.com/313yang"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
              <p> | </p>
              <a
                href="https://velog.io/@313yang"
                target="_blank"
                rel="noreferrer"
              >
                VELOG
              </a>
            </div>
          </div>
          <div>
            <img src="./img/IMG_6588.PNG" alt="memoji" />
          </div>
        </div>
        <div>
          <i
            id="downBtn"
            className="fas fa-chevron-down"
            onClick={handleScrollClick}
          ></i>
        </div>
      </section>
    </>
  );
}
export default Home;

import { useState } from "react";

function Header() {
  const [isDark, setDark] = useState(false);
  const handleDark = () => {
    const divs = document.querySelectorAll("div");
    divs.forEach((div) => div.classList.toggle("dark"));
    setDark(!isDark);
  };
  return (
    <>
      {isDark ? (
        <video
          autoPlay
          muted
          loop
          className="video"
          src="./img/Waves.mp4"
          type="video/mp4"
        >
          {" "}
        </video>
      ) : (
        <video
          autoPlay
          muted
          loop
          className="video"
          src="./img/Waves - 447.mp4"
          type="video/mp4"
        >
          {" "}
        </video>
      )}
      <header>
        <div className="logo">
          <p>Y</p>
          <p>★</p>
        </div>
        {isDark ? (
          <div className="toggle" style={{ border: "1px solid #282828" }}>
            <button
              id="toggleBtn"
              onClick={handleDark}
              style={{
                backgroundColor: "#282828",
                transform: "translateX(24px)",
                transition: "all 0.2s ease-in-out",
              }}
            ></button>
          </div>
        ) : (
          <div className="toggle">
            <button
              id="toggleBtn"
              onClick={handleDark}
              style={{
                transform: "translateX(0px)",
                transition: "all 0.2s ease-in-out",
              }}
            ></button>
          </div>
        )}
      </header>
    </>
  );
}
export default Header;

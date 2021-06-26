import "./Home.css";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const words = ["","디자인 좀 하는", "끝없이 성장하는", "열정이 넘치는","프론트엔드"]

function Home() {
  const [text, setText] =useState(0);
  const [index, setindex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] =useState(false)

  // typing
  useEffect(()=>{
    
    if(text === words[index].length+1  &&  !reverse){
      setReverse(true);
      if(index === words.length -1 ){
        setReverse(true);
        setindex(0);
        return;
      }
      return;
    }
    if(text === 0 && reverse){
      setReverse(false);
      setindex(index => index + 1);
      return;
    }
    const timeout1 = setTimeout(()=>{
      setText((text)=>text + (reverse? -1 : +1));
      console.log(index, text)
    },Math.max(reverse ? 60 : text === words[index].length ? 1000 : 150));

    return ()=>clearTimeout(timeout1);

  }, [text, index,reverse])
   // blinker
   useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);
  return (
    <>
      <Header />
      <main className="home-main">
        <h1>Hello, I'm Yang Byeori!</h1>
        <div className="home-info">
          <h4>저는</h4>
          <h4 id="typing">{`${words[index].substring(0, text)}${blink ? "|" : " "}`}</h4>
          <h4>개발자 입니다.</h4>
        </div>
      </main>
    </>
  );
}
export default Home;

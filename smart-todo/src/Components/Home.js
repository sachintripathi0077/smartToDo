import React from "react";
import Header from "./Layout/Header";
import HomeCard from "./Layout/HomeCard";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

function Home() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../img/animation.json"),
    });
  });
  return (
    <div>
      <table>
        <thead>
            <tr>
          <td>
            <div className="container" ref={container}></div>
          </td>
          <td>
            <HomeCard />
          </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Home;

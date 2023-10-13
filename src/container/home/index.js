import React from "react";
import "./style.scss";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };
  return (
    <section className="home" id="home">
      <div className="home-text-wrapper">
        <h1>
          hello I'm Dennis
          <br />
          Front end Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translatex(0px)" }}
      >
        <div className="home-contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;

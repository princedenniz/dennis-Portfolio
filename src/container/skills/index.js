import React from "react";
import PageHeaderContent from "../../components/pageHeaderContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import skillsData from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./style.scss";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills">
        <PageHeaderContent
          headerText="Skills"
          icon={<BsInfoCircleFill />}
          size={40}
        />

        <div className="skills-content-wrapper">
          {skillsData.map((item, i) => (
            <div key={i} className="skills-content-wrapper-inner-content">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{ transform: "translateX(-200px)" }}
                end={{ transform: "translateX(0px)" }}
              >
                <h3 className="skills-content-wrapper-inner-content-category-text">
                  {item.label}
                </h3>
                <div className="skills-content-wrapper-inner-content-progressbar-container">
                  {item.data.map((skillItem, j) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      delay={0.3}
                      keyframes={["opacity : 1", "opacity : 0"]}
                      iterationCount="1"
                    >
                      <div className="progressbar-wrapper" key={j}>
                        <p>{skillItem.skillName}</p>
                        <Line
                          percent={skillItem.percentage}
                          strokeWidth="2"
                          strokeColor="var(--yellow-theme-main-color)"
                          trailWidth="2"
                          strokeLineCap="square"
                        />
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;

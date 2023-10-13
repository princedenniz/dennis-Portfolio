import React from "react";
import PageHeaderContent from "../../components/pageHeaderContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Dennis Prince",
  },
  {
    label: "Age",
    value: "29",
  },
  {
    label: "Address",
    value: "Nigeria",
  },
  {
    label: "Email",
    value: "dennisprince815@gmail.com",
  },
  {
    label: "Contact No",
    value: "+2348037147231",
  },
];

const jobSummary =
  "My name is Dennis I am passionate about coding, i haven't really gotten the kind of exposure i would really love to emprove myself. i am ready to learn and also ready to serve under any company or group willing to give me an opportunity. i am a fast learner, have been learning and building simple projects and i am ready for a trainee job or intern job, i dont mind working for free.. as far as i will be exposed to real life projects .";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill />}
        size={40}
      />

      <div className="about-content">
        <div className="about-content-personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => {
                return (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </Animate>
        </div>
        <div className="about-content-serviceWrapper">
          <div className="about-content-serviceWrapper-innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

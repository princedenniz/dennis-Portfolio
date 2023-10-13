import React from "react";
import PageHeaderContent from "../../components/pageHeaderContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import data from "./utils";
import "./style.scss";
import { MdWork } from "react-icons/md";

const Resume = () => {
  return (
    <div>
      <section id="resume" className="resume">
        <PageHeaderContent
          headerText="Resume"
          icon={<BsInfoCircleFill />}
          size={40}
        />

        <div className="timeline">
          <div className="timeline-experience">
            <h3 className="timeline-experience-header-text">Experience</h3>
            <VerticalTimeline
              layout={"1-column"}
              lineColor="var(--yellow-theme-main-color)"
            >
              {data.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline-experience-vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "var(--yellow-theme-sub-text-color)",
                    border: "1.5px solid var(--yellow-theme-main-color)",
                  }}
                  date="2023 - present"
                  icon={MdWork}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--yellow-theme-main-color)",
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                      {item.subTitle}
                    </h4>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>

          <div className="timeline-education">
            <h3 className="timeline-education-header-text">Education</h3>
            <VerticalTimeline
              layout={"1-column"}
              lineColor="var(--yellow-theme-main-color)"
            >
              {data.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline-education-vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "var(--yellow-theme-sub-text-color)",
                    border: "1.5px solid var(--yellow-theme-main-color)",
                  }}
                  date="2023 - present"
                  icon={MdWork}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--yellow-theme-main-color)",
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                      {item.subTitle}
                    </h4>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;

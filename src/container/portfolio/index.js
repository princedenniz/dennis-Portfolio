import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import img5 from "../../../src/image/izzy.png";
import img6 from "../../../src/image/millonaire.jpg";
import img7 from "../../../src/image/quiz app.png";
import img8 from "../../../src/image/bmi calculator.png";
import img9 from "../../../src/image/portfolio img.png";
import "./style.scss";

const portfolioData = [
  {
    id: 2,
    name: "Millionaire Quiz App",
    image: img6,
  },
  {
    id: 3,
    name: "Question and Answer App",
    image: img7,
  },
  {
    id: 2,
    name: "Bmi Calculator",
    image: img8,
  },
  {
    id: 3,
    name: "My Portfolio",
    image: img9,
  },
  {
    id: 2,
    name: "Shopping cart design",
    image: img5,
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];
const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  console.log(filteredValue);
  return (
    <div>
      <section id="portfolio" className="portfolio">
        <PageHeaderContent
          headerText="Portfolio"
          icon={<BsInfoCircleFill />}
          size={40}
        />
        <div className="portfolio-content">
          <ul className="portfolio-content-filter">
            {filterData.map((item) => (
              <li
                className={item.filterId === filteredValue ? "active" : ""}
                onClick={() => handleFilter(item.filterId)}
                key={item.filterId}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="portfolio-content-cards">
            {filteredItems.map((item, index) => (
              <div
                className="portfolio-content-cards-item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio-content-cards-item-img-wrapper">
                  <a href="#">
                    <img alt="dumy" src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <button>
                        <a href="">Visit</a>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

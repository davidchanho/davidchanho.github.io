import Section from "components/layout/Section";
import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import d3 from "../assets/d3.png";
import pandas from "../assets/pandas.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import redux from "../assets/redux.jpg";
import typescript from "../assets/typescript.jpeg";

const favoriteTech = [
  {
    src: typescript,
    text:
      "I enjoy using typescript in my projects due to its ability to automatically handle imports and notifies me of potential errors.",
  },
  {
    src: react,
    text:
      "React is a great framework. It have great flexiblity and have a large community around it.",
  },
  {
    src: redux,
    text:
      "Redux a helpful library to manage state globally. I have a fondness for Redux-Toolkit which is a collection of packages that simplifies redux set up and reduces redunant code.",
  },
  {
    src: d3,
    text: "D3.js is my go to for data visualizations for websites. ",
  },
  {
    src: python,
    text: "Python is a simple programming language with",
  },
  {
    src: pandas,
    text: "Pandas ",
  },
];

function FavoriteTechnology() {
  return (
    <Section header='Favorite Technology'>
      <ListGroup>
        {favoriteTech.map((el, index) => (
          <ListGroupItem key={`favorite-tech-${index}`}>
            <img alt='' src={el.src} /> {el.text}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Section>
  );
}

export default FavoriteTechnology;

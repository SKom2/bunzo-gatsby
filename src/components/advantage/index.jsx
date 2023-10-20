import React from "react";
import PropTypes from "prop-types";
import SingleOfficeInfo from "../office-info";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AdvantageContainer } from "./style";

const Advantage = ({
                     title,
                     text,
                     image
                   }) => {
  const images = getImage(image)
  return (
    <AdvantageContainer>
      <GatsbyImage image={images} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </AdvantageContainer>
  )
}

Advantage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object
};

export default Advantage;

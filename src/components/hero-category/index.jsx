import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { slugify } from "@utils/functions";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SingleHeroCategoryItem, HeroCategoryInnerBox, Title } from "./style";

const HeroCategory = ({ image, name }) => {
    return (
        <SingleHeroCategoryItem>
            <span>
                <img src={`http://45.120.178.247:8081/${image}`} alt=""/>
            </span>
        </SingleHeroCategoryItem>
    );
};
HeroCategory.propTypes = {
    image: PropTypes.object,
    name: PropTypes.string,
};
export default HeroCategory;

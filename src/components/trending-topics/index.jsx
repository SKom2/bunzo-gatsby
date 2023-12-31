import React from "react";
import { Link } from "gatsby";
import { slugify } from "@utils/functions";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SingleTrendingTopicItem, Title } from "./style";

const TrendingTopicItems = ({ name, color, image }) => {
    const images = getImage(image);
    return (
        <SingleTrendingTopicItem>
            <p>
                <GatsbyImage image={images} alt="" />
                <Title>{name}</Title>
            </p>
        </SingleTrendingTopicItem>
    );
};

export default TrendingTopicItems;

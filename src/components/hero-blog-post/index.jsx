import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { slugify } from "@utils/functions";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
    SingleHeroBlogPost,
    HeroBlogPostTop,
    HeroBlogPostCategory,
    HeroBlogPostAuthor,
    HeroBlogPostTitle,
    PostShortDetails,
    HeroBlogPostMeta,
    PostMetaLeftSide,
    PostDate,
    PostReadTime,
    PostMetaRightSide,
} from "./style";
import { getConvertedDate } from "../../utils/functions";

const HeroBlogPost = ({
    title,
    body,
    date,
    slug,
    tag,
    dateSlug,
    categories,
    authorSlug,
    name,
    id,
    description
}) => {

    const maxCharacters = 100; // Максимальное количество символов
    const truncatedDescription = description.length > maxCharacters ? description.slice(0, maxCharacters) + '...' : description;

    return (
        <Fragment>
            <SingleHeroBlogPost>
                <HeroBlogPostTop>
                    <HeroBlogPostCategory>
                        <p className={`cat-btn ${tag}`}>
                            {tag}
                        </p>
                    </HeroBlogPostCategory>
                    <HeroBlogPostAuthor>
                        By <p>{name}</p>
                    </HeroBlogPostAuthor>
                </HeroBlogPostTop>
                <HeroBlogPostTitle>
                    <Link to={`/post/${id}`}>{title}</Link>
                </HeroBlogPostTitle>
                <PostShortDetails>{truncatedDescription}</PostShortDetails>
                <HeroBlogPostMeta>
                    <PostMetaLeftSide>
                        <PostDate>
                            <i className="icofont-ui-calendar"></i>
                            <p>{getConvertedDate(date)}</p>
                        </PostDate>
                    </PostMetaLeftSide>
                </HeroBlogPostMeta>
            </SingleHeroBlogPost>
        </Fragment>
    );
};
HeroBlogPost.propTypes = {
    title: PropTypes.string,
    thume_image: PropTypes.object,
    video_link: PropTypes.object,
    date: PropTypes.string,
    slug: PropTypes.string,
    dateSlug: PropTypes.string,
    categories: PropTypes.array,
    body: PropTypes.string,
    authorSlug: PropTypes.string,
};
export default HeroBlogPost;

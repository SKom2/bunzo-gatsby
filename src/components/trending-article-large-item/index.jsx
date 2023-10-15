import React from "react";
import { Link } from "gatsby";
import { slugify } from "@utils/functions";
import {
    StaticImage,
    GatsbyImage,
    getImage,
    withArtDirection,
} from "gatsby-plugin-image";
import {
    TrendingSingleItem,
    TrendingBlogPostTop,
    TrendingBlogPostCategory,
    TrendingBlogPostAuthor,
    TrendingPostContent,
    HrendingBlogPostTitle,
    TrendingBlogPostMeta,
    PostMetaLeftSide,
    PostDate,
    ReadTime,
    PostMetaRightSide,
    TrendingLargePostThum,
} from "./style";
import { getConvertedDate } from "../../utils/functions";

const TrendingSingleLargeItems = ({
    title,
    image,
    tag,
    name,
    date,
    dateSlug,
    authorId,
    authorSlug,
    slug,
}) => {

    return (
        <TrendingSingleItem>
            <TrendingLargePostThum>
                <Link to={`/${slug}`}>
                    <img src={`http://45.120.178.247:8081/${image}`} alt=""/>
                </Link>
            </TrendingLargePostThum>
            <TrendingPostContent>
                <TrendingBlogPostTop>
                    <TrendingBlogPostCategory>
                        <p className={`cat-btn ${tag}`}>
                            {tag}
                        </p>
                    </TrendingBlogPostCategory>
                    <TrendingBlogPostAuthor>
                        By <p>{name}</p>
                    </TrendingBlogPostAuthor>
                </TrendingBlogPostTop>
                <HrendingBlogPostTitle>
                    <Link to={`/${slug}`}>{title}</Link>
                </HrendingBlogPostTitle>
                <TrendingBlogPostMeta>
                    <PostMetaLeftSide>
                        <PostDate>
                            <i className="icofont-ui-calendar"></i>
                            <p>{getConvertedDate(date)}</p>
                        </PostDate>
                    </PostMetaLeftSide>
                    <PostMetaRightSide>
                        <Link to="/">
                            <StaticImage
                                src="../../data/images/icons/small-bookmark.png"
                                alt=""
                            />
                        </Link>
                        <Link to="/">
                            <StaticImage
                                src="../../data/images/icons/heart.png"
                                alt=""
                            />
                        </Link>
                    </PostMetaRightSide>
                </TrendingBlogPostMeta>
            </TrendingPostContent>
        </TrendingSingleItem>
    );
};

export default TrendingSingleLargeItems;

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
    TrendingPostThum,
    HrendingBlogPostTitle,
    TrendingBlogPostMeta,
    PostMetaLeftSide,
    PostDate,
    ReadTime,
    PostMetaRightSide,
} from "./style";

const TrendingSingleItems = ({
    title,
    thume_image,
    small_image,
    dateSlug,
    authorId,
    authorSlug,
    categories,
    date,
    slug,
}) => {
    const images = withArtDirection(getImage(thume_image), [
        {
            media: "(max-width: 1024px)",
            image: getImage(thume_image),
        },
        {
            media: "(max-width: 575px)",
            image: getImage(small_image),
        },
    ]);
    return (
        <TrendingSingleItem>
            <TrendingPostThum>
                <Link to={`/${slug}`}>
                    <GatsbyImage image={images} alt="" />
                </Link>
            </TrendingPostThum>
            <TrendingPostContent>
                <TrendingBlogPostTop>
                    <TrendingBlogPostCategory>
                        {categories &&
                            categories.map((cat, i) => (
                                <p key={i} className={`cat-btn ${cat.color}`}>
                                    {cat.name}
                                </p>
                            ))}
                    </TrendingBlogPostCategory>
                    <TrendingBlogPostAuthor>
                        By <p>{authorId}</p>
                    </TrendingBlogPostAuthor>
                </TrendingBlogPostTop>
                <HrendingBlogPostTitle>
                    <Link to={`/${slug}`}>{title}</Link>
                </HrendingBlogPostTitle>
                <TrendingBlogPostMeta>
                    <PostMetaLeftSide>
                        <PostDate>
                            <i className="icofont-ui-calendar"></i>
                            <Link to={`/date/${dateSlug}`}>{date}</Link>
                        </PostDate>
                        <ReadTime>10 min read</ReadTime>
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

export default TrendingSingleItems;

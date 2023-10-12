import React from "react";
import { slugify } from "@utils/functions";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
    SingleFollowingPost,
    FollowingPostThum,
    FollowingPostContent,
    FollowingBlogPostTop,
    FollowingBlogPostCategory,
    FollowingBlogPostAuthor,
    FollowingBlogPostTitle,
    FollowingBlogPostMeta,
    PostMetaLeftSide,
    PostMetaRightSide,
    PostDate,
    PostReadTime,
} from "./style";

const SingleFollowingPosts = ({
    title,
    thume_image,
    date,
    slug,
    dateSlug,
    categories,
    authorSlug,
    authorId,
}) => {
    const image = getImage(thume_image);
    return (
        <SingleFollowingPost>
            <FollowingPostThum>
                <Link to={`/${slug}`}>
                    <GatsbyImage image={image} alt="" />
                </Link>
            </FollowingPostThum>
            <FollowingPostContent>
                <FollowingBlogPostTop>
                    <FollowingBlogPostCategory>
                        {categories &&
                            categories.map((cat, i) => (
                                <p key={i} className={`cat-btn ${cat.color}`}>
                                    {cat.name}
                                </p>
                            ))}
                    </FollowingBlogPostCategory>
                    <FollowingBlogPostAuthor>
                        By <p>{authorId}</p>
                    </FollowingBlogPostAuthor>
                </FollowingBlogPostTop>
                <FollowingBlogPostTitle>
                    <Link to={`/${slug}`}>{title}</Link>
                </FollowingBlogPostTitle>
                <FollowingBlogPostMeta>
                    <PostMetaLeftSide>
                        <PostDate>
                            <i className="icofont-ui-calendar"></i>
                            <Link to={`/date/${dateSlug}`}>{date}</Link>
                        </PostDate>
                        <PostReadTime>10 min read</PostReadTime>
                    </PostMetaLeftSide>
                    <PostMetaRightSide>
                        <a href="/">
                            <StaticImage
                                src="../../data/images/icons/small-bookmark.png"
                                alt=""
                            />
                        </a>
                        <a href="/">
                            <StaticImage
                                src="../../data/images/icons/heart.png"
                                alt=""
                            />
                        </a>
                    </PostMetaRightSide>
                </FollowingBlogPostMeta>
            </FollowingPostContent>
        </SingleFollowingPost>
    );
};

export default SingleFollowingPosts;

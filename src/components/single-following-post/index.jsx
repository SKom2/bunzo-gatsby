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
import { getConvertedDate } from "../../utils/functions";

const SingleFollowingPosts = ({
    title,
    image,
    date,
    slug,
    tag,
    name,
    authorId,
}) => {
    return (
        <SingleFollowingPost>
            <FollowingPostThum>
                <Link to={`/${slug}`}>
                    <img src={`http://45.120.178.247:8081/${image}`} alt=""/>
                </Link>
            </FollowingPostThum>
            <FollowingPostContent>
                <FollowingBlogPostTop>
                    <FollowingBlogPostCategory>
                        <p className={`cat-btn ${tag}`}>
                            {tag}
                        </p>
                    </FollowingBlogPostCategory>
                    <FollowingBlogPostAuthor>
                        By <p>{name}</p>
                    </FollowingBlogPostAuthor>
                </FollowingBlogPostTop>
                <FollowingBlogPostTitle>
                    <Link to={`/${slug}`}>{title}</Link>
                </FollowingBlogPostTitle>
                <FollowingBlogPostMeta>
                    <PostMetaLeftSide>
                        <PostDate>
                            <i className="icofont-ui-calendar"></i>
                            <p>{getConvertedDate(date)}</p>
                        </PostDate>
                    </PostMetaLeftSide>
                </FollowingBlogPostMeta>
            </FollowingPostContent>
        </SingleFollowingPost>
    );
};

export default SingleFollowingPosts;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { slugify } from "../../utils/functions";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    LargeBlogPostWrap,
    LargeThum,
    AuthorBlogPostContent,
    BlogDetailsMetaBox,
    PostMetaLeftSide,
    BlogPostCategory,
    BlogPostAuthor,
    PostMetaRightSide,
    PostDate,
    PostReadTime,
    Title,
    DescText,
    LargeBlogPostbottom,
    LargeBlogPostAction,
    AuthorAction,
    CountNumber,
} from "./style";
const LargeSinglePosts = ({
    title,
    thume_image,
    slug,
    body,
    date,
    categories,
    authorSlug,
    dateSlug,
    authorId,
}) => {
    const image = getImage(thume_image);
    return (
        <LargeBlogPostWrap>
            <LargeThum>
                <Link to={`/${slug}`}>
                    <GatsbyImage image={image} alt="" />
                </Link>
            </LargeThum>
            <AuthorBlogPostContent>
                <BlogDetailsMetaBox>
                    <PostMetaLeftSide>
                        <BlogPostCategory>
                            {categories &&
                                categories.map((cat, i) => (
                                    <p key={i} className={`cat-btn ${cat.name}`}>
                                        {cat.name}
                                    </p>
                                ))}
                        </BlogPostCategory>
                        <BlogPostAuthor>
                            By <p>{authorId}</p>
                        </BlogPostAuthor>
                    </PostMetaLeftSide>
                    <PostMetaRightSide>
                        <PostDate>
                            <i className="icofont-ui-calendar"></i>
                            <Link to={`/date/${dateSlug}`}>{date}</Link>
                        </PostDate>
                    </PostMetaRightSide>
                </BlogDetailsMetaBox>
                <Title>
                    <Link to={`/${slug}`}>{title}</Link>
                </Title>
                <DescText>{body}</DescText>
            </AuthorBlogPostContent>
        </LargeBlogPostWrap>
    );
};
LargeSinglePosts.propTypes = {
    title: PropTypes.string,
    thume_image: PropTypes.object,
    video_link: PropTypes.object,
    date: PropTypes.string,
    slug: PropTypes.string,
    dateSlug: PropTypes.string,
    categories: PropTypes.array,
    body: PropTypes.string,
    authorSlug: PropTypes.string,
    authorId: PropTypes.string,
};
export default LargeSinglePosts;

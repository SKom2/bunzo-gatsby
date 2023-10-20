import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { getConvertedDate, slugify } from "../../utils/functions";
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
  image,
  tag,
  name,
  id,
  date,
  description
}) => {
    return (
        <LargeBlogPostWrap>
            <LargeThum>
                <Link to={`/post/${id}`}>
                    <img src={`http://45.120.178.247:8081/${image}`} alt="" style={{width: "100%"}}/>
                </Link>
            </LargeThum>
            <AuthorBlogPostContent>
                <BlogDetailsMetaBox>
                    <PostMetaLeftSide>
                        <BlogPostCategory>
                            <p className={`cat-btn ${tag}`}>
                                {tag}
                            </p>
                        </BlogPostCategory>
                        <BlogPostAuthor>
                            By <p>{name}</p>
                        </BlogPostAuthor>
                    </PostMetaLeftSide>
                    <PostMetaRightSide>
                        <PostDate>
                            <i className="icofont-ui-calendar"></i>
                            <p>{getConvertedDate(date)}</p>
                        </PostDate>
                    </PostMetaRightSide>
                </BlogDetailsMetaBox>
                <Title>
                    <Link to={`/post/${id}`}>{title}</Link>
                </Title>
                <DescText>{description}</DescText>
            </AuthorBlogPostContent>
        </LargeBlogPostWrap>
    );
};
LargeSinglePosts.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    tag: PropTypes.string,
    name: PropTypes.string
};
export default LargeSinglePosts;

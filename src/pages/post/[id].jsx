/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import Social, { SocialLink } from "../../components/social";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import { slugify } from "@utils/functions";
import StayInTouchs from "@components/stay-in-touch";
import LatestPostArea from "../../container/latest-post";
import PostAuthorBox from "../../components/post-author";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { DiscussionEmbed } from "disqus-react";
import {
  SingleBlogContent,
  PostDetailsContentWrap,
  BlogDetailsArea,
  PostDetailsBody,
  Thumb,
  Content,
  BlogDetailsMetaBox,
  PostMetaLeftSide,
  BlogDetailsPostAuthor,
  PostMidSide,
  PostDate,
  Title,
  MetaBox,
  CategorySocialContent,
} from "./style";
import ReactMarkdown from 'react-markdown'
import Api from "../../api/Api";
import { api } from "../../../config/config";
import React, { useEffect, useState } from "react";
import { getConvertedDate } from "../../utils/functions";

const SinglePosts = ({ id, location, pageContext }) => {

  const [post, setPost] = useState({})
  const postApi = new Api(api);


  useEffect(() => {
    postApi.getArticle(id)
      .then((res) => {
        setPost(res);
      })
  }, [])

  return (
    <Layout>
      <SEO title={post.title} pathname="/" />
      <PageBreadcrumb pageContext={pageContext} location={location} title={post.title} />
      <BlogDetailsArea>
        <Container>
          <Row className="gx-5">
            <Col lg={8}>
              <PostDetailsContentWrap>
                <PostDetailsBody>
                  <Thumb>
                    <img src={`http://45.120.178.247:8081/${post.image}`} alt=""/>
                  </Thumb>
                  <Content>
                    <BlogDetailsMetaBox>
                      <PostMetaLeftSide>
                        <MetaBox>
                                <p className={`post-category ${post.tag}`}>
                                  {post.tag}
                                </p>
                        </MetaBox>
                        <BlogDetailsPostAuthor>
                          By{" "}
                          <p>
                            {post.author && (
                              post.author.name
                            )}
                          </p>
                        </BlogDetailsPostAuthor>
                      </PostMetaLeftSide>

                      <PostMidSide>
                        <PostDate>
                          <i className="icofont-ui-calendar"></i>
                          <p>{getConvertedDate(post.createdAt)}</p>
                        </PostDate>
                      </PostMidSide>
                    </BlogDetailsMetaBox>

                    <Title>{post.title}</Title>
                    <SingleBlogContent>
                      <ReactMarkdown>
                        {post.description}
                      </ReactMarkdown>
                    </SingleBlogContent>
                    <CategorySocialContent>

                      <Social
                        sx={{ mt: ["30px", "0"] }}
                        shape="rounded-5"
                        space={15}
                      >
                        <SocialLink
                          href={
                            "https://www.facebook.com/sharer/sharer.php?u="
                          }
                        >
                          <i className="icofont-facebook"></i>
                        </SocialLink>
                        <SocialLink
                          href={
                            "https://twitter.com/share?url="
                          }
                        >
                          <i className="icofont-twitter"></i>
                        </SocialLink>
                        <SocialLink href="https://www.linkedin.com/">
                          <i className="icofont-linkedin"></i>
                        </SocialLink>
                      </Social>
                    </CategorySocialContent>
                  </Content>
                </PostDetailsBody>
              </PostDetailsContentWrap>
            </Col>
            <Col lg={4}>
              <div className="blog-details-sidebar">
                {post.author && (
                  <PostAuthorBox
                    postAuthorId={post.authorId}
                    postAuthorName={post.author.name}
                    postAuthorImage={post.author.image}
                    postAuthordescription={post.author.description}
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </BlogDetailsArea>
    </Layout>
  );
};

SinglePosts.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
};

export default SinglePosts;

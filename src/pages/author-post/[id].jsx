import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import PostAuthorBox from "../../components/post-author";
import LargeSinglePosts from "../../components/large-single-post";
import { BlogDetailsArea, PostTitleArea, PostTitle } from "./style";
import { useEffect, useState } from "react";
import Api from "../../api/Api";
import { api } from "../../../config/config";

const AuthorPosts = ({ id, location, pageContext }) => {
  const [author, setAuthor] = useState({})
  const authorApi = new Api(api);


  useEffect(() => {
    authorApi.getAuthor(id)
      .then((res) => {
        setAuthor(res);
      })
  }, [])


  return (
    <Layout>
      <SEO title={"Author Post"} pathname="/" />
      <PageBreadcrumb pageContext={pageContext} location={location} />
      <BlogDetailsArea>
        <Container>
          <Row>
            <Col>
              <PostTitleArea>
                <PostTitle>{`Author: ${author.name}`}</PostTitle>
              </PostTitleArea>
            </Col>
          </Row>
          <Row className="gx-5">
            <Col lg={8}>
              <Row>
                {data.allMarkdownRemark.edges.map((blog, i) => {
                  return (
                    <Col lg={12} key={i}>
                      <LargeSinglePosts
                        title={
                          blog.node.frontmatter.title
                        }
                        thume_image={
                          blog.node.frontmatter
                            .thume_image
                        }
                        categories={
                          blog.node.frontmatter
                            .categories
                        }
                        body={blog.node.excerpt}
                        date={
                          blog.node.frontmatter.date
                        }
                        slug={blog.node.fields.slug}
                        authorSlug={
                          blog.node.fields.authorId
                        }
                        authorId={
                          blog.node.fields.authorId
                        }
                        dateSlug={
                          blog.node.fields.dateSlug
                        }
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col lg={4}>
              <div className="blog-details-sidebar">
                {author && (
                  <PostAuthorBox
                    postAuthorName={author.name}
                    postAuthorImage={author.image}
                    postAuthorBio={author.type}
                    postAuthordescription={
                      author.description
                    }
                    authorSlug={author.fields.authorId}
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

AuthorPosts.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
};

export default AuthorPosts;

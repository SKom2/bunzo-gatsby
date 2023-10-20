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
import { formatTitleToURL } from "../../utils/functions";

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
      <PageBreadcrumb pageContext={pageContext} location={location} title={author.name}/>
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
                {author.article &&
                  author.article.map((blog, i) => {
                  return (
                    <Col lg={12} key={i}>
                      <LargeSinglePosts
                        id={blog.id}
                        title={blog.title}
                        image={blog.image}
                        tag={blog.tag}
                        name={author.name}
                        slug={formatTitleToURL(blog.title)}
                        authorId={blog.authorId}
                        date={blog.createdAt}
                        authorSlug={
                          blog.authorId
                        }
                        description={blog.description}
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
                    authorSlug={author.authorId}
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
  id: PropTypes.string
};

export default AuthorPosts;

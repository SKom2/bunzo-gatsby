import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroCategory from "@components/hero-category";
import { graphql, useStaticQuery, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import HeroBlogPost from "../../../components/hero-blog-post";
import {
    HeroOneArea,
    HeroInnerArea,
    HeroCategoryArea,
    HeroBlogPostArea,
    HeroBannerArea,
} from "./style";
import { formatTitleToURL } from "../../../utils/functions";

const HeroOne = ({ trendingApiData }) => {
    return (
        <HeroOneArea>
            <Container>
                <Row>
                    <Col lg={12}>
                        <HeroInnerArea>
                            <HeroCategoryArea>
                                {trendingApiData.slice(0, 4).map((cat) => (
                                    <HeroCategory
                                        key={cat.name}
                                        name={cat.name}
                                        image={cat.image}
                                    />
                                ))}
                            </HeroCategoryArea>

                            <HeroBannerArea>
                                <Link to='/'>
                                    <StaticImage
                                        src="../../../data/images/hero/hero-01.jpg"
                                        alt=""
                                    />
                                </Link>
                            </HeroBannerArea>

                            <HeroBlogPostArea>
                                {trendingApiData.slice(0, 2).map((post, i) => {
                                        return (
                                            <HeroBlogPost
                                              key={`heropost-${i}`}
                                              id={post.id}
                                              title={post.title}
                                              description={post.description}
                                              image={post.image}
                                              tag={post.tag}
                                              name={post.author.name}
                                              slug={formatTitleToURL(post.title)}
                                              authorId={post.authorId}
                                              date={post.createdAt}
                                            />
                                        );
                                    })}
                            </HeroBlogPostArea>
                        </HeroInnerArea>
                    </Col>
                </Row>
            </Container>
        </HeroOneArea>
    );
};

export default HeroOne;

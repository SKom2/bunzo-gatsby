import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import TrendingSingleItems from "../../../components/trending-article-item";
import TrendingSingleLargeItems from "../../../components/trending-article-large-item";
import {
    TrendingArticleArea,
    TrendingArticleRow,
    TrendingArticleLeftSide,
    TrendingArticleRightSide,
} from "./style";
import Api from "../../../api/Api";
import { api } from "../../../../config/config";
import { formatTitleToURL } from "../../../utils/functions";

const TredingArticle = ({ trendingApiData }) => {


    const firstFiveArticles = trendingApiData.filter((_, index) => index % 2 === 0);
    const nextFiveArticles = trendingApiData.filter((_, index) => index % 2 === 1);

    return (
        <TrendingArticleArea>
            <Container>
                <Row>
                    <Col lg={8} xs={7}>
                        <div className="section-title mb-40">
                            <h3>Trending Article</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <TrendingArticleRow>
                            <TrendingArticleLeftSide>
                                {firstFiveArticles.map((item, index) => {
                                    return (
                                        <TrendingSingleItems
                                            key={`trending-${index}`}
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            tag={item.tag}
                                            name={item.author.name}
                                            slug={formatTitleToURL(item.title)}
                                            authorId={item.authorId}
                                            date={item.createdAt}
                                        />
                                    );
                                })}
                            </TrendingArticleLeftSide>

                            <TrendingArticleRightSide>
                                {nextFiveArticles.map((item, index) => {
                                    return (
                                        <TrendingSingleLargeItems
                                            key={`largetrending-${index}`}
                                            title={item.title}
                                            image={item.image}
                                            id={item.id}
                                            tag={item.tag}
                                            name={item.author.name}
                                            slug={formatTitleToURL(item.title)}
                                            authorId={item.authorId}
                                            date={item.createdAt}
                                        />
                                    );
                                })}
                            </TrendingArticleRightSide>
                        </TrendingArticleRow>
                    </Col>
                </Row>
            </Container>
        </TrendingArticleArea>
    );
};

TredingArticle.propTypes = {};

export default TredingArticle;

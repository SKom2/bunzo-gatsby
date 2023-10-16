import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Swiper, { SwiperSlide } from "@components/swiper";
import SingleFollowingPosts from "../../../components/single-following-post";
import PostAuthorBox from "../../../components/post-author";

import {
    FromFollowingWrap,
    FromFollowingHaderArea,
    FollowingSliderNavigation,
    FromFollowingLeftSide,
    FromFollowingRightSide,
    FollowingAddBanner,
} from "./style";
import { formatTitleToURL } from "../../../utils/functions";
import Api from "../../../api/Api";
import { api } from "../../../../config/config";

const FromFollowingArea = ({followingApiData}) => {
    let postsByAuthor = {};

    followingApiData.forEach((data) => {
        const { authorId } = data;

        if (!postsByAuthor[authorId]) {
            postsByAuthor[authorId] = [];
        }

        postsByAuthor[authorId].push(data);
    });

    console.log(postsByAuthor)
    return (
        <FromFollowingWrap>
            <Container>
                <Row>
                    <Col>
                        <FromFollowingHaderArea>
                            <div className="section-title">
                                <h3>From Following</h3>
                            </div>

                            <FollowingSliderNavigation>
                                <div className="following-slider-button-next navigation-button">
                                    <i className="icofont-long-arrow-left"></i>
                                </div>
                                <div className="following-slider-button-prev navigation-button">
                                    <i className="icofont-long-arrow-right"></i>
                                </div>
                            </FollowingSliderNavigation>
                        </FromFollowingHaderArea>
                    </Col>
                </Row>

                <Swiper
                    layout={{
                        nav: "following-slider-navigation",
                        dots: "following-dots-style",
                    }}
                    navigation={{
                        nextEl: ".following-slider-button-next",
                        prevEl: ".following-slider-button-prev",
                    }}
                    slidesPerView={1}
                    spaceBetween={0}
                >
                    {Object.keys(postsByAuthor).map((key, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Row className="gx-5">
                                    <FromFollowingLeftSide className="col">
                                        <Row className="gx-5">
                                            {postsByAuthor[key]
                                                .slice(0, 4)
                                                .map((item, i) => {
                                                    return (
                                                        <Col
                                                            md={6}
                                                            sm={6}
                                                            key={i}
                                                        >
                                                            <SingleFollowingPosts
                                                              id={item.id}
                                                              title={item.title}
                                                              image={item.image}
                                                              tag={item.tag}
                                                              name={item.author.name}
                                                              slug={formatTitleToURL(item.title)}
                                                              authorId={item.authorId}
                                                              date={item.createdAt}
                                                            />
                                                        </Col>
                                                    );
                                                })}
                                        </Row>
                                    </FromFollowingLeftSide>

                                    <FromFollowingRightSide className="col">
                                        <PostAuthorBox
                                            postAuthorImage={
                                                postsByAuthor[key][0].author.image
                                            }
                                            postAuthorName={
                                                postsByAuthor[key][0].author.name
                                            }
                                            postAuthorBio={
                                                postsByAuthor[key][0].author.bio
                                            }
                                            postAuthordescription={
                                                postsByAuthor[key][0].author
                                                    .description
                                            }
                                            authorSlug={
                                                postsByAuthor[key][0].authorId
                                            }
                                        />
                                    </FromFollowingRightSide>
                                </Row>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Container>
        </FromFollowingWrap>
    );
};

export default FromFollowingArea;

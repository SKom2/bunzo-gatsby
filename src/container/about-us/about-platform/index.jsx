import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";

import {
    AboutHistoryArea,
    SinglePlatformBox,
    PlatformIcon,
    PlatformContent,
    Title,
    TextDec,
    TextDec2,
    PlatformContentBox,
    PlateformImageBox,
    PlateforemImage,
    PlatformBoxButton,
} from "./style";

const AboutPlatform = () => {
    const aboutPlatformQuery = useStaticQuery(graphql`
        query AboutPlatformQuery {
            aboutUsJson {
                id
                about_us_platform {
                    id
                    image1 {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    title
                    text1
                    text2
                }
                about_us_digital_publishing {
                    id
                    image2 {
                        childImageSharp {
                            gatsbyImageData(quality: 100)
                        }
                    }
                    title
                    text1
                    text2
                }
            }
        }
    `);

    const {
        about_us_platform: { image1, title, text1, text2 },
        about_us_digital_publishing: {
            image2: pub_image,
            title: pub_title,
            text1: pub_text1,
            text2: pub_text2,
        },
    } = aboutPlatformQuery.aboutUsJson;

    const imageitem1 = getImage(image1);
    const image2 = getImage(pub_image);

    return (
        <AboutHistoryArea>
            <Container>
                <Row className="gx-5">
                    <Col lg={8}>
                        <SinglePlatformBox className="platform-d-flex">
                            <PlatformContentBox>
                                <PlatformIcon>
                                    <GatsbyImage
                                        image={image2}
                                        alt={pub_title}
                                    />
                                </PlatformIcon>
                                <PlatformContent>
                                    <Title>{pub_title}</Title>
                                    <TextDec>{pub_text1}</TextDec>
                                    <TextDec>{pub_text2}</TextDec>
                                </PlatformContent>
                            </PlatformContentBox>
                            <PlateformImageBox>
                                <PlateforemImage>
                                    <StaticImage
                                        src="../../../data/images/banners/about.jpeg"
                                        alt=""
                                        style={{borderRadius: "10px"}}
                                    />
                                    <PlatformBoxButton>
                                    </PlatformBoxButton>
                                </PlateforemImage>
                            </PlateformImageBox>
                        </SinglePlatformBox>
                    </Col>
                </Row>
            </Container>
        </AboutHistoryArea>
    );
};

export default AboutPlatform;

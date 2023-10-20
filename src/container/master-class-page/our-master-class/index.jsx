import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MasterClassAdvantages, MasterClassArea } from "./style";
import { graphql, useStaticQuery } from "gatsby";
import Advantage from "../../../components/advantage";
import MasterClassForm from "../../../components/master-class-form";

const OurMasterClass = () => {
  const masterClassInfoQuery = useStaticQuery(graphql`
        query MasterClassinfoQuery {
            masterClassJson {
              id
              title
              intro
              master_class_advantages {
                advantages_title
                advantages {
                  title
                  text
                  image{
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
                }
              }
            }
        }
    `);

  const {
    title,
    intro,
    master_class_advantages : {
      advantages_title,
      advantages,
    }
  } = masterClassInfoQuery.masterClassJson;

  return (
    <MasterClassArea>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} xs={7}>
            <div className='section-title mb-40'>
              <h1>{title}</h1>
              <p>{intro}</p>
            </div>
          </Col>
        </Row>
        <MasterClassAdvantages>
          <h2>{advantages_title}</h2>
          <div>
            {advantages &&
              advantages.map((advantage, i) => (
               <Advantage
                 key={i}
                 title={advantage.title}
                 text={advantage.text}
                 image={advantage.image}
               />
            ))}
          </div>
        </MasterClassAdvantages>
        <Row className="justify-content-center">
          <Col lg={8} xs={7}>
            <MasterClassForm />
          </Col>
        </Row>
      </Container>

    </MasterClassArea>
  );
};

export default OurMasterClass;

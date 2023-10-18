import * as React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import OurMasterClass from "../container/master-class-page/our-master-class";

const MasterClassPage = ({ location, pageContext }) => {
  return (
    <Layout>
      <SEO title="Our Master Class" pathname="/" />
      <PageBreadcrumb pageContext={pageContext} location={location} />
      <OurMasterClass />
    </Layout>
  );
};
MasterClassPage.propTypes = {
  location: PropTypes.object,
  pageContext: PropTypes.object,
};

export default MasterClassPage;

import * as React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import Profile from "../container/profile";

const ProfilePage = ({ location, pageContext }) => {

  return (
    <Layout>
      <SEO title="Login" pathname="/" />
      <PageBreadcrumb pageContext={pageContext} location={location} />
      <Profile />
    </Layout>
  );
};
ProfilePage.propTypes = {
  location: PropTypes.object,
  pageContext: PropTypes.object,
};

export default ProfilePage;

import * as React from "react";
import Layout from "@layout";
import SEO from "@components/seo";
import HeroOne from "../container/home-one/hero";
import TredingArticle from "../container/home-one/trending-article";
import FromFollowingArea from "../container/home-one/from-following";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <HeroOne />
            <TredingArticle />
            <FromFollowingArea />
        </Layout>
    );
};

export default IndexPage;

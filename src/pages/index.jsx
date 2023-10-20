import * as React from "react";
import Layout from "@layout";
import SEO from "@components/seo";
import HeroOne from "../container/home-one/hero";
import TredingArticle from "../container/home-one/trending-article";
import FromFollowingArea from "../container/home-one/from-following";
import Api from "../api/Api";
import { api } from "../../config/config";
import { useEffect, useState } from "react";

const IndexPage = () => {
    const articleApi = new Api(api);
    const [trendingApiData, setTrendingApiData] = useState([]);
    const [followingApiData, setFollowingApiData] = useState([])

    useEffect(() => {
      articleApi
        .getArticles({
          page: 0,
          q: "",
          isTrends: true,
          isFollowing: false,
        })
        .then((res) => {
          setTrendingApiData(res);
        });
        articleApi
          .getArticles({
            page: 0,
            q: "",
            isTrends: false,
            isFollowing: true,
          })
          .then((res) => {
            setFollowingApiData(res);
          });
    }, [])
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <HeroOne trendingApiData={trendingApiData}/>
            <TredingArticle trendingApiData={trendingApiData}/>
            <FromFollowingArea followingApiData={followingApiData}/>
        </Layout>
    );
};

export default IndexPage;

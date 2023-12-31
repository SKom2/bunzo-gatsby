import styled, { device } from "@theme/utils";

// item style
export const TrendingSingleItem = styled.article`
    display: flex;
    margin-top: 35px;
`;

export const TrendingPostThum = styled.div`
    max-width: 100px;
    flex: 0 0 auto;
    ${device.medium} {
        max-width: 160px;
    }
    a {
        display: block;
        height: 100%;
        .gatsby-image-wrapper-constrained {
            height: 100%;
        }
    }
    img {
        height: 100%;
        vertical-align: middle;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 10px;
    }
`;
export const TrendingPostContent = styled.div`
    margin-left: 15px;
    ${device.medium} {
        margin-left: 30px;
    }
`;
export const TrendingBlogPostTop = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 15px;
`;

export const TrendingBlogPostCategory = styled.div`
    margin-right: 10px;
    ${device.medium} {
        margin-right: 25px;
    }
    p {
        min-width: 50px;
        text-align: center;
        padding: 4px 5px;
        border-radius: 10px;
        color: #222;

        display: inline-block;
        font-size: 12px;
        ${device.medium} {
            min-width: 100px;
            font-size: 15px;
        }
    }
`;

export const TrendingBlogPostAuthor = styled.div`
    display: flex;
    gap: 4px;
    color: #9b9ea1;
    font-size: 13px;
    p {
        color: #000000;
    }
    ${device.medium} {
        font-size: 15px;
    }
`;

export const HrendingBlogPostTitle = styled.h5`
    margin-bottom: 15px;
`;
export const TrendingBlogPostMeta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const PostMetaLeftSide = styled.div``;

export const PostDate = styled.span`
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 10px;
    margin-right: 10px;
    font-size: 13px;
    i {
        margin-right: 3px;
    }
`;
export const ReadTime = styled.span`
    font-size: 13px;
`;
export const PostMetaRightSide = styled.span`
    display: inline-block;
    ${device.small} {
        display: inline-block;
    }
    a {
        margin-left: 10px;
        margin-top: 5px;
    }
`;

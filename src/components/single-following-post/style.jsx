import styled, { device } from "@theme/utils";

export const SingleFollowingPost = styled.div`
    margin-bottom: 40px;
`;
export const FollowingPostThum = styled.div`
    display: block;
    img {
        border-radius: 15px;
    }
`;
export const FollowingPostContent = styled.div``;
export const FollowingBlogPostTop = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 25px;
`;
export const FollowingBlogPostCategory = styled.div`
    margin-right: 25px;
`;
export const FollowingBlogPostAuthor = styled.div`
    display: flex;
    gap: 4px;
    color: #9b9ea1;
    p {
        color: #000000;
    }
`;
export const FollowingBlogPostTitle = styled.h5`
    margin-bottom: 15px;
`;
export const FollowingBlogPostMeta = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
`;
export const PostMetaLeftSide = styled.div``;
export const PostMetaRightSide = styled.div`
    a {
        margin-left: 10px;
    }
`;
export const PostDate = styled.span`
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 14px;
    margin-right: 10px;
    font-size: 13px;
    i {
        margin-right: 4px;
    }
`;
export const PostReadTime = styled.span`
    font-size: 13px;
`;

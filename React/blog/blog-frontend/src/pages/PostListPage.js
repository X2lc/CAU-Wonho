import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostList from '../components/posts/PostList';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <div>안녕하세요.</div>
      <PostList />
    </>
  );
};
export default PostListPage;
import { GetServerSideProps } from "next";
import React from "react";
import { getData } from "../../../../src/common/service/FireBaseService";
import PostCard from "../../../../src/components/containers/PostCard";
import { wrapper } from "../../../../store";
import { setBlog, BlogVO } from "../../../../store/modules/blog";
import { setMenu, MenuVO } from "../../../../store/modules/menu";
import { setUser, UserVO } from "../../../../store/modules/user";
import { PostVO } from "../../../../src/common/constant/Model";

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async ({ query: { nickname, id } }) => {
      if (!nickname || !id) {
        return {
          notFound: true,
        };
      }

      const [blog, post] = await Promise.all([
        getData("blog", nickname.toString()),
        getData("post", id.toString()),
      ]);
      if (!blog || !post) {
        return {
          notFound: true,
        };
      }

      dispatch(setBlog(blog as BlogVO));
      dispatch(setMenu(blog.menus as MenuVO[]));
      dispatch(setUser(blog.users as UserVO));

      return {
        props: {
          post: post,
        },
      };
    }
);

interface IProps {
  post: PostVO;
}

const PostPage = ({ post }: IProps) => {
  return <PostCard post={post} />;
};

export default PostPage;

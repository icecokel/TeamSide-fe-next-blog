import { NextPage } from "next";
import { PostVO } from "../../../../src/common/Model";
import CategoryCt from "../../../../src/components/containers/CategoryCt";
import { MenuVo } from "../../../../store/modules/menu";
import { getItem, unmarshallByItem, getMenus, getPosts } from "../../../../src/common/DynamoDbUtil";
import { useEffect } from "react";

export async function getServerSideProps(context: any) {
  const blogs = await getItem("BLOG", {
    name: {
      S: context.query.nickname,
    },
  });

  if (!blogs.Item) {
    return {
      props: {
        code: 404,
      },
    };
  }

  const blogItem = unmarshallByItem(blogs.Item);
  const categoryItems: MenuVo[] = await getMenus(blogItem.id);

  const currentMenu = categoryItems.find((item) => {
    return item.name === context.query.name;
  });

  if (!currentMenu) {
    return {
      props: {
        code: 404,
      },
    };
  }

  const posts = await getPosts(currentMenu?.id);

  return {
    props: {
      posts,
    },
  };
}

const CategoryPage: NextPage = (props: any) => {
  useEffect(() => {
    if (props.code === 404) {
      window.location.replace(window.location.origin + "/404");
    }
  }, []);

  return <CategoryCt postList={props.posts} />;
};

export default CategoryPage;

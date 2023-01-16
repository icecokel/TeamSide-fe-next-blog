import React from "react";
import { useRouter } from "next/router";
import { PostVO } from "../../common/Model";
import CategoryCp from "../CategoryCp";

interface IProp {
  postList: PostVO[];
}

const CategoryCt = ({ postList }: IProp) => {
  const router = useRouter();
  const categoryName = router.query.name ?? "";
  const nickname = router.query.nickname ?? "";

  return <CategoryCp categoryName={categoryName} postList={postList} nickname={nickname} />;
};

export default CategoryCt;

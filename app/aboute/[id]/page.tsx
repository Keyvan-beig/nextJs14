"use client";

import { usePathname } from "next/navigation";

const showPost = ({ params }: { params: { id: number } }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      <p>id : {params.id}</p>
    </>
  );
};

export default showPost;

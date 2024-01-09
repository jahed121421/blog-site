import Titel from "../../Components/Title/Titel";
import useAllbolgpost from "../../Hooks/useAllbolgpost";
import LoadingPage from "./../Loading Page/LoadingPage";
import Card from "./../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import { useState } from "react";

const Blogs = () => {
  const [AllBlog, AllBlogLoading] = useAllbolgpost();
  const [page, setPage] = useState(0);

  if (AllBlogLoading) {
    return <LoadingPage />;
  }

  const totalPost = AllBlog.length;
  const PerPagePost = 15;
  const totalPage = Math.ceil(totalPost / PerPagePost);
  const PageNumber = [...Array(totalPage).keys()];

  return (
    <>
      <Titel title="Blog" />
      <div className="mx-auto my-5 flex flex-col items-center justify-center gap-10 md:grid md:grid-cols-2 md:gap-7 lg:grid-cols-3">
        {AllBlog.map((Allblogs, i) => (
          <Card key={i} Allblogs={Allblogs} AllBlogLoading={AllBlogLoading} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} PageNumber={PageNumber} />
    </>
  );
};

export default Blogs;

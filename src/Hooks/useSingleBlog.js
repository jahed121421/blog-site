import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const useSingleBlog = () => {
  const { id } = useParams();
  const {
    data: SingleBlogData,
    isLoading: SingleBlogLoading,
    refetch,
  } = useQuery({
    queryKey: ["single-blog", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/single-blog/${id}`);
      return res.json();
    },
  });
  return [SingleBlogData, SingleBlogLoading, refetch];
};

export default useSingleBlog;

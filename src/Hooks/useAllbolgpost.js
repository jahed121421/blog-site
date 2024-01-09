import { useQuery } from "@tanstack/react-query";

const useAllbolgpost = () => {
  const {
    data: AllBlog,
    isLoading: AllBlogLoading,
    refetch: AllBlogRefetch,
  } = useQuery({
    queryKey: ["all-blog"],
    queryFn: async () => {
      const res = await fetch("./blog.json");
      return res.json();
    },
  });
  return [AllBlog, AllBlogLoading, AllBlogRefetch];
};

export default useAllbolgpost;

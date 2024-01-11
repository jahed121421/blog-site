import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "./../Pages/AuthProvider/AuthProvider";
import { useContext } from "react";

const useOwnPost = () => {
  const { user } = useContext(AuthContext);
  const {
    data: OwnPost,
    isLoading: OwnPostloding,
    refetch,
  } = useQuery({
    queryKey: ["OwnPost", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/own-blog/${user?.email}`);
      return res.json();
    },
  });
  return [OwnPost, OwnPostloding, refetch];
};

export default useOwnPost;

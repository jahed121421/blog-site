import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import axios from "axios";

const useCheckFevotite = (id) => {
  const { user } = useContext(AuthContext);
  console.log(id);
  const {
    data: FevoriteCheck,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["fevoriteCheck", user?.email, id],
    queryFn: async () => {
      const res = await axios(
        `http://localhost:5000/check-comment/${user?.email}?menuID=${id}`,
      );
      return res.data.Fevorite;
    },
  });
  return [FevoriteCheck, isLoading, refetch];
};

export default useCheckFevotite;

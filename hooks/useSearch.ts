import { useState } from "react";
import axios from "axios";
import useResult from "@/stores/useResult";
import { UserType } from "@/types/userType";

const useSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setNotFound, setUser } = useResult();

  const getUser = async (search: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${search}`
      );

      if (response.status === 200) {
        setUser(response.data as UserType);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error(error);
      setNotFound(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, getUser };
};

export default useSearch;

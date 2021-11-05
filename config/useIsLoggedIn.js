import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const useIsLoggedIn = async () => {
  const auth = useSelector((state) => state.auth);
  const router = useRouter();
  if (!auth.currentUser && typeof window !== "undefined") {
    router.push("/");
    return true;
  }
  return false;
};

export default useIsLoggedIn;

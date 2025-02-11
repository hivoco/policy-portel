import UserDataContextProvider from "@/Context/UserDataContext";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {

  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isPublicPath = router.pathname === "/";
    const userData = sessionStorage.getItem("userData");
    console.log(userData,'userData');
    

    if (!userData && !isPublicPath) {// not logined and not on / --> go to /
      router.replace("/");
    }
    else{
      setIsAuthenticated(true)
    }
  }, [router.pathname]);

  
  if (!isAuthenticated && router.pathname !== "/") {
    return null; // or a loading spinner
  }
  
  return (
    <UserDataContextProvider>
      <Component {...pageProps} />
    </UserDataContextProvider>
  );
}

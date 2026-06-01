import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";

const AuthGuard = (props) => {
  const { children, fallback } = props;
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const [isMounted, setIsMounted] = useState(false);

  // Ensuring the component is mounted before checking the router
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const accessToken = Cookies.get("PM-accessToken");

  useEffect(() => {
    // Check if user is logged out (token removed)
    if (!isMounted) {
      return;
    }

    if (!accessToken) {
      // Redirect to the login page after logout
      const loginUrl =
        pathname !== "/panel/property-manager-signin"
          ? `/panel/property-manager-signin?returnUrl=${encodeURIComponent(
              pathname
            )}`
          : "/panel/property-manager-signin";
      router.push(loginUrl); // Redirect to the login page
    }
  }, [isMounted, pathname, router, accessToken]);

  // If no token exists (i.e., user is logged out), show login page
  if (!isMounted) {
    return fallback; // Fallback can show a loading screen or something while redirecting
  }

  // If token exists (i.e., user is authenticated), show the main content
  return <>{children}</>;
};

export default AuthGuard;

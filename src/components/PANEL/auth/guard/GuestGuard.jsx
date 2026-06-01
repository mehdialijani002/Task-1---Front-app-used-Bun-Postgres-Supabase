"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";

const GuestGuard = ({ children, fallback }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const accessToken = Cookies.get("accessToken");
    const referrer = document.referrer;

    const cameFromDashboard = referrer.includes("/panel/role");

    if (accessToken && !cameFromDashboard && pathname !== "/panel/role") {
      // If user has token AND didn't just go back from dashboard
      router.replace("/panel/role"); // Use replace to avoid stacking history
    }
  }, [isMounted, pathname, router]);

  const accessToken = Cookies.get("accessToken");
  if (accessToken || !isMounted) {
    return fallback;
  }

  return <>{children}</>;
};

export default GuestGuard;

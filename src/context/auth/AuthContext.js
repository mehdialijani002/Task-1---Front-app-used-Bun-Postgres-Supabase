"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { createContext, useEffect } from "react";
import { usePostTechnicianSignIn } from "@/hooks/api/useTechnicianAuth";
import { usePostPropertyManagerSignin } from "@/hooks/api/usePropertyManagerAuthApi";
import { subscribeToTable } from "@/lib/supabaseRealtime";
import { showMessage } from "@/lib/snackBarService";

const defaultProvider = {
  TechnicianSignIn: () => Promise.resolve(),
  PropertyManagerSignIn: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  const technicianSignIn = usePostTechnicianSignIn();
  const propertyManagerSignIn = usePostPropertyManagerSignin();

  const router = useRouter();

  // Authentication handlers (no useCallback)
  // inside AuthProvider
  const handleTechnicianSignIn = async (data) => {
    return new Promise((resolve) => {
      technicianSignIn.mutate(data, {
        onSuccess: (response) => {
          // Support both API response and Supabase response shapes
          // API: response.data.token
          // Supabase adapter: response.session.access_token or response.access_token
          const token =
            response?.data?.token ||
            response?.session?.access_token ||
            response?.access_token ||
            response?.token;
          const user =
            response?.data?.user ||
            response?.user ||
            response?.session?.user ||
            null;
          if (token) Cookies.set("accessToken", token);
          if (user) {
            Cookies.set("user", JSON.stringify(user));
            if (user.email) Cookies.set("userEmail", user.email);
          }
          router.replace("/panel/dashboard"); // redirect after login
          resolve(response);
        },
      });
    });
  };

  /////Property Manager Sign in
  const handlePropertyManagerSignin = async (data) => {
    return new Promise((resolve) => {
      propertyManagerSignIn.mutate(data, {
        onSuccess: (response) => {
          const token =
            response?.data?.token ||
            response?.session?.access_token ||
            response?.access_token ||
            response?.token;
          const user =
            response?.data?.user ||
            response?.user ||
            response?.session?.user ||
            null;
          if (token) Cookies.set("PM-accessToken", token);
          if (user) {
            Cookies.set("PM-user", JSON.stringify(user));
            if (user.email) Cookies.set("userEmail", user.email);
          }
          router.replace("/panel/property-manager-profile"); // redirect after login
          resolve(response);
        },
      });
    });
  };
  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("PM-accessToken");
    Cookies.remove("user");
    Cookies.remove("PM-user");
    Cookies.remove("userEmail");
    router.replace("/");
  };

  const values = {
    TechnicianSignIn: handleTechnicianSignIn,
    technicianSignIn,
    PropertyManagerSignIn: handlePropertyManagerSignin,
    propertyManagerSignIn,
    logout: handleLogout,
  };

  // Register a global realtime listener for demo bookings to notify admins
  useEffect(() => {
    const useRealtime = process.env.NEXT_PUBLIC_USE_SUPABASE === "true";
    if (!useRealtime) return;

    const sub = subscribeToTable("demo_bookings", (payload) => {
      try {
        if (payload?.eventType === "INSERT") {
          const row = payload.new || payload.record || payload;
          const name = row?.name || row?.email || "New booking";
          showMessage(`New demo booking: ${name}`, "info");
        }
      } catch (e) {
        // ignore
      }
    });

    return () => {
      sub?.unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

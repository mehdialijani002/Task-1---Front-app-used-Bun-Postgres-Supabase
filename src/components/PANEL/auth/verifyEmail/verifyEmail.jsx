"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import axiosInstance from "@/api/_instanceAxios"; // adjust if needed
import Link from "next/link";

export default function VerifyEmailComponent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const useSupabase = process.env.NEXT_PUBLIC_USE_SUPABASE === "true";

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token");
      if (!token) {
        setMessage("Token not found in URL.");
        router.replace("/panel/creat-account");
        return;
      }

      if (useSupabase) {
        setMessage(
          "Using local Supabase auth. Please check the confirmation email from Supabase and sign in after verification.",
        );
        return;
      }

      try {
        setIsLoading(true);

        const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await axiosInstance.get(
          `${baseURL}/api/v1/email/verify?token=${token}`,
        );

        // Handle success
        setMessage("Email verified successfully!");
      } catch (err) {
        // Handle error
        setMessage("Verification failed or token expired.");
      } finally {
        setIsLoading(false);
      }
    };

    verifyEmail();
  }, [searchParams, useSupabase, router]);

  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography variant="h6">{message}</Typography>

          <Link href="/panel/signin" passHref>
            <Button variant="contained" color="primary" size="large">
              Back to Signin
            </Button>
          </Link>
        </>
      )}
    </Box>
  );
}

// queryClient.js
import { QueryCache, QueryClient } from "@tanstack/react-query";
import { showMessage } from "@/lib/snackBarService";

const handleError = (error) => {
  const responseData = error?.response?.data;
  const details = responseData ?? error;

  const invalidCredsMessage =
    details?.code === "invalid_credentials" ? details?.message : undefined;

  if (invalidCredsMessage) {
    showMessage(invalidCredsMessage, "error");
    return;
  }

  const isAxiosError = !!responseData;

  if (isAxiosError) {
    // Fix: point to the correct path for validation_errors
    const validationErrors = responseData?.data?.validation_errors;

    if (validationErrors && Object.keys(validationErrors).length > 0) {
      const firstField = Object.keys(validationErrors)[0];
      const firstMessage = validationErrors[firstField]?.[0]; // Safe optional chaining
      if (firstMessage) {
        showMessage(firstMessage, "error"); // Shows validation error first
        return; // Exit so description error is ignored
      }
    }

    // Fallback to description if no validation errors
    const description = responseData?.error?.description;
    if (description) {
      showMessage(description, "error");
    } else {
      showMessage("An unexpected error occurred.", "error");
    }
  } else if (error?.message) {
    showMessage(error.message, "error");
  } else {
    showMessage(
      "An unexpected error occurred (possibly due to CORS or another server issue).",
      "error",
    );
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
      onError: handleError,
    },
    mutations: {
      retry: false,
      onError: handleError,
    },
  },
  queryCache: new QueryCache({
    onError: handleError,
  }),
});

export default queryClient;

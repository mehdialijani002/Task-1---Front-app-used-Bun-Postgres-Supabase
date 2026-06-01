"use client";

import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import SnackbarWithProgress from "@/components/UI/SnackBar/snackBar";
import { setShowMessage as setGlobalShowMessage } from "@/lib/snackBarService"; // import service

const SnackbarContext = createContext({
  showMessage: () => {},
});

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const showMessage = useCallback((message, severity = "info") => {
    setSnackbar({ open: true, message, severity });
  }, []);

  // Register the global showMessage function once
  useEffect(() => {
    setGlobalShowMessage(showMessage);
  }, [showMessage]);

  return (
    <SnackbarContext.Provider value={{ showMessage }}>
      {children}
      <SnackbarWithProgress
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        setSnackbar={setSnackbar}
      />
    </SnackbarContext.Provider>
  );
};

// Custom hook for easier usage inside components
export const useSnackbar = () => useContext(SnackbarContext);

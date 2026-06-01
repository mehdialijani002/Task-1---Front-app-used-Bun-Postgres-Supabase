"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const TICK = 50; // smoother progress without lag

const SnackbarWithProgress = ({
  open,
  message,
  severity,
  setSnackbar,
  duration = 6000,
}) => {
  const [progress, setProgress] = useState(0);

  const elapsedRef = useRef(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const clearTimers = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
  };

  const closeSnackbar = useCallback(() => {
    clearTimers();
    setSnackbar((prev) => ({ ...prev, open: false }));
  }, [setSnackbar]);

  const startTimers = useCallback(() => {
    clearTimers();

    intervalRef.current = setInterval(() => {
      elapsedRef.current += TICK;
      setProgress((elapsedRef.current / duration) * 100);

      if (elapsedRef.current >= duration) {
        closeSnackbar();
      }
    }, TICK);
  }, [duration, closeSnackbar]);

  useEffect(() => {
    if (!open) return;

    elapsedRef.current = 0;
    setProgress(0);
    startTimers();

    return clearTimers;
  }, [open, startTimers]);

  const handleMouseEnter = () => {
    clearTimers(); // pause
  };

  const handleMouseLeave = () => {
    startTimers(); // resume
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <div
        style={{ width: "100%" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Alert
          severity={severity}
          onClose={closeSnackbar}
          sx={{ width: "100%", borderRadius: 0 }}
        >
          {message}
        </Alert>

        <LinearProgress
          variant="determinate"
          value={progress}
          color={severity}
          sx={{ borderRadius: 0 }}
        />
      </div>
    </Snackbar>
  );
};

export default SnackbarWithProgress;

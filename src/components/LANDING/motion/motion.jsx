// components/motion/MotionComponents.tsx

"use client";

import { motion } from "framer-motion";
import { Box, Typography, Stack } from "@mui/material";

// Wrap MUI components
export const MotionBox = motion.create(Box);
export const MotionTypography = motion(Typography);
export const MotionStack = motion(Stack);

/* ----------------------------------
   Common Animations (presets)
----------------------------------- */

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.3 },
};

/* ----------------------------------
   Additional Motion Presets
----------------------------------- */

// Slide from left
export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Slide from right
export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Fade + scale (good for cards/modals)
export const fadeScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: "easeOut" },
};

// Rotate in
export const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

// Hover lift (buttons/cards)
export const hoverLift = {
  whileHover: {
    y: -6,
    boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
    transition: { duration: 0.2 },
  },
};

// Tap / press animation
export const tapScale = {
  whileTap: { scale: 0.95 },
};

// Stagger container (for lists)
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Stagger item
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

// Spring pop (attention grab)
export const springPop = {
  initial: { scale: 0.9 },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

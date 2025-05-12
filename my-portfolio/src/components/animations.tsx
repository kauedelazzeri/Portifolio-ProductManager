"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type AnimationProps = HTMLMotionProps<"div">;

export const FadeIn = forwardRef<HTMLDivElement, AnimationProps>(
  ({ children, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
      style={{ ...props.style }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
);
FadeIn.displayName = "FadeIn";

export const FadeInStagger = forwardRef<HTMLDivElement, AnimationProps>(
  ({ children, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
      {...props}
      style={{ ...props.style }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
);
FadeInStagger.displayName = "FadeInStagger";

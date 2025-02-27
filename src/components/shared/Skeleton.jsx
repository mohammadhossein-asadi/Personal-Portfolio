import React from "react";
import { cn } from "../../utils/cn";

export const ProfileSkeleton = ({ className }) => (
  <div
    className={cn(
      "animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl",
      className
    )}
  />
);

export const VideoSkeleton = ({ className }) => (
  <div
    className={cn(
      "animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg",
      className
    )}
  />
);

export const CircleProfileSkeleton = ({ className }) => (
  <div
    className={cn(
      "animate-pulse bg-gray-200 dark:bg-gray-700 rounded-full",
      className
    )}
  />
);

export const ImageSkeleton = ({ className }) => (
  <div
    className={cn(
      "animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800",
      className
    )}
  />
);
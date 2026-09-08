"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./loading-screen";

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  // Only show loading on the very first page load
  useEffect(() => {
    if (!hasLoadedOnce) {
      // Simulate initial page load time
      const timer = setTimeout(() => {
        setIsLoading(false);
        setHasLoadedOnce(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [hasLoadedOnce]);

  // For subsequent navigations, don't show loading unless explicitly needed
  // This can be extended in the future to listen for slow API calls or heavy data loading

  if (isLoading && !hasLoadedOnce) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}

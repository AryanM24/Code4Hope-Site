"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./loading-screen";

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Show loading on initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Show loading when navigating to a new page
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}

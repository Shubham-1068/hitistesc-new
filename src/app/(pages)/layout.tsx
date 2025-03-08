"use client";
import Blog from "@/components/Blog";
// import { AuthProvider } from "@/context/authContext";
// import AuthProvider from "@/context/AuthContext";
import { AuthProvider } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/ui/header/navbar";
import Footer from "@/components/ui/footer/footer";
import { Toaster } from "@/components/ui/toaster";
import { QueryProvider } from "@/lib/react-query/QueryProvider";
const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  // const [authStatus, setIsAuthenticated] = useState(false);
  // const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //   appwriteService
  //     .isLoggedIn()
  //     .then(setIsAuthenticated)
  //     .finally(() => setLoader(false));
  // }, []);

  return (
    <QueryProvider>
    <AuthProvider>
      <div className="overflow-x-hidden overflow-y-hidden">
        <Navbar />
        <main className=" relative z-0 overflow-x-hidden overflow-y-hidden h-full pattern text-white">
          {children}
        </main>
        <Toaster />
      </div>
    </AuthProvider>
    </QueryProvider>
  );
};

export default ProtectedLayout;

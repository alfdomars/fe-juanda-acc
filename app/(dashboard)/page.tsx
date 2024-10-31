"use client";
import React from "react";
import SomeComponent from "@/app/components/SomeComponent";

const HomePage: React.FC = () => {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Welcome to My Next.js App</h1>
      <SomeComponent />
    </main>
  );
};

export default HomePage;

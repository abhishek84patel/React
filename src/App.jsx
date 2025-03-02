import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet /> {/* This renders the nested routes */}
      </main>
      <Footer />
    </>
  );
}

export default App;

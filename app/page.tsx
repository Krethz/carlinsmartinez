"use client";

import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

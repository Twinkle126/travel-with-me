import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Recommend from "./Components/Recommend";
import ScrollTop from "./Components/ScrollTop";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

export default function App(){
  return (
    <div>
      <ScrollTop></ScrollTop>
      <Navbar>Hi</Navbar>
      <Hero></Hero>
      <Service></Service>
      <Recommend></Recommend>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}
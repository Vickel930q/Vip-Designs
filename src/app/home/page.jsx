"use client"
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import React from 'react';




  




export default function Homepage() {
  return (
    <>
    
     

      <div className="hero-bg">
       <Header/>
       <Hero/>
      </div>
     <Section/>
     <Newsletter/>
     <Footer/>
    </>
    
  );
}

"use client"
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import React from 'react';
import Carousel from "@/components/Carousel";




  // const images = [
  //   'https://img.freepik.com/free-psd/slipper-chair-isolated-transparent-background_191095-13677.jpg?t=st=1712090263~exp=1712093863~hmac=83c3979c4b3f624174dc1c2ad70201202c940a8729ea824ac645f5aa523ddca2&w=740',
  //   'https://img.freepik.com/free-psd/comfortable-modern-chair-isolated_176382-1214.jpg?w=740&t=st=1712090711~exp=1712091311~hmac=28aae13264e4063c02d0ed34f62401593f16f28c4e574a31907aa364c98b5fae',
  //   'https://img.freepik.com/free-psd/cantilever-chair-isolated-transparent-background_191095-12905.jpg?w=740&t=st=1712090844~exp=1712091444~hmac=0ded25d8f70ab0a8083860505711c7d218a17fadc1a7d26642272aafdc3eb2d3',
 
  //   // Add more image URLs as needed
  // ];





export default function Homepage() {
  return (
    <>
      <Head>
        
      </Head>

    {/* <div>
      <h1>Image Carousel</h1>
      <Carousel images={images} />
    </div> */}
    
     

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

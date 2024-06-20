import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'
import styles from './page.module.css'

export default function About() {
  return (
    <div>
      <div className={styles.abg}>
        <Header />
        <div className="hero">
          <div className="hero-text">
            <h1>About Us</h1>
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.content}>
          <h2>Who We Are?</h2>

          <p>
            Welcome to VIP DESIGNS, where we transform spaces into breathtaking havens of style, comfort, and sophistication. We specialize in crafting bespoke furniture pieces and providing exquisite interior design solutions tailored to elevate your living spaces to unparalleled levels of elegance.<br />

            At VIP DESIGNS, we understand that your home is a reflection of your personality and taste. That is why we strive to bring your vision to life with our unparalleled craftsmanship and attention to detail.<br /> 
            
            Whether you are seeking to revamp a single room or redesign your entire home, our team of experienced designers and artisans is dedicated to exceeding your expectations.<br />

            Our furniture collections are meticulously curated to offer both timeless classics and contemporary pieces that harmonize seamlessly with any aesthetic.<br /> 
            
            Each item is crafted with the finest materials and artisanal techniques, ensuring both durability and beauty that will withstand the test of time.<br />

            In addition to our exquisite furniture offerings, our talented interior designers work closely with clients to create personalized design schemes that capture the essence of their individual style preferences and functional needs.<br /> 
            
            From concept development to final execution, we guide you through every step of the design process, ensuring a result that is both stunning and functional.<br />

            At VIP DESIGNS, we believe that luxury should be accessible to all. That is why we offer competitive pricing without compromising on quality or design integrity.<br /> 
            
            Whether you are furnishing a cozy apartment or a sprawling estate, we have solutions to fit every budget and vision.<br />

            We invite you to explore our collections, unleash your creativity, and let VIP DESIGNS turn your dream space into a reality.<br /> 
            
            Experience the epitome of luxury living with VIP DESIGNS – where sophistication meets unparalleled craftsmanship.</p>
        </div>
      </div>






      <Footer />
    </div>
  )
}

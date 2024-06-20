/* eslint-disable react/jsx-no-undef */
"use client"
import Image from 'next/image'
import { GiShoppingCart } from "react-icons/gi";
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { RxAvatar } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";



export default function Header() {

  const [showNav, setShowNav] = useState(false)

  const handleMenu = () => {
    if (showNav) {
      setShowNav(false)
    }
    else {
      setShowNav(true)
    }
  }






  return (
    <div className='header'>
      <div className='logo-container'>
        <h1>VIP DESIGNS</h1>
      </div>

      <div className='navbar'>
        <Link className='nav-link' href="/home">Home</Link>
        <Link className='nav-link' href="/about">About Us</Link>
        <Link className='nav-link' href="/contact">Contact</Link>
        <Link className='nav-link' href="/faqs">FAQs</Link>
      </div>

      <div className="cartbtn">
        <Link className='nav-lin' href='/cart'><GiShoppingCart /></Link>
        <Link className='nav-lin' href='/sign'><RxAvatar /></Link>
      </div>

      <div className='btn menu-btn' onClick={() => setShowNav(!showNav)}>
        <Hamburger size={20} direction="right" duration={0.4} distance="lg" easing="ease-in" color='black' rounded />
        {/* {showNav ? <IoCloseSharp /> : <CiMenuBurger className='bb' />} */}
      </div>

      {/* <div className='btn menu-btn' onClick={handleMenu}>
        <IoCloseSharp />
      </div> */}
      {
        showNav && (
          <div className="mob">

            <div className='mobile-navbar'>
              <Link className='nav-links' href="/">Home</Link>
              <Link className='nav-links' href="/about">About Us</Link>
              <Link className='nav-links' href="/contact">Contact</Link>
              <Link className='nav-links' href="/faqs">FAQs</Link>

            </div>
          </div>
        )
      }








    </div>
  )
}

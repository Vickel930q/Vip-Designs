import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Find the service <br /> to fit your space.</h1>

        <div className="butt">
          <Link href="/contact">
            <button>Contact Us</button>
          </Link>

        </div>
      </div>

    </div>


  );
}

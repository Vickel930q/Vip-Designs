import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer-links">
            <div className="sb_footer-links-div">
              <h3>For Business</h3>
              <Link href={"/employer"}>
                <p>Employer</p>
              </Link>

              <Link href={"/employer"}>
                <p>Employer</p>
              </Link>

              <Link href={"/employer"}>
                <p>Employer</p>
              </Link>
            </div>

            <div className="sb_footer-links-div">
              <h3>Resources</h3>
              <Link href={"/Resource"}>
                <p>Resource Center</p>
              </Link>

              <Link href={"/Resource"}>
                <p>Resource Center</p>
              </Link>

              <Link href={"/Resource"}>
                <p>Resource Center</p>
              </Link>
            </div>

            <div className="sb_footer-links-div">
              <h3>Partners</h3>
              <Link href={"/Partners"}>
                <p>Partner</p>
              </Link>

              <Link href={"/Partners"}>
                <p>Partner</p>
              </Link>

              <Link href={"/Partners"}>
                <p>Partner</p>
              </Link>
            </div>
            <div className="sb_footer-links-div">
              <h3>Company</h3>
              <Link href={"/Company"}>
                <p>Company</p>
              </Link>

              <Link href={"/Company"}>
                <p>Company</p>
              </Link>
            </div>
          </div>
        </div>
        <br></br>
        
        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
               <p>
                 &#169; VIP DESIGNS INC. All rights reserved.
               </p>
            </div>
            
            <div className="sb_footer-below-links">
                <Link href={'/term'}><div><p>Terms & Condition</p></div></Link>
                <Link href={'/privacy'}><div><p>Privacy</p></div></Link>
                <Link href={'/seurity'}><div><p>Security</p></div></Link>
                <Link href={'/cookies'}><div><p>cookies</p></div></Link>
            </div>
        </div>

      </div>
  );
}

import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { GrInstall } from "react-icons/gr";
import { MdOutlineHighQuality } from "react-icons/md";
import Link from "next/link";
import React from "react";

export default function Section() {
    return (
        <div>
            <div className="wrapper">
                <div className="head">
                    <h1>What We Do </h1>
                </div>
                <div class="image">
                    <Image
                        src="https://img.freepik.com/free-photo/top-view-architectural-plan-desk_23-2148269870.jpg?t=st=1711324874~exp=1711328474~hmac=713482babeddeb769fde5ecc734d9c41e39c06ad76696854c3cdde4ef105a7c2&w=740"
                        width={300}
                        height={200}
                        alt="Space"
                    />
                    <div class="cont">
                        <Link href={"#"}>
                            <p className="p">SPACE PALNNING</p>
                        </Link>
                    </div>
                </div>

                <div class="image">
                    <Image
                        src="https://img.freepik.com/free-photo/full-shot-men-wearing-equipment_23-2149345538.jpg?t=st=1711321621~exp=1711325221~hmac=c38a427ace8dddef840f8185bcf895c8d06d6fcd1922102e6a145c3310cde396&w=740"
                        width={300}
                        height={200}
                        alt="Space"
                    />
                    <div class="cont">
                        <Link href={"#"}>
                            <p className="p">SERVICE APARTMENT</p>
                        </Link>
                    </div>
                </div>

                <div class="image">
                    <Image
                        src="https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?t=st=1711322308~exp=1711325908~hmac=a3e6e1381231b555947d11d4861da049a87fde4867885916a3cf13df9dd152ad&w=740"
                        width={300}
                        height={200}
                        alt="Space"
                    />
                    <div class="cont">
                        <Link href='/furniture'>
                            <p className="p">FURNITURE LAYOUT</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="remark">
                <div className="remark-1">
                    <h5>Buyers trust us</h5>
                </div>
                <div className="remark-2">
                    <h1>
                        Our Strategy Is To Provide Our
                        <br /> Customers With Quality Products/Service
                    </h1>
                </div>
                <div className="remark-3">
                    <p className="t">
                        To VIP DESIGHS, Luxury and Comfort is the hallmark of all our
                        products; from our High-Quality Sofa to our
                        <br />
                        contemporary Dining set to our uniquely designed tables and chairs,
                        we infuse the hallmark of quality and comfort as
                        <br />
                        essential details when crafting any of our products.
                    </p>
                </div>

                <div className="remark-3">
                    <p className="t">
                        Our attention to detail ensures that when you purchase a piece of
                        furniture from VIP DESIGHS, it will <br />
                        provide superior value and comfort. Our products are designed with
                        safety in mind as well, creating pieces
                        <br />
                        that are long-lasting and safe for all family members. We strive to
                        ensure our customers enjoy their <br />
                        experience with us by providing the highest quality product and
                        unbeatable customer service whenever <br />
                        you buy a VIP DESIGHS Product.
                    </p>
                </div>
            </div>

            <div className="sec3">
                <div className="icon">
                    <TbTruckDelivery/>
                    <h2>Fast Delivery</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>
                        Modi dolorem deserunt ipsa commodi ad totam at
                        vero? Eius,<br></br>
                        
                    </p>
                </div>

                <div className="icon">
                    <MdOutlineHighQuality />
                    <h2>Best Quality</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>
                        Modi dolorem deserunt ipsa commodi ad totam at
                        vero? Eius,<br></br>
                       
                    </p>
                </div>

                <div className="icon">
                    <GrInstall />
                    <h2>Free Installation</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>
                        Modi dolorem deserunt ipsa commodi ad totam at
                        vero? Eius,<br></br>
                    </p>
                </div>
            </div>
        </div>
    );
}

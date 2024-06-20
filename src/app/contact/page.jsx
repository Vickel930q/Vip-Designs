import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import styles from './page.module.css';


export default function Contact() {
    return (
        <div>

            <div className={styles.hbg}>
                <Header />
                <div className="hero">
                    <div className={styles.herotext}>
                        <h1>Contact Us</h1>
                        {/* <div>
                        <Link href="\">back</Link>
                        <div></div>
                    </div> */}
                    </div>
                </div>
            </div>


            {/* Contact section */}

            <div>
                <div className={styles.contactpages}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.collg7}>
                                <div className={styles.contactform}>
                                    <div className={styles.row}>
                                        <div className={styles.col6}>
                                            <div className={styles.formgroup}>
                                                <input className={styles.checkform} type="text" placeholder="First Name*:"></input>
                                                <span><i className={styles.ticheck}></i></span>
                                            </div>
                                        </div>
                                        <div className={styles.colmd6}>
                                            <div className={styles.formgroup}>
                                                <input className={styles.checkform} type="text" placeholder="Last Name*:"></input>
                                                <span><i className="ti-check"></i></span>
                                            </div>
                                        </div>
                                        <div className={styles.colmd6}>
                                            <div className={styles.formgroup}>
                                                <input className={styles.checkform} type="text" placeholder="Email Adress*:"></input>
                                                <span><i className="ti-check"></i></span>
                                            </div>
                                        </div>
                                        <div className={styles.colmd6}>
                                            <div className={styles.formgroup}>
                                                <input className={styles.checkform} type="text" placeholder="Phone Number*:"></input>
                                                <span><i className="ti-check"></i></span>
                                            </div>
                                        </div>
                                        <div className={styles.colmd12}>
                                            <div className={styles.formgroup}>
                                                <textarea placeholder="Ask us about your question!"></textarea>
                                            </div>
                                            <button className={styles.sitebtnsbgradientsmt4}> Submit form</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}


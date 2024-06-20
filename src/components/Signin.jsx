"use client";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import styles from "./Signin.module.css"; // Import the CSS module
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import WarningMessage from "react";


function SignIn() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
        setFormData({ yourname: "", email: "", password: "", confirmpassword: "" });
    };

    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className={styles.container}>

            <div className={styles.img}>
                <Image
                    src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"
                    alt="sign"
                    width={400}
                    height={450}
                />
                <div className={styles.log}>
                    <Link href="/signin">
                        Create New Account
                    </Link>
                </div>

            </div>
            
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Sign In</h2>


                <div className={styles.formgroup}>
                    <label>
                        <MdEmail />
                    </label>
                    <input
                        className={styles.checkform}
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formgroup}>
                    <label>
                        <RiLockPasswordFill />
                    </label>
                    <input
                        className={styles.checkform}
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.terms}>
                    <input
                        type="checkbox"
                        id="terms"
                        value="agreee"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <label for="terms">
                        Remember me.
                    </label>
                    {/* {!isChecked && (
                        <WarningMessage message="Please check the box to continue." />
                    )} */}
                </div>
                <button type="submit"><Link href='/home'>Sign In</Link></button>
                <div className={styles.log2}>
                <Link href="/sign">Create an account</Link>
            </div>
                <section className={styles.options}>
                    <p>sign  in with:</p>
                    <div className={styles.socialmediaicons}>
                        <FaGoogle />
                        <FaFacebook />
                        <BsInstagram />
                        <FaXTwitter />
                    </div>
                </section>
            </form>

        </div>
    );
}




export default SignIn;

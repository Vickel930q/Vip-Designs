"use client";
import React, { useState } from "react";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BsArrowDown } from "react-icons/bs";
import styles from './page.module.css';


const FAQs = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "What types of furniture does VIP DESIGNS offer?",
            answer:
                "VIP DESIGNS offers a wide range of furniture, including sofas, chairs, tables, beds, storage solutions, and accessories, all meticulously crafted to elevate your living spaces.",
        },
        {
            question: "Can I customize furniture to suit my specific preferences?",
            answer:
                "Absolutely! VIP DESIGNS specializes in bespoke furniture, allowing you to tailor pieces to your exact specifications, from choice of materials to dimensions and finishes.",
        },
        {
            question: " How long does it take to receive customized furniture orders?",
            answer:
                "The timeline for customized furniture orders varies depending on the complexity of the design and availability of materials. Our team will provide you with a timeline estimate upon order confirmation.",
        },
        {
            question: " Does VIP DESIGNS offer interior design services?",
            answer:
                "Yes, we offer comprehensive interior design services tailored to your unique style and requirements. Our experienced designers will work closely with you to bring your vision to life.",
        },
        {
            question: "What is the process for working with VIP DESIGNS' interior designers?",
            answer:
                "The process begins with an initial consultation to discuss your project goals, preferences, and budget. From there, our designers will develop a concept and present design proposals for your approval before proceeding with implementation.",
        },
        {
            question: "Can VIP DESIGNS assist with commercial interior design projects?",
            answer:
                "Yes, we have extensive experience in commercial interior design, catering to a diverse range of industries, including hospitality, retail, and corporate spaces.",
        },
        {
            question: " Does VIP DESIGNS offer delivery and installation services?",
            answer:
                "Yes, we provide delivery and professional installation services to ensure your furniture is set up and arranged to your satisfaction.",
        },
        {
            question: "What materials does VIP DESIGNS use for furniture construction?",
            answer:
                "We use a variety of high-quality materials, including solid wood, premium upholstery fabrics, leather, metal, and glass, sourced from reputable suppliers known for their durability and sustainability.",
        },
        {
            question: " Can I visit a VIP DESIGNS showroom to view furniture collections in person?",
            answer:
                "Yes, we welcome you to visit our showroom to explore our furniture collections firsthand and discuss your design needs with our knowledgeable staff.",
        },
        {
            question: " Does VIP DESIGNS offer after-sales support and warranties?",
            answer:
                "Absolutely! We stand behind the quality of our products and offer warranties on all furniture purchases. Additionally, our customer service team is available to assist you with any questions or concerns you may have after your purchase.",
        },
    ]);

    const [selectedFaq, setSelectedFaq] = useState(null);

    const toggleFaq = (index) => {
        if (selectedFaq === index) {
            setSelectedFaq(null);
        } else {
            setSelectedFaq(index);
        }
    };

    return (
        <div>
            <div className={styles.faqsbg}>
                <Header />
                <div className="hero">
                    <div className="hero-text">
                        <h1>FAQs</h1>
                    </div>
                </div>
            </div>






            <div className="faqs">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq ${selectedFaq === index ? "active" : ""}`}
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="question">{faq.question} <BsArrowDown /></div>
                        <div
                            className={`answer ${selectedFaq === index ? "open" : ""}`}
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default FAQs;


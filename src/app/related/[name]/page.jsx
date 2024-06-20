"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import GetStartedPage from '@/components/Get'

const persons = {
    obed: [
        {
            name: 'Grey Sofa',
            description: "lorem"
        }
    ],
    raph: [
        {
            name: 2,
            description: "raph is a WTF , lorem lorem lorem lorem"
        },
        {
            desc2: "Raph is still Wtf"
        }
    ],
    tunde: [
        {
            name: 11,
            description: "tunde is a seasoned dev, lorem lorem lorem lorem"
        }
    ],
    vic: [
        {
            name: 21,
            description: "vic is a seasoned dev, lorem lorem lorem lorem"
        }
    ],
}



export default function Name({ params }) {
    // desstructure params.name and store the result in a variable
    let personName = params.name
    console.log(personName)

    // let datas=persons['tunde'] which is still the same as datas=person.params.name
    let datas = persons[personName]
    console.log(params)
    return (
        <div>
            <Header />
            <GetStartedPage/>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.mimg}>
                        <Image width={290} height={290} alt='obed' src={"https://img.freepik.com/free-photo/grey-armchair-lamp_1203-1510.jpg?w=360&t=st=1712195519~exp=1712196119~hmac=d44efec6ed2863c3ef3ce7fecae3d3bfb78f9327e925800ac672ae9dd5415af9"} />
                    </div>

                    <div className={styles.sideimg}>
                        <Image width={50} height={65} alt='obed' src={"https://img.freepik.com/free-photo/grey-armchair-lamp_1203-1510.jpg?w=360&t=st=1712195519~exp=1712196119~hmac=d44efec6ed2863c3ef3ce7fecae3d3bfb78f9327e925800ac672ae9dd5415af9"} />
                        <Image width={50} height={65} alt='obed' src={"https://img.freepik.com/free-photo/grey-armchair-lamp_1203-1510.jpg?w=360&t=st=1712195519~exp=1712196119~hmac=d44efec6ed2863c3ef3ce7fecae3d3bfb78f9327e925800ac672ae9dd5415af9"} />
                        <Image width={50} height={65} alt='obed' src={"https://img.freepik.com/free-photo/grey-armchair-lamp_1203-1510.jpg?w=360&t=st=1712195519~exp=1712196119~hmac=d44efec6ed2863c3ef3ce7fecae3d3bfb78f9327e925800ac672ae9dd5415af9"} />
                        <Image width={50} height={65} alt='obed' src={"https://img.freepik.com/free-photo/grey-armchair-lamp_1203-1510.jpg?w=360&t=st=1712195519~exp=1712196119~hmac=d44efec6ed2863c3ef3ce7fecae3d3bfb78f9327e925800ac672ae9dd5415af9"} />

                    </div>
                    <div className={styles.details}>
                        <h3>{datas[0].name}</h3>
                        <p>Description:{datas[0].description}</p>
                       
                    </div>

                </div>
                <div className={styles.details2}>
                    <h3>{datas[0].name}</h3>
                    <p>{datas[0].description}</p>

                </div>
            </div>






            <Footer />
        </div>
    );
};

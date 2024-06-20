import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Related.module.css'
export default function Related() {
  return (
    <div>
      <div className={styles.h1}>
        <h1>Related Products</h1>

      </div>
      <div className={styles.container}>

        <div className={styles.profile}>
          <Image width={230} height={230} alt='grey sofa' src={"https://img.freepik.com/free-photo/grey-armchair-lamp_1203-1510.jpg?w=360&t=st=1712195519~exp=1712196119~hmac=d44efec6ed2863c3ef3ce7fecae3d3bfb78f9327e925800ac672ae9dd5415af9"} />
          <p>Grey Sofa</p>
          <div className={styles.cont}>
            <Link href="/related/obed"> <button>see more</button></Link>
          </div>
        </div>
        <div className={styles.profile}>
          <Image width={230} height={230} alt='grey sofa' src={"https://img.freepik.com/free-photo/grey-armchair-lamp_1203-1510.jpg?w=360&t=st=1712195519~exp=1712196119~hmac=d44efec6ed2863c3ef3ce7fecae3d3bfb78f9327e925800ac672ae9dd5415af9"} />
          <p>Grey Sofa</p>
          <div className={styles.cont}>
            <Link href="/related/obed"> <button>see more</button></Link>
          </div>
        </div>
        <div className={styles.profile}>
          <Image width={230} height={230} alt='grey sofa' src={"https://img.freepik.com/free-photo/grey-armchair-lamp_1203-1510.jpg?w=360&t=st=1712195519~exp=1712196119~hmac=d44efec6ed2863c3ef3ce7fecae3d3bfb78f9327e925800ac672ae9dd5415af9"} />
          <p>Grey Sofa</p>
          <div className={styles.cont}>
            <Link href="/related/obed"> <button>see more</button></Link>
          </div>
        </div>
        <div className={styles.profile}>
          <Image width={230} height={230} alt='grey sofa' src={"https://img.freepik.com/free-photo/grey-armchair-lamp_1203-1510.jpg?w=360&t=st=1712195519~exp=1712196119~hmac=d44efec6ed2863c3ef3ce7fecae3d3bfb78f9327e925800ac672ae9dd5415af9"} />
          <p>Grey Sofa</p>
          <div className={styles.cont}>
            <Link href="/related/obed"> <button>see more</button></Link>
          </div>
        </div>


      </div>

    </div>
  )
}

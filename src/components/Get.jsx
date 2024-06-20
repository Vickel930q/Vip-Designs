import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
import styles from "./Get.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Autoplay } from "swiper";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
AOS.init();

// SwiperCore.use([Autoplay]);
function GetStartedPage() {
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
            const interval = setInterval(() => {
                if (swiper.isEnd) {
                    swiper.slideTo(0);
                } else {
                    swiper.slideNext();
                }
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [swiper]);
   
    return (
        <div>
            <div className={styles.getStartedPage}>
                <Swiper
                    onSwiper={setSwiper}
                    className={styles.swiperContainer}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <div className={styles.tex}>
                                <h2>We Bring</h2>


                            </div>
                            <Image
                                src="https://img.freepik.com/free-vector/chair-realistic-illustration_1284-9507.jpg?t=st=1712101722~exp=1712105322~hmac=7c755e5f994e180f4b9b02a4faec3ce8e0c5932948d8901090c22277eb56c240&w=740"
                                alt="chair"
                                width={200}
                                height={200}
                            />


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <h2>The Best</h2>
                            <Image
                                src="https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1712093315~exp=1712096915~hmac=8c5c85736af2061ec1e5c6f119187019dcf1788c69327367caef76d495e65556&w=740"
                                alt="chair"
                                width={200}
                                height={200}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <h2>Furniture  to<br /> Your Doorstep!</h2>
                            <Image
                                src="https://img.freepik.com/free-psd/two-seater-gray-sofa-with-two-cushions-isolated_176382-98.jpg?t=st=1712101938~exp=1712105538~hmac=ca4b96aa2775e5b9f5ae17726667750410b31124d9c9d902c47140071babf0ae&w=826"
                                alt="chair"
                                width={450}
                                height={200}
                            />
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>
        </div>
    );
}

export default GetStartedPage;

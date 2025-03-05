/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import SuggestedElement from "../suggestedElement/SuggestedElement";
import { useIntersection } from "react-use";
import styles from "./CuratedProductItems.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import "./CuratedProductItems.css";

const CuratedProductItems = ({ suggestions }) => {
  const ref = useRef(null);
  const swiperRef = useRef(null);

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  });

  useEffect(() => {
    swiperRef.current?.update();
    swiperRef.current?.slideTo(0, 0);
  }, [suggestions]);

  return (
    <div ref={ref} className={styles.curated_product_container}>
      <button
        className={`${"swiper-button-prev"} ${styles.slide_button}`}
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        slidesPerView={3.7}
        modules={[Navigation, Scrollbar]}
        scrollbar={{ draggable: true, dragClass: "swiper-scrollbar-drag" }}
      >
        {suggestions.map((suggestion, index) => (
          <SwiperSlide key={suggestion.id}>
            <SuggestedElement
              key={suggestion.id}
              suggestion={suggestion}
              index={index}
              intersection={intersection}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`${"swiper-button-next"} ${styles.slide_button}`}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
};

export default CuratedProductItems;

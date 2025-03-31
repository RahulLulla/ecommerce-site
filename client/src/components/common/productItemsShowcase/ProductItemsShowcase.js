/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import ProductElement from "../productElement/ProductElement";
import { useIntersection } from "react-use";
import styles from "./ProductItemsShowcase.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import "./ProductItemsShowcase.css";

const ProductItemsShowcase = ({ products }) => {
  const ref = useRef(null);
  const swiperRef = useRef(null);
  const [blurStyle, setBlurStyle] = useState();

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  });

  useEffect(() => {
    swiperRef.current?.update();
    swiperRef.current?.slideTo(0, 0);
    setBlurStyle(styles.container_blur_style);
    setTimeout(() => {
      setBlurStyle("");
    }, 200);
  }, [products]);

  return (
    <div ref={ref} className={styles.product_items_container}>
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
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <div className={`${styles.product_items_row} ${blurStyle}`}>
              <ProductElement
                product={product}
                index={index}
                intersection={intersection}
              />
            </div>
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

export default ProductItemsShowcase;

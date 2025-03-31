import React, { useEffect, useRef, useState } from "react";
import styles from "./ProductGallery.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import { useSelector } from "react-redux";
import { getCurrentProductImages } from "../../../features/currentProduct/currentProductSlice";

const ProductGallery = () => {
  const productImages = useSelector(getCurrentProductImages);
  const swiperRef = useRef(null);
  const [selected, setSelected] = useState(0);

  const handleThumbnailChange = (index) => {
    setSelected(index);
    swiperRef.current.slideTo(index, 500, false);
  };

  const imageDisplay = productImages.map((image, i) => {
    const style = selected === i ? styles.product_thumbnail_button_focused : "";
    const buttonStyle = `${styles.product_thumbnail_button} ${style} `;

    return (
      <button key={"thumbnail_" + i} className={buttonStyle}>
        <img
          alt={"product_thumbnail_" + i}
          src={image}
          className={styles.product_thumbnail}
          onClick={() => handleThumbnailChange(i)}
        />
      </button>
    );
  });

  const handlePrevButton = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextButton = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (e) => setSelected(e.realIndex);

  useEffect(() => {
    swiperRef.current?.update();
    swiperRef.current?.slideTo(0, 0);
  }, []);

  return (
    <div className={styles.product_gallery}>
      <div className={styles.product_thumbnail_container}>{imageDisplay}</div>
      <div className={styles.product_image_wrapper}>
        <Swiper
          onSlideChange={handleSlideChange}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Scrollbar]}
        >
          {productImages.map((img, i) => (
            <SwiperSlide key={"slide" + i}>
              <img src={img} className={styles.product_image} />
            </SwiperSlide>
          ))}
          <button
            className={`${"swiper-button-prev"} ${styles.slide_button}`}
            onClick={handlePrevButton}
          />
          <button
            className={`${"swiper-button-next"} ${styles.slide_button}`}
            onClick={handleNextButton}
          />
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGallery;

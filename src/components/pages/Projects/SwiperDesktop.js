import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from '../../../res/js/projectsData'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperDesktop = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([...projectsData]);
  }, []);

  return (
    <Swiper
      id={"swiper-wrapper"}
      slidesPerView={1.8}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 700,
        modifier: 1,
        slideShadows: false,
        scale: 1,
      }}
      spaceBetween={100}
      pagination={{
        type: "bullets",
        clickable: true,
        dynamicBullets: true,
      }}
      initialSlide={1}
      onClick={(swiper) => swiper.slideTo(swiper.clickedIndex)}
    >
      {projects.map((x, i) => {
        return (
          <SwiperSlide key={`slide-${i}`}>
            <ProjectCard project={x} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperDesktop;

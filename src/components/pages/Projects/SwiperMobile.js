import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from '../../../res/js/projectsData'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperDesktop = (props) => {
  const [projectsMobile, setProjectsMobile] = useState([])

    useEffect(() => {
        const projectsMobile = projectsData.reduce((rows, key, index) => { 
            return (index % 2 === 0 ? rows.push([key]) 
              : rows[rows.length-1].push(key)) && rows;
        }, []);
        setProjectsMobile(projectsMobile)
    }, [])

  return (
    <Swiper
      id="swiper-wrapper-mobile"
      slidesPerView={1}
      pagination={{
        type: "bullets",
        clickable: true,
        dynamicBullets: true,
      }}
      spaceBetween={300}
    >
      {projectsMobile &&
        projectsMobile.map((x, i) => {
          return (
            <SwiperSlide key={`slide-${i}`}>
              <ProjectCard project={x[0]} />
              {x.length > 1 && <ProjectCard project={x[1]} />}
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default SwiperDesktop;

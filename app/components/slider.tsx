"use client";
import { Container } from "@mui/material";
import React from "react";
import Slider from "react-slick";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    speed: 500,
    variableWidth: true,
    dots: true,
  };
  return (
    <Container maxWidth="xl" sx={{ mb: 10 }}>
      <div className="slider-container mt-20 ">
        <Slider {...settings}>
          <div className="dd w-full">
            <img
              src="https://pizzahouse.ua/_next/image?url=https%3A%2F%2Fpizzahouse.ua%2Fmedia%2F6535%2Fconversions%2F%D0%B2%D0%B8%D0%BF%D1%83%D1%81%D0%BA-%D1%81%D0%B0%D0%B9%D1%82--webp.png&w=1920&q=75"
              alt=""
              className=""
            />
          </div>
          <div className="dd w-full">
            <img
              src="https://pizzahouse.ua/_next/image?url=https%3A%2F%2Fpizzahouse.ua%2Fmedia%2F5401%2Fconversions%2F%D1%81%D0%B0%D0%B9%D1%82-%D0%B1%D0%BE%D0%BD%D1%83%D1%81%D0%B8-webp.png&w=1920&q=75"
              alt=""
              className=""
            />
          </div>
          <div className="dd w-full">
            <img
              src="https://pizzahouse.ua/_next/image?url=https%3A%2F%2Fpizzahouse.ua%2Fmedia%2F6529%2Fconversions%2F%D1%81%D0%B0%D0%B9%D1%82--(2)-webp.png&w=1920&q=75"
              alt=""
              className=""
            />
          </div>
        </Slider>
      </div>
    </Container>
  );
}

export default CenterMode;

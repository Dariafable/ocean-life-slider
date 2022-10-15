import React from 'react';
import { Carousel } from 'react-bootstrap';

import turtle from '../assets/turtle.jpg';
import reefs1 from '../assets/reefs1.jpg';
import jellyfish1 from '../assets/jellyfish1.jpg';
import star from '../assets/star.jpg';
import gloomyTurtle from '../assets/gloomyTurtle.jpg';

const HeroSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img src={turtle} alt='' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={reefs1} alt='' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={jellyfish1} alt='' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={star} alt='' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={gloomyTurtle} alt='' />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeroSlider;

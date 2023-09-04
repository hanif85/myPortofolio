import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import netraAndroid from '../../images/NetraAndroid.png'
import webhomePage from "../../images/web-homepage.png"
import netrahardware from "../../images/mobil asli_samping.png"
import modbusESP from "../../images/ESP GUI for modbus.png"
import pos from "../../images/Pos.png"
import modbusGUI from "../../images/Modbus monitoring.png"
let data = [
    {
        img : netraAndroid,
        disc : "Netra Android app for depth detector"
    },
    {
        img : webhomePage,
        disc : "Web home page Netra"
    },
    {
        img : netrahardware,
        disc : "Netra hardware"
    },
    {
        img : modbusESP,
        disc : "GUI for modbus with ESP32 and QT/QML"
    },
    {
        img : pos,
        disc : "POS with features Feature-rich system with networked, multi-price, categories, suppliers, user permissions, databases, reports, margin calculation, customer management, and more."
    },
    {
      img : modbusGUI,
      disc : "MODbusGUI is cross-platform GUI software allows polling devices  using various data transfer protocols by request-responce type."
  }

];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`
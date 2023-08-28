import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

// Replace 'schools' with your actual variable or array containing school data
const schools = [
  {
    img_url: 'https://rekammedis.sv.ugm.ac.id/wp-content/uploads/sites/780/2020/10/Logo-Tengah-Stack-Up-1-510x510.jpg',
    name: "Master of Engineering",
    description: "Magister of Electrical Engineering Departement of Electrical Engineering and Information Technology ",
  },
  {
    img_url: 'https://rekammedis.sv.ugm.ac.id/wp-content/uploads/sites/780/2020/10/Logo-Tengah-Stack-Up-1-510x510.jpg',
    name: "Bachelor of Engineering",
    description: "Magister of Electrical Engineering Departement of Electrical Engineering and Information Technology.",
  },
  {
    img_url: 'https://mtglobalindo.co.id/wp-content/uploads/2018/04/Logo-undip-Universitas-Diponegoro.png',
    name: "Diploma",
    description: "Instrumentation and electronics Department of Sciences",
  },
  
];

var settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}

const Schools = () => {
    const arrowRef = useRef(null);
    let schoolDisc = "";
    schoolDisc = schools.map((item, i) => (
        <SchoolSlider item={item} key={i}/>
    ));

    return (
        <Container id='school'>
        <Slide direction="left">
            <span className="green">Education</span>
            <h1>History</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {schoolDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  );
}

// Replace 'SchoolSlider' with your actual component that renders school data
const SchoolSlider = ({ item }) => {
  return (
    <div>
       <img src={item.img_url} alt={item.name} style={{ width: '50%', height: 'auto' }} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
}

export default Schools;
const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`

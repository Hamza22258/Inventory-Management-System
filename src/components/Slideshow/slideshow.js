
import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SimpleImageSlider from "react-simple-image-slider";
 import Item from "./image_data"


 
const images = [
   {url:"images/clothes.jpg"},
   {url:"images/furniture.jpg"},
   {url:"images/mobiles.jpg"},
  {url:"images/instruments.jpg"},
  {url:"images/accessories.jpg"}
];


class Items extends Component {
    render() {
        return (
            <div className="slide-container">
                <Slide>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${images[0]})`}}>
                        <img src="images/clothes.jpg" alt="Flowers in Chania"></img>
                        <span>Clothes</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${images[1]})`}}>
                        <span>Furniture</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${images[2]})`}}>
                        <span>Mobile</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${images[3]})`}}>
                        <span>Instruments</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${images[4]})`}}>
                        <span>Accessories</span>
                        </div>
                    </div>
                </Slide>
            </div>
        );
    }
}


export default Items;

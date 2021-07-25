import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SimpleImageSlider from "react-simple-image-slider";
function  Item() {
  const IMAGES = [
    {
      src:
        "https://furniturehub.pk/wp-content/uploads/2020/07/IMG-20200106-WA0077.jpg",
      thumbnail:
        "https://furniturehub.pk/wp-content/uploads/2020/07/IMG-20200106-WA0077.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 200,
      isSelected: true,
      caption: "Luxury Beds",
      tags: [{ value: "Beds", title: "Luxury" }],
    },
    {
      src:
        "https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682&w=678&h=381",
      thumbnail:
        "https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682&w=678&h=381",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Shoes", title: "Shoes" }],
      caption: "Best Shoes",
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Pencils", title: "Shoes" }],
      caption: "The best Quality Pencils",
    },
    {
      src: "https://images-na.ssl-images-amazon.com/images/I/41xiy2xaOFL.jpg",
      thumbnail:
        "https://images-na.ssl-images-amazon.com/images/I/41xiy2xaOFL.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 150,
      tags: [{ value: "Shoes", title: "Shoes" }],
      caption: "Best Shoes",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdtX-gMiR6_lQDek2zn97HNuWioeWUsc8uw&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdtX-gMiR6_lQDek2zn97HNuWioeWUsc8uw&usqp=CAU",
      thumbnailWidth: 200,
      thumbnailHeight: 150,
      tags: [{ value: "Shoes", title: "Shoes" }],
      caption: "Best Shoes",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VfLH3uDixu4Z_KJeJ06DdOEm_E5U3J08og&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VfLH3uDixu4Z_KJeJ06DdOEm_E5U3J08og&usqp=CAU",
      thumbnailWidth: 200,
      thumbnailHeight: 150,
      tags: [{ value: "Shoes", title: "Shoes" }],
      caption: "Best Shoes",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BJdGaSjeeUGVLLoeeqXNbw1ZrMMLRqhExw&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BJdGaSjeeUGVLLoeeqXNbw1ZrMMLRqhExw&usqp=CAUU",
      thumbnailWidth: 200,
      thumbnailHeight: 140,
      tags: [{ value: "Shoes", title: "Shoes" }],
      caption: "Best Shoes",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSSxdujfN3gmqA3p_ldmp21Q3bnDpYDoaeA&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSSxdujfN3gmqA3p_ldmp21Q3bnDpYDoaeA&usqp=CAU",
      thumbnailWidth: 200,
      thumbnailHeight: 170,
      tags: [{ value: "Sofa", title: "Sofa" }],
      caption: "Best Sofa in market",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiYDwIp17iUDO7Oi2LLf7V2h-8i1uFx0V6g&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiYDwIp17iUDO7Oi2LLf7V2h-8i1uFx0V6g&usqp=CAU",
      thumbnailWidth: 200,
      thumbnailHeight: 100,
      tags: [{ value: "Sofa", title: "Sofa" }],
      caption: "Best Sofa in market",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYkwfFj2c9tnngvmECVUa9c4fmrzBusiHzA&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYkwfFj2c9tnngvmECVUa9c4fmrzBusiHzA&usqp=CAU",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      tags: [{ value: "Sofa", title: "Sofa" }],
      caption: "Best Sofa in market",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH07TaVN46EG-kPsM0KORvT6SJ8yjLeyPaKQ&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH07TaVN46EG-kPsM0KORvT6SJ8yjLeyPaKQ&usqp=CAU",
      thumbnailWidth: 200,
      thumbnailHeight: 100,
      tags: [{ value: "Sofa", title: "Sofa" }],
      caption: "Best Sofa in market",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeQxkTBEAJtHbnlfiPJHEcoX7-8wZhg9kIw&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeQxkTBEAJtHbnlfiPJHEcoX7-8wZhg9kIw&usqp=CAU",
      thumbnailWidth: 200,
      thumbnailHeight: 100,
      tags: [{ value: "Sofa", title: "Sofa" }],
      caption: "Best Sofa in market",
    },
  ];
return (
  <div>
 <div className="each-slide"></div>
      <Slide images={IMAGES} />
      
      </div>
     
  );
}

export default  Item;
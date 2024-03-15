import React, { useState, useRef, useEffect, useParams } from "react";
import "./SingleHotelPage.css";
import DetailThump from "./DetailThump";
import { HotelCoverData } from "./../HotelCoverData";

const SingleHotelPage = () => {
  const { productId } = useParams();
  const product = HotelCoverData.find((product) => product.id === productId);
  const { title, src, content, price } = product;
  const [index, setIndex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  useEffect(() => {
    myRef.current.children[index].className = "active";
  }, [index]);

  return (
    <div className="app">
      <div className="details">
        <div className="big-img">
          <img src={src[index]} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{title}</h2>
            <span>${price}</span>
          </div>

          <p>{content}</p>

          <DetailThump images={src} tab={handleTab} myRef={myRef} />
          <button className="cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleHotelPage;

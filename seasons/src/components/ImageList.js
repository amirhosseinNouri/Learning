import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  return (
    <div className="list">
      {images.map((item) => {
        const url = item.urls.regular;
        return (
          <ImageCard
            desc={item.description}
            image={url}
            key={item.id}
          ></ImageCard>
        );
      })}
    </div>
  );
};
export default ImageList;

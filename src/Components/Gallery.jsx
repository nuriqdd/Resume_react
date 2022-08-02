import React from "react";
import ".//Gallery.css";
const Gallery = () => {
  return (
    <div className="gal">
      <iframe
        className="video"
        style={{ textAlign: "center", marginBottom: "5px" }}
        width="600"
        height="500"
        src="https://www.youtube.com/embed/XEjLoHdbVeE"
        title="ABBA - Gimme! Gimme! Gimme! (A Man After Midnight)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img
        src="https://avatars.mds.yandex.net/i?id=6910554de7b69cd33a4115d4f4f765c0-5242458-images-thumbs&n=13"
        alt=""
        width="100%"
        height="100%"
      />
      <img
        width="100%"
        height="100%"
        src="https://miro.medium.com/max/1040/1*9Ba_DIP5vyXPhSZp4Vh5yw.jpeg"
      />
      <img
        width="100%"
        height="100%"
        src="https://www.factroom.ru/wp-content/uploads/2020/08/2-16.jpg"
      />
    </div>
  );
};

export default Gallery;

import React from "react";

const Welcome = () => {
  return (
    <div
      className="fon"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1 className="title">Hello!</h1>
      <img
        style={{ marginTop: "80px", marginLeft: "1px" }}
        src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612484991_183-p-oboi-na-telefon-fon-serii-vertikalnie-223.jpg"
        alt=""
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default Welcome;

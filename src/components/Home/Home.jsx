import React from "react";
import videoHomePage from "../../assets/video-hompage.mp4";
import "./Home.scss";
import { Button } from "react-bootstrap";
function Home() {
  return (
    <div className="homepage-container">
      <div className="content-homepage">
        <h1 className="heading">
          Stand out from the crowd and connect with your customers
        </h1>
        <p className="desc">
          Easy, stylish forms that make data collection fun for everyone
        </p>
        <Button className="btn" variant="black">
          Get started — it’s free
        </Button>
      </div>
      <video
        autoPlay
        muted
        poster="https://images.pexels.com/videos/4377755/pexels-photo-4377755.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=630&amp;w=1200"
      >
        <source type="video/mp4" src={videoHomePage} />
      </video>
    </div>
  );
}

export default Home;

import React from "react";
import Profile from "../assets/image/image.png";
import "../assets/home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="about">
        <p>
          I am <span>mesfin ayele</span> a passionate and detail-oriented web
          developer with a strong focus on building clean, efficient, and
          user-friendly applications. With a solid foundation in modern web
          technologies and a constant drive to learn, I enjoy turning ideas into
          functional solutions that create real impact. Beyond coding, I value
          collaboration, problem-solving, and continuous growth to deliver
          meaningful results.
        </p>
      </div>
      <div className="image">
        <img src={Profile} alt="profile" />
      </div>
    </div>
  );
}

export default Home;

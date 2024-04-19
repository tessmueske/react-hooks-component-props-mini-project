import React from "react";
import blogData from "../data/blog";

function About({ image, about }) {
    return (
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    );
  }

  About.defaultProps = {
    image: "https://via.placeholder.com/215Links"
  };

export default About;
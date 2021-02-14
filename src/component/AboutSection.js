// import React, { useEffect } from "react";
import home1 from "../img/home1.png";
import Wave from "./Wave";
import { About, Description, Image, Hide } from "../Styles";
import { Link } from "react-router-dom";
import RefreshScroll from "./Refreshscroll";
// framer motion
import { motion } from "framer-motion";

// animation
import { titleAnim, fade, imageAnim } from "../animation";
const AboutSection = () => {
  return (
    <About>
      <RefreshScroll />
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams </span>come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            dicta ipsa optio quaerat excepturi voluptas ullam qui voluptatibus
            dolor accusamus!
          </motion.p>

          <Link to="/contact">
            <motion.button variants={fade}>Contact Us</motion.button>
          </Link>
        </motion.div>
      </Description>
      <Image>
        <motion.img
          variants={imageAnim}
          initial="hidden"
          animate="show"
          src={home1}
          alt="Guy with a camera"
        />
      </Image>
      <Wave />
      <RefreshScroll />
    </About>
  );
};
//styled-components

export default AboutSection;

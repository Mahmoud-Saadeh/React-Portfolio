import React from "react";
import AboutSection from "../component/AboutSection";
import ServicesSection from "../component/ServicesSection";
import FaqSection from "../component/FaqSection";
import ScrollTop from "../component/ScrollTop";

// animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;

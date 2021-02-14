import React from "react";
// animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../component/ScrollTop";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

library.add(faFacebook);
library.add(faTwitter);
library.add(faLinkedinIn);

const ContactUs = () => {
  return (
    <ContactStyle
      // style={{ background: "white" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <div>
              <Circle />
              <h2>Send Us a Message</h2>
            </div>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <div>
              <Circle />
              <h2>
                Send an Email: <br /> Example@example.com
              </h2>
            </div>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <div>
              <Circle />
              <h2>Social Media</h2>
            </div>

            <motion.div variants={titleAnim} className="social">
              <Link to="#">
                <FontAwesomeIcon
                  className="icon"
                  size="2x"
                  icon={["fab", "facebook"]}
                />
              </Link>
              <Link to="#">
                <FontAwesomeIcon
                  className="icon"
                  size="2x"
                  icon={["fab", "twitter"]}
                />
              </Link>
              <Link to="#">
                <FontAwesomeIcon
                  className="icon"
                  size="2x"
                  icon={["fab", "linkedin-in"]}
                />
              </Link>
            </motion.div>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  min-height: 90vh;
  padding: 2.5rem 5rem 2.5rem 5rem;
  /* color: #353535; */
  color: white;
  @media (max-width: 797px) {
    padding: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  /* background: #353535; */
  background: white;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  h2 {
    margin: 2rem;
    font-size: 2rem;
    line-height: 1.5;
    color: #fff;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    .icon {
      color: #23d997;
      margin: 0rem 1rem;
    }
  }
  .social {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-left: 2rem;
  }
`;
export default ContactUs;

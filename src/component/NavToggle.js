import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import "../style/navbar.css";
import { motion } from "framer-motion";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook);
library.add(faTwitter);
library.add(faLinkedinIn);
const NavToggle = () => {
  const [OpenNav, setOpenNav] = useState(false);
  const history = useHistory();
  const activePath = history.location.pathname;
  useEffect(() => {
    setOpenNav(false);
  }, [activePath]);
  return (
    <div>
      <Toggle onClick={() => setOpenNav(!OpenNav)} className="burgerdiv">
        <span></span>
        <span></span>
        <span></span>
      </Toggle>
      <SideMenu className={` ${OpenNav ? "active" : ""}`}>
        <div onClick={() => setOpenNav(!OpenNav)} className="close"></div>
        <ul>
          <li>
            <Link to="/">About Us</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: activePath === "/" ? "50%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/work">Our Work</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width:
                  activePath === "/work" ||
                  activePath === "/work/the-athlete" ||
                  activePath === "/work/the-racer" ||
                  activePath === "/work/good-times"
                    ? "50%"
                    : "0%",
              }}
            />
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: activePath === "/contact" ? "50%" : "0%" }}
            />
          </li>
        </ul>
        <footer>
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
        </footer>
      </SideMenu>
    </div>
  );
};

const Toggle = styled.div`
  position: fixed;
  width: 40px;
  padding: 6px;
  top: 23px;
  right: 40px;
  z-index: 11;
  display: none;
  cursor: pointer;
  :hover {
    span:nth-child(2),
    span:nth-child(3) {
      width: 100%;
    }
  }
  span {
    display: block;
    background-color: #fff;

    height: 2px;
  }
  span:nth-child(2) {
    margin: 4px 0 4px auto;
    width: 75%;
    transition: 0.3s all;
  }
  span:nth-child(3) {
    margin-left: auto;
    width: 50%;
    transition: 0.6s all;
  }
  @media (max-width: 797px) {
    display: block;
  }
`;
const SideMenu = styled.nav`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  right: 0;
  background-color: #3bb78f;
  background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%);
  width: 70%;
  height: 100vh;
  z-index: 11;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  color: white;
  transform: translate3d(100%, 0, 0);
  transition: transform 0.5s ease-in-out;
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    a {
      color: white;

      display: inline-block;
      font-size: 1.5rem;
      margin-top: 2rem;
    }
  }
  @media (max-width: 400px) {
    width: 100%;
  }
  ul {
    list-style: none;

    a {
      color: white;
      text-decoration: none;
      font-size: 2rem;
    }
    li {
      padding: 5rem 0rem;
      position: relative;
      width: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .close {
    height: 30px;
    width: 30px;
    display: block;
    position: absolute;
    right: 20px;
    top: 24px;
    cursor: pointer;
  }
  .close::before,
  .close::after {
    content: "";
    position: absolute;
    top: 0;
    left: 13px;
    height: 28px;
    width: 2px;
    background: white;
  }
  .close::before {
    transform: rotate(45deg);
  }
  .close::after {
    transform: rotate(-45deg);
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #fff;
  width: 30px;
  position: absolute;
  display: block;
  bottom: 30%;
  left: 50%;
  z-index: 12;
  transform: translateX(-50%);
`;
export default NavToggle;

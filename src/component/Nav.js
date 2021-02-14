import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const history = useHistory();
  const activePath = history.location.pathname;
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
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
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  justify-content: space-between;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  min-height: 10vh;
  align-items: center;
  padding: 1rem 5rem;
  background: #282828;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;

    /* justify-content: start; */
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  li {
    padding-left: 3rem;
    padding-right: 3rem;
    /* width: 100%; */
    position: relative;
  }
  @media (max-width: 797px) {
    ul {
      /* display: flex;
      justify-content: space-around;
      margin: 1.5rem 0rem 0.5rem 0rem; */
      display: none;
    }
    /* ul {
      display: flex;
      justify-content: space-around;
      margin: 1.5rem 0rem 0.5rem 0rem;
    } */
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 50%;
  transform: translateX(-50%);
`;
export default Nav;

import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import ScrollTop from "../component/ScrollTop";
// animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  imageAnim,
  lineAnim,
  // slider,
  // slidercontrol,
  movieContainer,
} from "../animation";
import { useScroll } from "../component/useScroll";
const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  let { url } = useRouteMatch();
  // console.log(url);
  return (
    // <div>
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      {/* <Switch>
        <Route path={`${path}/:id`} exact>
          <MovieDetail />
        </Route>
      </Switch> */}
      {/* <motion.div variants={slidercontrol}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div> */}
      <Movie variants={movieContainer} initial="hidden" animate="show">
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        {/* <Link to="/work/the-athlete"> */}
        <Link to={`${url}/the-athlete`}>
          <Hide>
            <motion.img variants={imageAnim} src={athlete} alt="Athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element}
        variants={movieContainer}
        animate={controls}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        {/* <Link to="/work/the-racer"> */}
        <Link to={`${url}/the-racer`}>
          <img src={theracer} alt="Theracer" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={movieContainer}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        {/* <Link to="/work/good-times"> */}
        <Link to={`${url}/good-times`}>
          <img src={goodtimes} alt="Goodtimes" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>

    // </div>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  color: white;
  font-weight: bold;
  overflow: hidden;
  padding: 5rem 5rem;
  @media (max-width: 797px) {
    padding: 1rem 1rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    background-position: center;
    background-size: cover;
  }
`;

// const Frame1 = styled(motion.div)`
//   position: fixed;
//   left: 0;
//   top: 10%;
//   height: 100vh;
//   width: 100%;
//   background: #fffebf;
//   z-index: 2;
// `;
// const Frame2 = styled(Frame1)`
//   background: #ff8efb;
// `;
// const Frame3 = styled(Frame1)`
//   background: #8ed2ff;
// `;
// const Frame4 = styled(Frame1)`
//   background: #8effa0;
// `;
const Hide = styled.div`
  overflow: hidden;
`;
export default OurWork;

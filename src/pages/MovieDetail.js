import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
// animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  // use effect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);

    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Detail
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Detail>
      )}
    </>
  );
};

const Detail = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  position: relative;
  min-height: 90vh;
  padding-top: 20vh;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 40vh;
  display: flex;
  margin: 5rem 5rem;
  /* align-items: center; */
  justify-content: space-around;
  @media (max-width: 797px) {
    display: block;
    margin: 1rem;
  }
`;
const AwardStyle = styled.div`
  padding: 1rem;
  h3 {
    font-size: 1.5rem;
  }
  .line {
    height: 0.2rem;
    width: 100%;
    background: #23d997;
    margin: 1rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;

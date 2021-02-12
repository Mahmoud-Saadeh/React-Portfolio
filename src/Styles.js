import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: white;
  padding: 2.5rem 5rem;
  box-sizing: border-box;
  @media (max-width: 797px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 0 !important;
    padding: 1rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  @media (max-width: 797px) {
    padding-right: 0;
  }
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  img {
    width: 90%;
    height: 70vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;

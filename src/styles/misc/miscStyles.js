import { motion } from "framer-motion";
import styled from "styled-components";

export const Logo = styled(motion.div)`

  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 2px solid ${props => props.theme.text.primary};
  transition: all 0.2s ease-out;

  &:hover {
    background: ${props => props.theme.text.primary};
    width: 30px;
    height: 30px;
  }

`
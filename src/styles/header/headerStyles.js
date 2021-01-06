import { motion } from 'framer-motion';
import styled, { css } from 'styled-components'
import { config } from '../../theme/Theme';

export const HeaderNav = styled(motion.div)`

  height: 0px;
  width: 100%;
  position: absolute;
  top: 15vh;
  right: 0;
  left: 0;
  z-index: 99;
  
`

export const HeaderText = styled(motion.p)`

  color: ${props => props.theme.text.primary};

  font-size: 1.2rem;
  transition: ${config.transitions.default};
  text-decoration: none;

  &:hover {
      color: ${props => props.theme.accent.primary};
      cursor: pointer;
  }

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}
  
  ${props => props.bold && css`
    font-weight: bold;
  `}
  
  ${props => props.biggerTracking && css`
    letter-spacing: 0.1rem;
  `}

`



import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { config } from "../../theme/Theme";

export const Flex = styled.div`
    display: flex;

    ${props => props.alignCenter && css`
      align-items: center;
    `}

    ${props => props.spaceBetween && css`
      justify-content: space-between;
    `}

    ${props => props.noHeight && css`
      height: 0;
    `}

    ${props => props.relative && css`
      position: relative;
    `}


`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
`

export const Container = styled(motion.div)`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 10vw;
  position: relative;
  width: auto;
  height: 100%;

  ${props => props.small && css`
    padding: 0 10vw !important;
  `}

  @media ${config.media.large} {
    padding: 0 14vw;
  }

  @media (min-width: 1600px) {
    padding: 0 20vw;
  }

  ${props => props.nonRelative && css`
      position: initial;
  `}
`


// Typography
export const DescriptionHighlight = styled(motion.p)`
  
  margin-bottom: 10px;
  font-size: 1.4rem;
  line-height: 2rem;

  @media ${config.media.small} {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
`

// Buttons
export const UnstyledButton = styled.button`
    background: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
    
    &:focus {
      outline: none;
    }
`

// SVG
export const SVGHolder = styled.div`
    svg {
      fill: ${props => props.theme.text.primary};
      transition: ${config.transitions.default};

      &:hover {    
          fill: ${props => props.theme.accent.primary};
          cursor: pointer;
      }

      &:focus {
        fill: ${props => props.theme.text.primary};
      }
    }
`
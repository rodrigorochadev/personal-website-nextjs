import { createGlobalStyle } from 'styled-components';
import { config } from '../theme/Theme';
// import { COLORS, config } from './constants';
// import {grain} from '../animations'

// import noiseImg from '../assets/images/noise.png'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "Plus Jakarta Display Regular";
    font-display: swap;
    src: url("/fonts/Jakarta/regular/PlusJakartaDisplay-Regular.ttf") format("truetype"), 
        url("/fonts/Jakarta/regular/PlusJakartaDisplay-Regular.ttf") format("embedded-opentype");
  } 

  @font-face {
    font-family: "Plus Jakarta Display Bold";
    font-display: swap;
    src: url("/fonts/Jakarta/bold/PlusJakartaDisplay-Bold.ttf") format("truetype"), 
        url("/fonts/Jakarta/bold/PlusJakartaDisplay-Bold.eot") format("embedded-opentype");
  }

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${config.fontFamilies.text.regular}, sans-serif
                /* -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                 Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */

    /* @media ${config.media.small} {
      cursor: none;
    } */

  }
  
  * {
    ::-moz-selection {
        color: ${props => props.theme.background.primary};
        background: ${props => props.theme.accent.primary};
    }
    
    ::selection {
        color: white;
        background: ${props => props.theme.accent.primary};
    }
  }

  html, body {
      overflow-x: hidden;
      background: ${props => props.theme.background.primary};
      color: ${props => props.theme.text.primary};
      transition: all 0.25s ease-out;
  }

  h1, h2, h3, h4, h5, h6 {
    /* font-family: ${config.fontFamilies.text.bold}; */
    margin-bottom: 10px;
  }

  b {
    font-family: ${config.fontFamilies.text.bold};
  }

  p {

    line-height: 1.7rem;
    
    @media ${config.media.small} {
      line-height: 2.2rem;
    }
  }

  body {
    
    background: ${props => props.theme.background.primary};
    color: ${props => props.theme.text.primary};

    font-size: ${config.fontSizes.base};

    @media ${config.media.small} {
      font-size: ${config.fontSizes.base};
    }

    @media ${config.media.medium} {
      font-size: ${config.fontSizes.medium};
    }

    @media ${config.media.large} {
      font-size: ${config.fontSizes.large};
    }

    @media ${config.media.xlarge} {
      font-size: ${config.fontSizes.xlarge};
    }

    @media ${config.media.xxlarge} {
      font-size: ${config.fontSizes.xxlarge};
    }
  }

  a {
      cursor: pointer;
      color: ${props => props.theme.accent.primary};
      transition: ${config.transitions.default};
      text-decoration: none;
      
      &:hover {
          color: ${props => props.theme.text.primary};
      }
  }
`;

export default GlobalStyles;

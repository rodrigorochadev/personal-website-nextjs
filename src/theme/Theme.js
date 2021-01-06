const commonAttributes = {
    accent: {
        primary: '#f03c7b',
    }
}

export const lightTheme = {

    ...commonAttributes,

    background: {
        primary: '#ffffff',
    },
    
    text: {
        primary: '#000',
        secondary: '#666666',
        light: 'rgba(0, 0, 0, 0.3)'
    },
}

export const darkTheme = {

    ...commonAttributes,

    background: {
        primary: '#131313',
    },

    text: {
        primary: '#e5e5e5',
        secondary: '#b7b7b7',
        light: 'rgba(255, 255, 255, 0.3)'
    },
    
}

export const config = {

    fontFamilies: {
      text: {
        regular: "'Plus Jakarta Display Regular'",
        bold: "'Plus Jakarta Display Bold'",
      }
    },
  
    fontSizes: {
        small: '.7rem',
        base: '1rem',
        medium: '1.1rem',
        large: '1.2rem',
        xLarge: '1.3rem',
        xxLarge: '1.4px',
    },
  
    fontSizesPlus: {
        small: '1.2rem',
        base: '1.3rem',
        medium: '1.4rem',
        large: '1.5rem',
        xLarge: '1.6rem',
        xxLarge: '1.7px',
    },
  
    media: {
        xsmall: `screen and (min-width: 22em)`,
        small: `screen and (min-width: 48em)`,
        medium: `screen and (min-width: 64em)`,
        large: `screen and (min-width: 85.375em)`,
        xlarge: `screen and (min-width: 120em)`,
        xxlarge: `screen and (min-width: 160em)`,
    },
  
    transitions: {
        default: '0.2s ease-in-out',
    },
  }
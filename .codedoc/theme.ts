import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({


  light: {
    background: 'rgba(25,112,180)',       // --> CSS color string, background of the page
    text: 'rgba(255,255,255)',            // --> CSS color string, color of text
    primary: 'rgba(255,225,25)',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: 'rgba(198,198,198)',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(255,255,255,0.2)',            // --> CSS color string, border colors
    code: 'rgba(255,255,255,0.9)',                  // --> CSS color string, in-text code color
  },

  dark: {
    background: 'rgba(68,68,68)',          // --> CSS color string, background of the page
    text: 'rgba(105,240,174,1)',              // --> CSS color string, color of text
    primary: 'rgba(203,94,59,1)',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#000',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(105,240,174,0.4)',      // --> CSS color string, border colors
    code: '#69f0ae',                  // --> CSS color string, in-text code color
  },


  quote: {
    dark: {
      background: 'rgba(68,68,68)',
      text: '#69f0ae', 
      border: 'rgba(105,240,174,0.4)',
    },

    light: {
      background: 'rgba(198,198,198)',
      text: 'rgba(68,68,68)',
      border: 'rgba(0,0,0,0.2)',
    },
  },


  toc: {                                 
    light: {
      background: 'rgba(25,112,180,0.2)',              // --> CSS color string, background of ToC
      border: 'rgba(238,238,238,0.2)',                 // --> CSS color string, border of ToC
    },

    dark: {
      background: 'rgba(68,68,68,0.8)',             // --> CSS color string, background of ToC
      border: 'rgba(105,240,174,0.2)',                // --> CSS color string, border of ToC
    },             
  },


});

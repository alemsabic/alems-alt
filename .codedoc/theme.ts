import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({


  light: {
    background: 'rgba(215,217,217)',           // --> CSS color string, background of the page
    text: 'rgba(0,0,0)',            // --> CSS color string, color of text
    primary: 'rgba(0,0,0)',             // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: 'rgba(215,217,217)',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(0,0,0,0.2)',               // --> CSS color string, border colors
    code: 'rgba(0,0,0)',                  // --> CSS color string, in-text code color
  },

  dark: {
    background: '#000',           // --> CSS color string, background of the page
    text: '#69f0ae',              // --> CSS color string, color of text
    primary: '#69f0ae',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#000',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(105,240,174,0.4)',      // --> CSS color string, border colors
    code: '#69f0ae',                  // --> CSS color string, in-text code color
  },


  quote: {
    dark: {
      background: '#000',
      text: '#69f0ae', 
      border: 'rgba(105,240,174,0.4)',
    },

    light: {
      background: 'rgba(215,217,217)',
      text: 'rgba(0,0,0)',
      border: 'rgba(0,0,0,0.2)',
    },
  },


  toc: {                                 
    light: {
      background: 'rgba(215,217,217,0.4)',             // --> CSS color string, background of ToC
      border: 'rgba(0,0,0,0.2)',                 // --> CSS color string, border of ToC
    },

    dark: {
      background: 'rgba(0,0,0,0.4)',             // --> CSS color string, background of ToC
      border: 'rgba(105,240,174,0.4)',                // --> CSS color string, border of ToC
    },             
  },


});

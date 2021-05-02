
import { configuration,
  DefaultMarkdownCustomComponents
 } from '@codedoc/core';
import { codingBlog } from '@codedoc/coding-blog-plugin';

import { theme } from './theme';

import { Utterances } from './components/utterances';
import { SeeTypo$ } from './components/SeeTypo';
import { SeeTypoDe$ } from './components/SeeTypoDe';




export const config = /*#__PURE__*/configuration({
  theme,
  src: {
    base: 'posts'
  },
  dest: {
    namespace: '',    // --> change this if you want to also deploy to GitHub Pages
    html: 'dist',
    assets: process.env.GITHUB_BUILD === 'true' ? 'dist' : '.',
    bundle: process.env.GITHUB_BUILD === 'true' ? 'bundle' : 'dist/bundle',
    styles: process.env.GITHUB_BUILD === 'true' ? 'styles' : 'dist/styles',
  },
  page: {
    title: {
      base: 'alems.org',
      connector: ' > ',
    },
    meta: {                              // --> meta tags of each page
      subject: 'Virus!',           // --> the subject meta tag for each page
      description: 'Jesmo najebali!',          // --> description meta tag for each page
      keywords: ['test','test', 'text'],                        
      themeColor: 'rgba(25,112,180)',             // --> the browser bar color of your docs
      appleMobileWebStatusBarStyle:      // --> same as above, but for iOS Safari
        'black-translucent',
        
    },
    fonts: {                             // --> font settings
      text: {                            // --> font used for texts
        url:                             // --> URL of font used for texts
          'https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300;400;700&display=swap',
        name: 'Overpass Mono',                    // --> name of font used for texts
        fallback: 
        `'Courier New', Courier, monospace`           // --> the fallback font for texts
      },
      code: {                            // --> font used for codes
        url:                             // --> URL of font used for codes
          'https://fonts.googleapis.com/css?family=Source+Code+Pro:400&display=swap',
        name: 'Source Code Pro',         // --> name of the font used for codes
        fallback:                        // --> fallback font for codes
          `'Courier New', Courier, monospace`
      },
      icon: {                            // --> the icon font
        url:                             // --> url of hte icon font (and perhaps the outline icon font)
          'https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Outlined',
        name: 'Material Icons',          // --> name of the icon font
        outline:                         // --> name of the outline icon font
          'Material Icons Outlined'
      }
    }, 
  },

  markdown: {
    customComponents: {
      ...DefaultMarkdownCustomComponents,
      Utterances,
      SeeTypo$,
      SeeTypoDe$
    }
  },


  plugins: [
    codingBlog({
      assets: [
        'img',
        'favicon.ico',
      ]
    })
  ],
  misc: {
    github: {
      user: 'alemsabic',            // --> name of the user on GitHub owning the repo
      repo: 'alems',         // --> name of the repo on GitHub
      action: 'Issue',            // --> action of the GitHub button
      count: true,                // --> whether to show the `count` on the GitHub button
      //large: true,                // --> whether to show a `large` GitHub button
      standardIcon: true,         // --> whether to use the GitHub icon on the GitHub button or use an action specific icon
    },
    gitter: {
      room: 'alemsabic/community'  // --> id of the Gitter room for the project
    }
  }
});

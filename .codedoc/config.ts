
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
      base: 'x2 alems.org',
      connector: ' > ',
    },
    meta: {                              // --> meta tags of each page
      subject: 'Sarajevski žargon',           // --> the subject meta tag for each page
      description: 'Stranica Alema Šabića. Uz pomoć nekih drugih budala.',          // --> description meta tag for each page
      keywords: ['test','test', 'text'],                        
      themeColor: '#000',             // --> the browser bar color of your docs
      appleMobileWebStatusBarStyle:      // --> same as above, but for iOS Safari
        'black-translucent',
        
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
      repo: 'x2',         // --> change this to your github repo
      user: 'alemsabic'         // --> change this to your github username
    }
  }
});

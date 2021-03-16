import { RendererLike } from '@connectv/html';
import { File } from 'rxline/fs';
import { Page, Meta, ContentNav, Fonts, ToC, GithubSearch$ } from '@codedoc/core/components';

import { config } from '../config';
import { Header } from './header';
import { Footer } from './footer';


export function content(_content: HTMLElement, toc: HTMLElement, renderer: RendererLike<any, any>, file: File<string>) {
  return (
    <Page title={config.page.title.extractor(_content, config, file)}
          favicon={config.page.favicon}
          meta={<Meta {...config.page.meta}/>}
          fonts={<Fonts {...config.page.fonts}/>}

          scripts={config.page.scripts}
          stylesheets={config.page.stylesheets}

          header={<Header {...config}/>}
          footer={<Footer {...config}/>}
          toc={<ToC>{toc}</ToC>}>

<style>
{`
h2 {line-height:1.3; text-transform:uppercase;}
h3 {line-height:1.3; text-transform:uppercase;}
h1 p {line-height:1.3; text-transform:uppercase; text-align:center;}


h1{font-size: calc(1.3rem + 1.8vw);}
h2 {font-size: calc(1.15rem + 1.2vw);}
h3 {font-size: calc(0.9rem + 0.7vw);}
.container p, .container ol, .container ul {font-size: calc(0.9rem + 0.25vw);}
strong {text-transform:uppercase;}


.container {line-height:1.8;}
.inside a.icon-font {font-size:36px;}
.inside a.icon-font {
  opacity: 0.35;
}
.inside a.icon-font:hover {
  opacity: 1;
  text-decoration: none !important;
}
`}
</style>


      {_content}
      <ContentNav content={_content}/>
    </Page>
  )
}

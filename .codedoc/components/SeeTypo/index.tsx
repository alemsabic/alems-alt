import { ThemedComponentThis } from '@connectv/jss-theme';
import { RendererLike } from '@connectv/html';
import { transport } from "@connectv/sdh/transport";

export function SeeTypo(
  this: ThemedComponentThis,
  _: any,
  renderer: RendererLike<any, any>,
) {
  const hrefPrefix = "https://github.com/alemsabic/x2/blob/master/posts"
  const pathname = window.location.pathname
  const hrefPostfix = ".md"
  const href = hrefPrefix + pathname + hrefPostfix
  return <div style="text-align:right; margin-top:64px;"><span class="icon-font" data-ignore-text="" style="vertical-align: sub">create</span> <a href={href}>BRIŠI GREŠKE</a></div>
}

export const SeeTypo$ = transport(SeeTypo);
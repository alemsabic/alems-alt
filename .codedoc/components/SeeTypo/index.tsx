import { ThemedComponentThis } from '@connectv/jss-theme';
import { RendererLike } from '@connectv/html';
import { transport } from "@connectv/sdh/transport";

export function SeeTypo(
  this: ThemedComponentThis,
  _: any,
  renderer: RendererLike<any, any>,
) {
  const hrefPrefix = "https://github.com/alemsabic/x2/blob/master/docs/md"
  const pathname = window.location.pathname
  const hrefPostfix = ".md"
  const href = hrefPrefix + pathname + hrefPostfix
  return <div style="text-align:right; margin-top:64px;"><span class="icon-font" data-ignore-text="" style="vertical-align: sub">create</span> <b><a href={href}>BRIŠI GREŠKE</a></b></div>
}

export const SeeTypo$ = transport(SeeTypo);
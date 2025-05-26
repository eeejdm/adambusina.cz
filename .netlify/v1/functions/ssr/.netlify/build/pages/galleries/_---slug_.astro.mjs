import { c as createComponent, d as createAstro, e as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot } from '../../chunks/astro/server_CP4yHjT5.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, g as getCollection } from '../../chunks/BaseLayout_s7xj1u5t.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../../chunks/_astro_assets_Rogy-laI.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$GalleryLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GalleryLayout;
  const { content } = Astro2.props;
  const { title, description, date, cover, images } = content;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "data-astro-cid-beds4i6h": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article data-astro-cid-beds4i6h> <h1 data-astro-cid-beds4i6h>${title}</h1> <p data-astro-cid-beds4i6h><time${addAttribute(date.toISOString(), "datetime")} data-astro-cid-beds4i6h>${date.toLocaleDateString("en-us", { year: "numeric", month: "long", day: "numeric" })}</time></p> ${cover && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": cover, "alt": `Cover image for ${title}`, "width": 800, "height": 400, "class": "cover-image", "data-astro-cid-beds4i6h": true })}`} <div class="gallery-content" data-astro-cid-beds4i6h> ${renderSlot($$result2, $$slots["default"])}  </div> ${images && images.length > 0 && renderTemplate`<div class="image-gallery" data-astro-cid-beds4i6h> <h2 data-astro-cid-beds4i6h>Gallery Images</h2> <div class="grid" data-astro-cid-beds4i6h> ${images.map((imgEntry) => renderTemplate`<figure data-astro-cid-beds4i6h> ${renderComponent($$result2, "Image", $$Image, { "src": imgEntry.image, "alt": imgEntry.alt || title, "width": 400, "height": 300, "loading": "lazy", "decoding": "async", "data-astro-cid-beds4i6h": true })} ${imgEntry.alt && renderTemplate`<figcaption data-astro-cid-beds4i6h>${imgEntry.alt}</figcaption>`} </figure>`)} </div> </div>`} </article> ` })} `;
}, "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/layouts/GalleryLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const galleries = await getCollection("galleries");
  return galleries.map((entry) => ({
    params: { slug: entry.slug },
    props: { gallery: entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { gallery } = Astro2.props;
  const { Content } = await gallery.render();
  return renderTemplate`${renderComponent($$result, "GalleryLayout", $$GalleryLayout, { "content": gallery.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/galleries/[...slug].astro", void 0);

const $$file = "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/galleries/[...slug].astro";
const $$url = "/galleries/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

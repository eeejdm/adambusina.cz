import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment, u as unescapeHTML, a as addAttribute } from '../chunks/astro/server_B2d_92dp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B_9zOm8R.mjs';
import { g as getEntry, a as getCollection } from '../chunks/_astro_content_v7DjXqia.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pageData = await getEntry("pages", "galerie");
  const { Content } = await pageData.render();
  const allGalleries = await getCollection("galleries", ({ data }) => {
    return true ;
  });
  allGalleries.sort((a, b) => new Date(b.data.event_date).valueOf() - new Date(a.data.event_date).valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageData.data.title, "description": pageData.data.seo_description, "data-astro-cid-7eijwcii": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container page-container" data-astro-cid-7eijwcii> <header class="page-header text-center" data-astro-cid-7eijwcii> <h1 data-astro-cid-7eijwcii>${pageData.data.page_heading || pageData.data.title}</h1> ${pageData.data.intro_text && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(pageData.data.intro_text)}` })}`} </header> ${allGalleries.length > 0 ? renderTemplate`<div class="galleries-grid" data-astro-cid-7eijwcii> ${allGalleries.map((gallery) => renderTemplate`<a${addAttribute(`/galleries/${gallery.slug}`, "href")} class="gallery-card" data-astro-cid-7eijwcii> ${gallery.data.cover_image && renderTemplate`<img${addAttribute(gallery.data.cover_image, "src")}${addAttribute(`Cover for ${gallery.data.title}`, "alt")} class="gallery-card-image" loading="lazy" data-astro-cid-7eijwcii>`} <div class="gallery-card-content" data-astro-cid-7eijwcii> <h3 data-astro-cid-7eijwcii>${gallery.data.title}</h3> ${gallery.data.event_date && renderTemplate`<p class="event-date" data-astro-cid-7eijwcii> <time${addAttribute(new Date(gallery.data.event_date).toISOString(), "datetime")} data-astro-cid-7eijwcii> ${new Date(gallery.data.event_date).toLocaleDateString("cs-CZ", { year: "numeric", month: "long", day: "numeric" })} </time> </p>`} ${gallery.data.description && renderTemplate`<p class="description" data-astro-cid-7eijwcii>${unescapeHTML(gallery.data.description.substring(0, 100) + "...")}</p>`} </div> </a>`)} </div>` : renderTemplate`<p class="text-center" data-astro-cid-7eijwcii>Nebyly nalezeny žádné galerie. Brzy zde nějaké přibudou!</p>`} ${pageData.data.disclaimer_text && renderTemplate`<footer class="gallery-disclaimer text-center" data-astro-cid-7eijwcii> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(pageData.data.disclaimer_text)}` })} </footer>`} </div> ` })} `;
}, "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/galerie/index.astro", void 0);
const $$file = "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/galerie/index.astro";
const $$url = "/galerie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_CP4yHjT5.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseLayout } from '../chunks/BaseLayout_s7xj1u5t.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const galleries = await getCollection("galleries");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Adam Busina Photography", "description": "Portfolio of Adam Busina, a photographer.", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-j7pv25f6>Welcome to My Photography Portfolio</h1> <p data-astro-cid-j7pv25f6>This is a showcase of my work. Browse through the galleries to see more.</p> <h2 data-astro-cid-j7pv25f6>Galleries</h2> ${galleries.length === 0 ? renderTemplate`<p data-astro-cid-j7pv25f6>No galleries published yet. Stay tuned!</p>` : renderTemplate`<ul data-astro-cid-j7pv25f6> ${galleries.map((gallery) => renderTemplate`<li data-astro-cid-j7pv25f6> <a${addAttribute(`/galleries/${gallery.slug}`, "href")} data-astro-cid-j7pv25f6>${gallery.data.title}</a> ${gallery.data.description && renderTemplate`<p data-astro-cid-j7pv25f6>${gallery.data.description}</p>`} </li>`)} </ul>`} ` })}`;
}, "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/index.astro", void 0);

const $$file = "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

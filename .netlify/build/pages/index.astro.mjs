import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment, u as unescapeHTML, a as addAttribute } from '../chunks/astro/server_B2d_92dp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, s as settings } from '../chunks/BaseLayout_B_9zOm8R.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Dom\u016F", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-j7pv25f6> <section class="hero-section" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>${settings.homepage_hero_heading}</h1> ${renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(settings.homepage_hero_subheading)}` })}`} ${renderTemplate`<a${addAttribute(settings.homepage_hero_cta_link, "href")} class="cta-button hero-cta" data-astro-cid-j7pv25f6> ${settings.homepage_hero_cta_label} </a>`} ${renderTemplate`<img${addAttribute(settings.homepage_signature_image, "src")} alt="Signature" class="hero-signature" data-astro-cid-j7pv25f6>`} </section>  <section style="padding: 4rem 0; text-align: center;" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Další sekce přijdou sem...</h2> <p data-astro-cid-j7pv25f6>Tato stránka bude sestavena z různých komponent a obsahu definovaného v CMS.</p> <p data-astro-cid-j7pv25f6><a href="/galerie" class="cta-button" data-astro-cid-j7pv25f6>Prohlédnout Galerie</a></p> </section> </div> ` })} `;
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

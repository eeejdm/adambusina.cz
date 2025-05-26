import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_B2d_92dp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B_9zOm8R.mjs';
import { g as getEntry, a as getCollection } from '../chunks/_astro_content_v7DjXqia.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Sluzby = createComponent(async ($$result, $$props, $$slots) => {
  const pageData = await getEntry("pages", "sluzby");
  const { Content } = await pageData.render();
  const servicePackages = await getCollection("services");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageData.data.title, "description": pageData.data.seo_description, "data-astro-cid-75gzkjf2": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container page-container" data-astro-cid-75gzkjf2> ${pageData.data.hero_heading && renderTemplate`<section class="page-hero text-center"${addAttribute(pageData.data.hero_background_image ? `background-image: url(${pageData.data.hero_background_image}); background-size: cover; background-position: center; padding: 4rem 0; color: white;` : "", "style")} data-astro-cid-75gzkjf2> <h1 data-astro-cid-75gzkjf2>${pageData.data.hero_heading}</h1> ${pageData.data.hero_cta_text && renderTemplate`<div class="hero-subtext" data-astro-cid-75gzkjf2>${unescapeHTML(pageData.data.hero_cta_text)}</div>`} ${pageData.data.hero_cta_label && pageData.data.hero_cta_link && renderTemplate`<a${addAttribute(pageData.data.hero_cta_link, "href")} class="cta-button" data-astro-cid-75gzkjf2>${pageData.data.hero_cta_label}</a>`} </section>`} <article class="main-content-intro" data-astro-cid-75gzkjf2> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-75gzkjf2": true })} </article> <section class="service-packages-section" data-astro-cid-75gzkjf2> <h2 data-astro-cid-75gzkjf2>Naše Služby</h2> ${servicePackages.length > 0 ? renderTemplate`<div class="services-grid" data-astro-cid-75gzkjf2> ${servicePackages.map((service) => renderTemplate`<div class="service-card" data-astro-cid-75gzkjf2> ${service.data.image && renderTemplate`<img${addAttribute(service.data.image, "src")}${addAttribute(service.data.title, "alt")} class="service-card-image" data-astro-cid-75gzkjf2>`} <h3 data-astro-cid-75gzkjf2>${service.data.title}</h3> ${service.data.description && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(service.data.description)}` })}`} ${service.data.inclusions && service.data.inclusions.length > 0 && renderTemplate`<ul class="inclusions-list" data-astro-cid-75gzkjf2> ${service.data.inclusions.map((inclusion) => renderTemplate`<li data-astro-cid-75gzkjf2>${inclusion.text}</li>`)} </ul>`} ${service.data.price && renderTemplate`<p class="price" data-astro-cid-75gzkjf2>Cena: ${service.data.price}</p>`}   </div>`)} </div>` : renderTemplate`<p data-astro-cid-75gzkjf2>Aktuálně nejsou definovány žádné balíčky služeb. Pro více informací nás <a href="/kontakt" data-astro-cid-75gzkjf2>kontaktujte</a>.</p>`} </section> ${pageData.data.travel_fee_text && renderTemplate`<section class="travel-fee-info text-center" data-astro-cid-75gzkjf2> <p data-astro-cid-75gzkjf2>${pageData.data.travel_fee_text}</p> </section>`} ${pageData.data.gallery_cta_label && pageData.data.gallery_cta_link && renderTemplate`<section class="cta-section text-center" data-astro-cid-75gzkjf2> <a${addAttribute(pageData.data.gallery_cta_link, "href")} class="cta-button" data-astro-cid-75gzkjf2>${pageData.data.gallery_cta_label}</a> </section>`} </div> ` })} `;
}, "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/sluzby.astro", void 0);

const $$file = "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/sluzby.astro";
const $$url = "/sluzby";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sluzby,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

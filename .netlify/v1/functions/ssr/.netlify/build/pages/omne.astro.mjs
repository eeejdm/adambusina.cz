import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_B2d_92dp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B_9zOm8R.mjs';
import { g as getEntry } from '../chunks/_astro_content_v7DjXqia.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Omne = createComponent(async ($$result, $$props, $$slots) => {
  const pageData = await getEntry("pages", "omne");
  const { Content } = await pageData.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageData.data.title, "description": pageData.data.seo_description, "data-astro-cid-mgzblngy": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container page-container" data-astro-cid-mgzblngy> ${pageData.data.hero_heading && renderTemplate`<section class="page-hero text-center"${addAttribute(pageData.data.hero_background_image ? `background-image: url(${pageData.data.hero_background_image}); background-size: cover; background-position: center; padding: 4rem 0; color: white;` : "", "style")} data-astro-cid-mgzblngy> <h1 data-astro-cid-mgzblngy>${pageData.data.hero_heading}</h1>  </section>`} <article class="main-content" data-astro-cid-mgzblngy> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-mgzblngy": true })} </article> ${(pageData.data.gallery_cta_label || pageData.data.contact_cta_label) && renderTemplate`<section class="cta-section text-center" data-astro-cid-mgzblngy> ${pageData.data.gallery_cta_label && pageData.data.gallery_cta_link && renderTemplate`<a${addAttribute(pageData.data.gallery_cta_link, "href")} class="cta-button" data-astro-cid-mgzblngy>${pageData.data.gallery_cta_label}</a>`} ${pageData.data.contact_cta_label && pageData.data.contact_cta_link && renderTemplate`<a${addAttribute(pageData.data.contact_cta_link, "href")} class="cta-button secondary" data-astro-cid-mgzblngy>${pageData.data.contact_cta_label}</a>`} </section>`} </div> ` })} `;
}, "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/omne.astro", void 0);

const $$file = "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/omne.astro";
const $$url = "/omne";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Omne,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

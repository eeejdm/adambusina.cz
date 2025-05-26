import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_B2d_92dp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B_9zOm8R.mjs';
import { g as getEntry } from '../chunks/_astro_content_v7DjXqia.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Kontakt = createComponent(async ($$result, $$props, $$slots) => {
  const pageData = await getEntry("pages", "kontakt");
  const { Content } = await pageData.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageData.data.title, "description": pageData.data.seo_description, "data-astro-cid-d7zyz6zb": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container page-container" data-astro-cid-d7zyz6zb> <header class="page-header text-center" data-astro-cid-d7zyz6zb> <h1 data-astro-cid-d7zyz6zb>${pageData.data.title}</h1> </header> <div class="contact-layout" data-astro-cid-d7zyz6zb> <article class="contact-content" data-astro-cid-d7zyz6zb> ${pageData.data.form_heading && renderTemplate`<h2 data-astro-cid-d7zyz6zb>${pageData.data.form_heading}</h2>`} ${pageData.data.form_intro_text && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(pageData.data.form_intro_text)}` })}`}  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" class="contact-form" data-astro-cid-d7zyz6zb> <input type="hidden" name="form-name" value="contact" data-astro-cid-d7zyz6zb> <p class="hidden" data-astro-cid-d7zyz6zb> <label data-astro-cid-d7zyz6zb>Don't fill this out if you're human: <input name="bot-field" data-astro-cid-d7zyz6zb></label> </p> <p data-astro-cid-d7zyz6zb> <label for="name" data-astro-cid-d7zyz6zb>Jméno:</label> <input type="text" name="name" id="name" required data-astro-cid-d7zyz6zb> </p> <p data-astro-cid-d7zyz6zb> <label for="email" data-astro-cid-d7zyz6zb>Email:</label> <input type="email" name="email" id="email" required data-astro-cid-d7zyz6zb> </p> <p data-astro-cid-d7zyz6zb> <label for="subject" data-astro-cid-d7zyz6zb>Předmět:</label> <input type="text" name="subject" id="subject" data-astro-cid-d7zyz6zb> </p> <p data-astro-cid-d7zyz6zb> <label for="message" data-astro-cid-d7zyz6zb>Zpráva:</label> <textarea name="message" id="message" rows="5" required data-astro-cid-d7zyz6zb></textarea> </p> <p data-astro-cid-d7zyz6zb> <button type="submit" class="cta-button" data-astro-cid-d7zyz6zb>Odeslat zprávu</button> </p> </form> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-d7zyz6zb": true })}  </article> <aside class="contact-sidebar" data-astro-cid-d7zyz6zb> ${pageData.data.billing_details_heading && renderTemplate`<h3 data-astro-cid-d7zyz6zb>${pageData.data.billing_details_heading}</h3>`} ${pageData.data.billing_details_content && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(pageData.data.billing_details_content)}` })}`} ${pageData.data.map_embed_code && renderTemplate`<div class="map-embed" data-astro-cid-d7zyz6zb> ${unescapeHTML(pageData.data.map_embed_code)}</div>`} </aside> </div> </div> ` })} `;
}, "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/kontakt.astro", void 0);

const $$file = "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/kontakt.astro";
const $$url = "/kontakt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kontakt,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

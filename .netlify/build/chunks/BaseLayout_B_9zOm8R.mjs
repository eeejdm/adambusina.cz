import { c as createComponent, e as createAstro, a as addAttribute, j as renderScript, r as renderTemplate, u as unescapeHTML, f as renderSlot, b as renderHead, d as renderComponent } from './astro/server_B2d_92dp.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/node_modules/astro/components/ClientRouter.astro", void 0);

const site_title_part2 = "| Fotograf";
const header_navigation_links = [{"label":"Domů","url":"/"},{"label":"Galerie","url":"/galerie"},{"label":"O mně","url":"/omne"},{"label":"Služby","url":"/sluzby"},{"label":"Kontakt","url":"/kontakt"}];
const homepage_signature_image = "/uploads/media/podpis-1.png";
const instagram_username = "adamsroams";
const footer_intro_text = "## Tady to nemusí končit\n\nDěkuji za návštevu mojí stránky. Pokud máte jakýkoliv dotaz, neváhejte a napište mi. Budu se těšit na vzájemnou spolupráci!";
const logo_image = "/uploads/media/cropped-favicon-06-300x300.png";
const copyright_text_base = "Copyright © 2025 Adam Bušina | Fotograf";
const homepage_hero_heading = "Zaznamenám & doručím";
const homepage_hero_cta_label = "Objednejte si mě";
const footer_navigation_links = [];
const header_cta_label = "Napište mi";
const homepage_hero_subheading = "Jako reportážní fotograf se postarám o to, aby vaše akce byla profesionálně zaznamenána, a vy jste se nemuseli o nic starat.";
const seo_description = "";
const phone_number = "+420 605 856 680";
const header_cta_link = "/kontakt";
const homepage_hero_cta_link = "/kontakt";
const contact_email = "info@adambusina.cz";
const site_title_part1 = "Adam Bušina";
const settings = {
  site_title_part2,
  header_navigation_links,
  homepage_signature_image,
  instagram_username,
  footer_intro_text,
  logo_image,
  copyright_text_base,
  homepage_hero_heading,
  homepage_hero_cta_label,
  footer_navigation_links,
  header_cta_label,
  homepage_hero_subheading,
  seo_description,
  phone_number,
  header_cta_link,
  homepage_hero_cta_link,
  contact_email,
  site_title_part1,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const settings$1 = settings;
  const {
    title: pageTitle,
    description: pageDescription
  } = Astro2.props;
  const siteTitle = `${settings$1.site_title_part1} ${settings$1.site_title_part2}`;
  const effectiveTitle = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const effectiveDescription = pageDescription || settings$1.seo_description || "Adam Busina Photography Portfolio";
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate(_a || (_a = __template(['<html lang="cs"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">', '<script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"><\/script>', '</head> <body> <header class="site-header"> <div class="container"> <a href="/" class="logo-link"> ', ' </a> <nav class="main-nav"> <ul> ', " </ul> </nav> ", "  </div> </header> <main> ", ' </main> <footer class="site-footer"> <div class="container"> ', ' <div class="footer-columns"> <div class="footer-column links"> <h4>Navigace</h4> <ul> ', ' </ul> </div> <div class="footer-column contact"> <h4>Kontakt</h4> ', " ", " ", ' </div> </div> <div class="copyright"> <p>&copy; ', " ", ". V\u0161echna pr\xE1va vyhrazena.</p> </div> </div> </footer> </body></html>"])), addAttribute(effectiveDescription, "content"), addAttribute(Astro2.generator, "content"), effectiveTitle, renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), renderTemplate`<img${addAttribute(settings$1.logo_image, "src")}${addAttribute(siteTitle, "alt")} style="max-height: 50px; width: auto;">` , settings$1.header_navigation_links && settings$1.header_navigation_links.map((link) => renderTemplate`<li><a${addAttribute(link.url, "href")}${addAttribute(Astro2.url.pathname === link.url ? "is-active" : "", "class")}>${link.label}</a></li>`), renderTemplate`<a${addAttribute(settings$1.header_cta_link, "href")} class="cta-button header-cta">${settings$1.header_cta_label}</a>`, renderSlot($$result, $$slots["default"]), renderTemplate`<div class="footer-intro">${unescapeHTML(settings$1.footer_intro_text)}</div>`, (settings$1.footer_navigation_links && settings$1.footer_navigation_links.length > 0 ? settings$1.footer_navigation_links : settings$1.header_navigation_links).map((link) => renderTemplate`<li><a${addAttribute(link.url, "href")}>${link.label}</a></li>`), renderTemplate`<p><a${addAttribute(`mailto:${settings$1.contact_email}`, "href")}>${settings$1.contact_email}</a></p>`, renderTemplate`<p><a${addAttribute(`tel:${settings$1.phone_number}`, "href")}>${settings$1.phone_number}</a></p>`, renderTemplate`<p><a${addAttribute(`https://instagram.com/${settings$1.instagram_username}`, "href")} target="_blank" rel="noopener noreferrer">Instagram (@${settings$1.instagram_username})</a></p>`, currentYear, settings$1.copyright_text_base);
}, "/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, settings as s };

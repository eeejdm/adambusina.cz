import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_CP4yHjT5.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Volumes/T7%20Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/","cacheDir":"file:///Volumes/T7%20Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/node_modules/.astro/","outDir":"file:///Volumes/T7%20Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/dist/","srcDir":"file:///Volumes/T7%20Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/","publicDir":"file:///Volumes/T7%20Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/public/","buildClientDir":"file:///Volumes/T7%20Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/dist/","buildServerDir":"file:///Volumes/T7%20Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/admin","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#f0f0f0;background-size:224px}body{margin:0;padding:0;display:flex;flex-direction:column;min-height:100vh}main{flex-grow:1;max-width:80ch;margin:auto;padding:1rem}nav{background:#fff;padding:1rem;text-align:center;border-bottom:1px solid #ddd}nav a{margin:0 .5rem;text-decoration:none;color:#333}footer{background:#333;color:#fff;text-align:center;padding:1rem;margin-top:auto}img{max-width:100%;height:auto;border-radius:8px}\n.cover-image[data-astro-cid-beds4i6h]{width:100%;height:auto;margin-bottom:2rem;border-radius:8px}.gallery-content[data-astro-cid-beds4i6h]{margin-bottom:2rem}.image-gallery[data-astro-cid-beds4i6h] h2[data-astro-cid-beds4i6h]{margin-bottom:1rem;text-align:center}.image-gallery[data-astro-cid-beds4i6h] .grid[data-astro-cid-beds4i6h]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem}.image-gallery[data-astro-cid-beds4i6h] figure[data-astro-cid-beds4i6h]{margin:0;padding:0}.image-gallery[data-astro-cid-beds4i6h] img[data-astro-cid-beds4i6h]{width:100%;height:auto;object-fit:cover;border-radius:4px}.image-gallery[data-astro-cid-beds4i6h] figcaption[data-astro-cid-beds4i6h]{font-size:.9em;text-align:center;margin-top:.5em;color:#555}\n"}],"routeData":{"route":"/galleries/[...slug]","isIndex":false,"type":"page","pattern":"^\\/galleries(?:\\/(.*?))?\\/?$","segments":[[{"content":"galleries","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/galleries/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#f0f0f0;background-size:224px}body{margin:0;padding:0;display:flex;flex-direction:column;min-height:100vh}main{flex-grow:1;max-width:80ch;margin:auto;padding:1rem}nav{background:#fff;padding:1rem;text-align:center;border-bottom:1px solid #ddd}nav a{margin:0 .5rem;text-decoration:none;color:#333}footer{background:#333;color:#fff;text-align:center;padding:1rem;margin-top:auto}img{max-width:100%;height:auto;border-radius:8px}\nul[data-astro-cid-j7pv25f6]{list-style:none;padding:0}li[data-astro-cid-j7pv25f6]{margin-bottom:1.5rem;padding:1rem;background:#fff;border-radius:8px;box-shadow:0 2px 4px #0000001a}li[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]{font-size:1.5em;color:var(--accent-dark);text-decoration:none}li[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]:hover{text-decoration:underline}li[data-astro-cid-j7pv25f6] p[data-astro-cid-j7pv25f6]{margin-top:.5rem;color:#555}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/node_modules/astro-decap-cms-oauth/src/admin.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/galleries/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/galleries/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/galleries/[...slug]@_@astro":"pages/galleries/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B_pRHUhi.mjs","/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_FnIyFhIE.mjs","/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D3cHe5yp.mjs","/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/admin/config.yml","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"LM01x53N2XpyYkhU0RC3a9ZHIEtEYK6Pp+WPGFdBDgY=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Volumes/T7 Shield/Soubory/coding/web_reconstruction_astro/adambusina.cz/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };

// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-index-js": () => import("./../../../src/pages/blog/index.js" /* webpackChunkName: "component---src-pages-blog-index-js" */),
  "component---src-pages-blog-mdx-slug-js": () => import("./../../../src/pages/blog/{mdx.slug}.js" /* webpackChunkName: "component---src-pages-blog-mdx-slug-js" */),
  "component---src-pages-directory-js": () => import("./../../../src/pages/Directory.js" /* webpackChunkName: "component---src-pages-directory-js" */),
  "component---src-pages-events-js": () => import("./../../../src/pages/Events.js" /* webpackChunkName: "component---src-pages-events-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-index-js": () => import("./../../../src/pages/projects/index.js" /* webpackChunkName: "component---src-pages-projects-index-js" */),
  "component---src-pages-team-js": () => import("./../../../src/pages/Team.js" /* webpackChunkName: "component---src-pages-team-js" */),
  "component---src-pages-test-js": () => import("./../../../src/pages/Test.js" /* webpackChunkName: "component---src-pages-test-js" */),
  "component---src-templates-events-details-js": () => import("./../../../src/templates/events-details.js" /* webpackChunkName: "component---src-templates-events-details-js" */),
  "component---src-templates-project-details-js": () => import("./../../../src/templates/project-details.js" /* webpackChunkName: "component---src-templates-project-details-js" */)
}


import DefaultTheme from "vitepress/theme";
import 'easy-draw-ui/dist/easy-draw-ui.css'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    import("easy-draw-ui").then((module) => {
      app.use(module.default.install);
      // app.component(module.default['Button'].name, module.default['Button']);
    });
  },
};
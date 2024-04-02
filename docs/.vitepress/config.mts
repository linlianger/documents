import { defineConfig } from "vitepress";
import { nav } from "./relaConf";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/documents/",
  title: "doc",
  description: "个人博客",
  srcDir: '../src',

  themeConfig: {
    logo: "/avatar.jpg", // 表示docs/public/avartar.png
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar: nav,
    outline: {
      level: [2, 6],
      label: "目录",
    },
    search: {
      provider: "local",
    },
    i18nRouting: true,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});

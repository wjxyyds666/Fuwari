import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import swup from "@swup/astro";
import icon from "astro-icon";
import { defineConfig, passthroughImageService } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeComponents from "rehype-components";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkDirective from "remark-directive";
import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";
import remarkMath from "remark-math";
import remarkSectionize from "remark-sectionize";
import { imageFallbackConfig, siteConfig } from "./src/config.ts";
import { AdmonitionComponent } from "./src/plugins/rehype-component-admonition.mjs";
import { GithubCardComponent } from "./src/plugins/rehype-component-github-card.mjs";
import rehypeImageFallback from "./src/plugins/rehype-image-fallback.mjs";
import { parseDirectiveNode } from "./src/plugins/remark-directive-rehype.js";
import { remarkExcerpt } from "./src/plugins/remark-excerpt.js";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";
import rehypeExternalLinks from 'rehype-external-links';
import expressiveCode from "astro-expressive-code";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { expressiveCodeConfig } from "./src/config.ts";
import { pluginCustomCopyButton } from "./src/plugins/expressive-code/custom-copy-button.js";

// 动态适配双平台：通过环境变量PLATFORM区分，默认Cloudflare（main分支用）
const PLATFORM = import.meta.env.PLATFORM || "cloudflare";
// Cloudflare配置（main分支，自定义域名，根路径）
const CF_CONFIG = {
  site: "https://blog.6666116.xyz", // 你的Cloudflare自定义域名
  base: "/", // Cloudflare根路径，保留原有效果
};
// GitHub配置（gh-pages分支，GitHub域名+仓库名路径）
const GH_CONFIG = {
  site: "https://wjxyyds666.github.io", // 你的GitHub Pages根域名
  base: "/Fuwari", // 替换为你的GitHub仓库名（必填，否则样式错乱）
};
const CURRENT_CONFIG = PLATFORM === "cloudflare" ? CF_CONFIG : GH_CONFIG;

export default defineConfig({
  image: { service: passthroughImageService() },
  site: CURRENT_CONFIG.site,
  base: CURRENT_CONFIG.base,
  trailingSlash: "always",
  output: "static",
  redirects: { // 保留你原有重定向配置，不变
    "/donate": "/sponsors",
    "/ak": "https://blog.6666116.xyz",
    "/kook": "https://qun.qq.com/universal-share/share?ac=1&authKey=idB7BUJWQp4KUSKvXILZESWYDwlohkpDBKeoKZBfBllSQDi0yAmZZq2lpfaHmjCf&busi_data=eyJncm91cENvZGUiOiIxMDY0MTAyMDI4IiwidG9rZW4iOiJXN0ZWb1FUdFdWVmF5Q3VFNzJkaWlUSDBUdWgwYTRJWlBVa1hYay9lSkRiNHVkVDNxd1NGelk5L0dFUFpsb2tsIiwidWluIjoiMzY4NTIzNDgwMSJ9&data=WIk8dO3q5fQxhn0VJSfcL8fhFfBtisPm4Vn5gQVPLLmfqZ3c0lGSNQBQh3UOtewUGwotRBe5EzLswb-JQqLEuA&svctype=4&tempid=h5_group_info",
    "/long": "https://iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.in/",
    "/mly": "https://muleyun.com/aff/GOTRJLPN",
    "/tg": "https://t.me/+_07DERp7k1ljYTc1",
    "/tit": "/posts/pin/",
    "/tly": "https://tianlicloud.cn/aff/HNNCFKGP",
    "/wly": "https://wl.awcmam.com/#/register?code=FNQwOQBM",
    "/yyb": "https://www.rainyun.com/acofork_?s=bilibili",
    "/iku": "https://ikuuu.de/auth/register?code=Bjou"
  },
  integrations: [
    tailwind({ nesting: true }),
    swup({
      theme: false,
      animationClass: "transition-swup-",
      containers: ["main", "#toc"],
      smoothScrolling: true,
      cache: true,
      preload: true,
      accessibility: true,
      updateHead: true,
      updateBodyClass: false,
      globalInstance: true,
    }),
    icon({
      include: {
        "fa6-brands": ["*"],
        "fa6-regular": ["*"],
        "fa6-solid": ["*"],
        "simple-icons": ["*"],
      },
    }),
    svelte(),
    sitemap(),
    expressiveCode({
      themes: [expressiveCodeConfig.theme, expressiveCodeConfig.theme],
      plugins: [pluginCollapsibleSections(), pluginLineNumbers(), pluginCustomCopyButton()],
      defaultProps: {
        wrap: true,
        overridesByLang: { 'shellsession': { showLineNumbers: false } },
      },
      styleOverrides: {
        codeBackground: "var(--codeblock-bg)",
        borderRadius: "0.25rem",
        borderColor: "none",
        codeFontSize: "0.875rem",
        codeFontFamily: "'JetBrains Mono Variable', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        codeLineHeight: "1.5rem",
        frames: {
          editorBackground: "var(--codeblock-bg)",
          terminalBackground: "var(--codeblock-bg)",
          terminalTitlebarBackground: "var(--codeblock-topbar-bg)",
          editorTabBarBackground: "var(--codeblock-topbar-bg)",
          editorActiveTabBackground: "none",
          editorActiveTabIndicatorBottomColor: "var(--primary)",
          editorActiveTabIndicatorTopColor: "none",
          editorTabBarBorderBottomColor: "var(--codeblock-topbar-bg)",
          terminalTitlebarBorderBottomColor: "none"
        },
        textMarkers: { delHue: 0, insHue: 180, markHue: 250 }
      },
      frames: { showCopyToClipboardButton: false },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkReadingTime, remarkExcerpt, remarkGithubAdmonitionsToDirectives, remarkDirective, remarkSectionize, parseDirectiveNode],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [rehypeImageFallback, imageFallbackConfig],
      [rehypeComponents, {
        components: {
          github: GithubCardComponent,
          note: (x,y)=>AdmonitionComponent(x,y,"note"),
          tip: (x,y)=>AdmonitionComponent(x,y,"tip"),
          important: (x,y)=>AdmonitionComponent(x,y,"important"),
          caution: (x,y)=>AdmonitionComponent(x,y,"caution"),
          warning: (x,y)=>AdmonitionComponent(x,y,"warning"),
        },
      }],
      [rehypeExternalLinks, { target: '_blank' }],
      [rehypeAutolinkHeadings, {
        behavior: "append",
        properties: { className: ["anchor"] },
        content: {
          tagName: "span",
          properties: { className: ["anchor-icon"], "data-pagefind-ignore": true },
          children: [{ type: "text", value: "#" }],
        },
      }],
    ],
  },
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.message.includes("dynamically imported by") && warning.message.includes("statically imported by")) return;
          warn(warning);
        },
      },
    },
  },
});

import type {
    ExpressiveCodeConfig,
	GitHubEditConfig,
	ImageFallbackConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "嘿！ Blog",
	subtitle: "技术分享与实践",
	description:
		"分享网络技术、等技术教程与实践经验的个人技术博客",

	keywords: [],
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 361, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
		forceDarkMode: true, // Force dark mode and hide theme switcher
	},
	banner: {
		enable: false,
		src: "/xinghui.avif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'

		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pixiv @chokei", // Credit text to be displayed

			url: "https://www.pixiv.net/artworks/122782209", // (Optional) URL link to the original artwork or artist's page
		},
	},
	background: {
		enable: true, // Enable background image
		src: "https://eopfapi.b.2.f.f.0.7.4.0.1.0.0.2.ip6.arpa/pic?img=ua", // Background image URL (supports HTTPS)
		position: "center", // Background position: 'top', 'center', 'bottom'
		size: "cover", // Background size: 'cover', 'contain', 'auto'
		repeat: "no-repeat", // Background repeat: 'no-repeat', 'repeat', 'repeat-x', 'repeat-y'
		attachment: "fixed", // Background attachment: 'fixed', 'scroll', 'local'
		opacity: 0.5, // Background opacity (0-1)
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0", // Path of the favicon, relative to the /public directory
			//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
	officialSites: [
		{ url: "https://blog.6666116.xyz", alias: "Cloudflare" },
		{ url: "https://fuwari.edgeone.cool", alias: "EdgeOne CN" },
		
		{ url: "https://blog1.6666116.xyz", alias: "Vercel" },
		{ url: "http://wjxyyds666.github.io", alias: "GitHub Pages(旧博客)" }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "友链",
			url: "/friends/", // Internal links should not include the base path, as it is automatically added
			external: false, // Show an external link icon and will open in a new tab
		},
		{
			name: "赞助",
			url: "/sponsors/", // Internal links should not include the base path, as it is automatically added
			external: false, // Show an external link icon and will open in a new tab
		},
		{
			name: "统计",
			url: "https://cloud.umami.is/share/9674USVhw0mVOGI0", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "状态",
			url: "http://blog.6666116.xyz", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=3829054656&spec=0", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "嘿！",
	bio: "Protect What You Love.",
	links: [
		{
			name: "Bilibli",
			icon: "fa6-brands:bilibili",
			url: "https://m.bilibili.com/space/1313171426?plat_id=1&share_from=space&share_medium=android&share_plat=android&share_session_id=cbed0da9-6422-4a0f-9a13-f342d33642b6&share_source=COPY&share_tag=s_i&timestamp=1764912345&unique_k=1vPQjQf",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/wjxyyds666",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const imageFallbackConfig: ImageFallbackConfig = {
	enable: true,
	originalDomain: "eopfapi.2b2x.cn",
	fallbackDomain: "eopfapi.b.2.f.f.0.7.4.0.1.0.0.2.ip6.arpa/pic?img=ua",
};

export const umamiConfig: UmamiConfig = {
	enable: true,
	baseUrl: "https://cloud.umami.is",
	shareId: "9674USVhw0mVOGI0",
	timezone: "Asia/Shanghai",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};

export const gitHubEditConfig: GitHubEditConfig = {
	enable: true,
	baseUrl: "放自己的仓库文章地址",
};


// todoConfig removed from here


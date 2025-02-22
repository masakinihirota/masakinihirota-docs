import { defineConfig } from 'vitepress'

// VitePressのサイト設定を定義します
export default defineConfig({
	base: "/masakinihirota-docs/", // サイトがサブパスで提供される場合のベースパス
	title: "masakinihirota", // サイトのタイトル
	description: "docs masakinihirota", // サイトの説明
	themeConfig: {
		// テーマ設定
		nav: [
			{ text: "Home", link: "/" }, // ナビゲーションリンク
			{ text: "Examples", link: "/markdown-examples" }, // ナビゲーションリンク
		],

		sidebar: [
			{
				text: "Examples", // サイドバーのセクションタイトル
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" }, // サイドバーリンク
					{ text: "Runtime API Examples", link: "/api-examples" }, // サイドバーリンク
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" }, // ソーシャルリンク
		],
	},
});

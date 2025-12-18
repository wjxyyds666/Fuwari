---
title: 通过trmux搭建个人博客
published: 2025-12-18T11:05:26
description: ''
image: ''
tags: []

draft: false 
lang: ''
---
# 通过trmux搭建个人博客

## 项目介绍

Fuwari一个基于 Astro 构建的现代化个人博客主题，专注于技术分享与实践。

## ✨ 特性

- 🚀 基于 Astro 4.0+ 构建，性能卓越
- 📱 完全响应式设计，支持移动端
- 🌙 支持深色/浅色主题切换
- 📝 支持 Markdown 和 MDX 格式
- 🔍 内置搜索功能
- 📊 文章阅读时间统计
- 🏷️ 标签和分类系统
- 📈 SEO 优化
- 🎨 可自定义配置
- 💬 评论系统支持
- 📡 RSS 订阅支持

## 🛠️ 技术栈

- **框架**: Astro
- **样式**: Tailwind CSS + Stylus
- **交互**: Svelte
- **构建工具**: Vite
- **包管理**: pnpm
- **代码规范**: Biome

## 🚀 环境安装

### 环境要求

- Node.js 18+
- pnpm

### 更新trmux环境

```bash
pkg update && pkg upgrade -y
```

### 安装curl(等会下载nvm需要)

```bash
pkg install curl -y
```

### 安装nvm环境

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### 创建bashrc文件

```bash
touch ~/.bashrc
```

### 给bashrc文件权限

```bash
chmod 644 ~/.bashrc
```

### 将nvm配置写入bashrc文件

```bash
echo 'export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # 加载nvm' >> ~/.bashrc
```

### 执行bashrc文件

```bash
source ~/.bashrc
```

### 安装Node.js(这后面的数字可以改，截止这个文章发布最新版是25，所以我填的是25)

```bash
nvm install 25
nvm alias default 25
```

### 验证是否安装成功(安装成功后可以返回版本号，如果没有了，就是没有安装成功)

```bash
node -v
```

### 安装pnpm

```bash
npm install -g pnpm
```

## 安装Fuwari

先打开Fuwari官方仓库

[点击跳转Fuwari官方仓库](https://github.com/saicaca/fuwari "点击跳转")

复制仓库克隆地址，然后按照教程官方仓库里面的安装，不会的，照我下面这个安装

这下面每一行都是一个指令，先复制一行，然后去执行，执行完后，在复制下一行，执行下一行的，就这样，一直执行到最后一行，把trmux输出的链接，复制到浏览器打开(懒得在写一行指令解释一下，所以干脆把指令全部写出来，一个你们一个个执行就行了)

```bash
git clone https://github.com/saicaca/fuwari
cd fuwari
pnpm install
pnpm dev
```

这个 http://localhost:4321/ 网址，把它输到浏览器就可以看到你的博客了

[![图片](https://cccimg.com/view.php/4f28c5f01f8571f771dd92948372d8f8.jpg "图片")](https://cccimg.com/view.php/4f28c5f01f8571f771dd92948372d8f8.jpg "图片")

## 📝 使用指南

### 创建新文章

使用内置脚本快速创建新文章：

```bash
pnpm new-post helloword
```

### 清理未使用的图片

清理 `src/content/assets` 目录下未被引用的图片文件：

```bash
pnpm clean
```

### 配置博客

编辑 `src/config.ts` 文件来自定义博客配置：

```typescript
export const siteConfig: SiteConfig = {
  title: "Fuwari",
  subtitle: "技术分享与实践",
  lang: "zh_CN",
  themeColor: {
    hue: 250,
    fixed: false,
  },
  banner: {
    enable: false,
    src: "assets/images/demo-banner.png",
    position: "center",
  },
  favicon: [
    {
      src: "/favicon/icon.png",
    }
  ]
}
```

### 文章格式

文章使用 Markdown 格式，支持 frontmatter：

```markdown
---
title: 文章标题
published: 2024-01-01
description: 文章描述
image: ./cover.jpg
tags: [标签1, 标签2]
category: 分类
draft: false
---

# 文章内容

这里是文章正文...
```

## 📁 项目结构

```
├── public/                 # 静态资源
├── src/
│   ├── components/         # 组件
│   ├── content/           # 内容
│   │   ├── posts/         # 博客文章
│   │   └── assets/        # 资源文件
│   ├── layouts/           # 布局
│   ├── pages/             # 页面
│   ├── styles/            # 样式
│   └── config.ts          # 配置文件
├── scripts/               # 脚本工具
└── package.json
```

## 🎨 自定义

### 主题颜色

在 `src/config.ts` 中修改 `themeColor` 配置：

```typescript
themeColor: {
  hue: 250,        // 主色调 (0-360)
  fixed: false,    // 是否固定颜色
}
```

### 样式定制

- 全局样式：`src/styles/main.css`
- Markdown 样式：`src/styles/markdown.css`
- 变量定义：`src/styles/variables.styl`

## 📦 部署

构建后的静态文件位于 `dist/` 目录，可部署到任何静态托管平台。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

[MIT License](LICENSE)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者们！尤其感谢[上游仓库](https://github.com/saicaca/fuwari)



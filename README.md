# 隋兴华个人学术主页

这是部署在 GitHub Pages 的单页、中英双语个人学术主页。

## 页面结构

- `index.html`：完整页面语义结构、中文默认内容、SEO 与结构化数据
- `styles.css`：响应式布局、浅色与深色主题、交互状态
- `script.js`：中英切换、移动端导航和页脚年份
- `assets/xinghua-sui.webp`：优化后的头像
- `assets/research-visual.webp`：装饰性科研抽象图，不代表实验结果

原有 `about.html` 与 `works.html` 已按改版要求移除，内容整合至首页锚点：

- `#research`
- `#publications`
- `#projects`
- `#experience`
- `#profiles`

## 内容来源

- 近期成果：Google Scholar 公开条目，并通过 DOI 元数据核对题名、期刊与年份
- 学术平台：Google Scholar、ResearchGate、ORCID 与 GitHub 公开主页
- `Publications.enw` 与 `data/profile.json`：保留为参考文件，不再参与页面运行

页面不展示引用数、h-index、i10-index 或论文总数等动态指标。公开学术档案最近核对日期为 2026-09-03。

## 本地预览

使用任意静态文件服务器在项目根目录启动预览，然后打开 `index.html`。不要直接双击文件进行完整交互测试，因为浏览器对本地文件的行为可能不同于 GitHub Pages。

## 内容维护

- 中文默认文案位于 `index.html`。
- 英文文案与双语映射位于 `script.js` 的 `translations` 对象。
- 新增成果时，同时更新页面题名、期刊、年份和 DOI，并保持所有成果使用同一级别的列表样式。
- 页面默认中文；用户切换语言后，选择记录在浏览器本地存储中。

## 部署

线上地址保持为 `https://luvega.github.io/`。本轮改版仅在本地完成，不包含 Git 提交或推送。

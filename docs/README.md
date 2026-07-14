# Wu Yufan Academic CV

一个无需构建工具的静态学术主页，视觉方向参考 AcademicPages 的 CV 页面，但版式、配色与交互均为独立实现。

## 本地预览

在站点目录运行：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 内容维护

- 个人资料、教育背景、学生工作、获奖与助教经历集中在 `index.html`。
- PDF 资料位于独立的第二层页面 `notes.html`，主页只保留 Notes 入口。
- 视觉样式位于 `assets/css/site.css`。
- 明暗主题、移动导航和当前栏目高亮位于 `assets/js/site.js`。
- GitHub 头像加载失败时会使用 `assets/images/avatar.svg`。

## GitHub Pages

仓库中的 `.github/workflows/pages.yml` 会把根目录 `docs/` 发布到 GitHub Pages。首次使用时，在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**，随后手动运行一次工作流或推送 `docs/` 的更新。

项目站地址预计为：

`https://sufe-WuYuFan.github.io/Optimizer-algorithm-learning/`

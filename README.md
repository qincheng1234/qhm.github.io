# 秦宏民个人主页

无需构建工具的静态个人学术主页，可直接部署到 GitHub Pages。

## 本地预览

```powershell
python -m http.server 8000
```

浏览器访问 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 使用 GitHub 仓库 `qincheng1234/qhm.github.io`。
2. 将本目录内容推送到仓库的 `main` 分支。
3. 打开仓库 `Settings → Pages`，在 **Build and deployment** 下把 Source 设为 **GitHub Actions**。
4. 等待 `Deploy static site to GitHub Pages` 工作流完成。

发布地址为 `https://qincheng1234.github.io/qhm.github.io/`。

## 发布前建议补充

- GitHub 主页或代码仓库链接
- 可公开下载的脱敏简历（当前原始简历含手机号，因此页面未提供下载）
- 如有需要，补充英文版页面与个人域名

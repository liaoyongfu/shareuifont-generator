# svg字体转换成字体图标

## 图标展示地址

http://192.168.0.65:4002/shareui-font/dist/shareuifont.html

## 第一步：安装yarn软件（首次用才要，如果已经安装，下次不用）

- [点击下载](https://yarn.bootcss.com/docs/install.html)

- 安装

## 第二步：安装依赖（首次用才要，如果已经安装，下次不用）

```
yarn
```

## 第三步：把svg文件放在`src`目录下

注意：文件命名需以`面板_中文名_英文名.svg`命名

## 第四步：构建

```
yarn run build
```

## 第五步：发布版本

发布版本之前请先升级`package.json`中的`version`字段。

- 提交svn；

- 提交到gitlab：

```
git add -A
git commit -m "升级日志描述"
git push origin master
git tag -a 版本号 -m "升级日志描述"
git push --tags
```

- 发布到npm私库：

```
npm publish
```

## 更新日志

### v3.0.5 2018-3-29

- 展示页面增加点击复制功能；

- 生成的样式增加版本信息；

- 修复中文名称中包含其他字符时获取不全bug；

### v3.0.4 2018-3-29

- 修改默认样式名为`style.css`；

### v3.0.3 2018-3-29

- 修订旧版本多个图标显示问题，图标转曲。

### v3.0.2 2018-3-28

- 新增“小区管理”页面图标八个
- 修订旧版本图标命名规范

### v3.0.0 2018-3-12

- 完成svg文件转换成字体图标

### v3.0.1 2018-3-12

- 完成svg文件转换成字体图标
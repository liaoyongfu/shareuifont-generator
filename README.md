# svg字体转换成字体图标

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

### v1.0.0 2018-3-12

- 完成svg文件转换成字体图标
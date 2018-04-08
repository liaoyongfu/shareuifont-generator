#!/bin/bash

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

echo 正在生成字体图标，请稍后...
npm run build
echo 生成成功，请填写提交日志：
read log
git add -A
git commit -m $log
git push origin master -f
git tag -a $PACKAGE_VERSION -m $log
git push --tags
npm publish
echo 发布成功！按任意键退出...
read
#echo "Done"
#sleep 6
#!/bin/bash

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

echo 请填写提交日志：
read log
git add -A
git commit -m $log
git push origin master
git tag -a $PACKAGE_VERSION -m $log
git push --tags
echo Press Enter...
read
#echo "Done"
#sleep 6
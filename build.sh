#!/bin/bash

echo 请填写提交日志：
read log
git checkout dev
git add -A
git commit -am $log
git push
echo Press Enter...
read
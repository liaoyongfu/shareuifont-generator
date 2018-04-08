@echo off
echo "正在生成图标文件，请稍后..."
call npm run build
echo "图标生成成功！"
set input=
set /p input=请输入字符串:
git checkout dev
git add .
git commit -am %input%
git push
pause
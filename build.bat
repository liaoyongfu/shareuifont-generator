@echo off
echo "正在生成图标文件，请稍后..."
REM call npm run build
echo "图标生成成功！"
set input=
set /p input=请输入字符串:
call git checkout dev
call git add .
call git commit -am %input%
call git push
pause
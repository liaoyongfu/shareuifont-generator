@echo off
echo "��������ͼ���ļ������Ժ�..."
REM call npm run build
echo "ͼ�����ɳɹ���"
set input=
set /p input=�������ַ���:
call git checkout dev
call git add .
call git commit -am %input%
call git push
pause
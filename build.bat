@echo off
echo "��������ͼ���ļ������Ժ�..."
call npm run build
echo "ͼ�����ɳɹ���"
set input=
set /p input=�������ַ���:
git checkout dev
git add .
git commit -am %input%
git push
pause
@echo off
cd /d "%~dp0"
echo.
echo Services Visas US - servidor local
echo.
echo Deja esta ventana abierta.
echo Cada cambio en el codigo se actualiza automaticamente.
echo Solo refresca http://localhost:3000 para verlo.
echo.
set NEXT_DIST_DIR=.next-dev
if exist ".next-dev" (
  echo Limpiando cache local de desarrollo...
  rmdir /s /q ".next-dev"
)
"C:\Program Files\nodejs\node.exe" "node_modules\next\dist\bin\next" dev -p 3000
pause

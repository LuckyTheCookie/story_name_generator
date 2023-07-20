@echo off

powershell -Command "$host.UI.RawUI.ForegroundColor = 'Blue'; Write-Host 'Entrez l''age minimum de votre histoire'"
powershell -Command "$host.UI.RawUI.ForegroundColor = 'White'; Write-Host ' '"
set /p age=

echo.
powershell -Command "$host.UI.RawUI.ForegroundColor = 'Blue'; Write-Host 'Entrez le titre :'"
powershell -Command "$host.UI.RawUI.ForegroundColor = 'White'; Write-Host ' '"
set /p titre=

REM Formatage du titre si j'me suis pas gouré
set "titre=%titre:~0,1%%titre:~1,9999%"
set "titre=%titre: =_%"

echo.
powershell -Command "$host.UI.RawUI.ForegroundColor = 'Blue'; Write-Host 'Entrez le nom de l''auteur :'"
powershell -Command "$host.UI.RawUI.ForegroundColor = 'White'; Write-Host ' '"
set /p auteur=

echo.
powershell -Command "$host.UI.RawUI.ForegroundColor = 'Blue'; Write-Host 'Entrez l''UUID de votre pack :'"
echo L'UUID se trouve sur STUdio
powershell -Command "$host.UI.RawUI.ForegroundColor = 'White'; Write-Host ' '"
set /p uuid=

echo.
powershell -Command "$host.UI.RawUI.ForegroundColor = 'Blue'; Write-Host 'Entrez la version de votre pack :'"
echo Commencez par v : exemple, v1 / v2..
powershell -Command "$host.UI.RawUI.ForegroundColor = 'White'; Write-Host ' '"
set /p version=

REM Affichage du résultat
echo %age%+]%titre%[by_%auteur%-%uuid%_%version% > temp.txt

powershell -Command "$host.UI.RawUI.ForegroundColor = 'Green'; Write-Host ' '"
setlocal EnableDelayedExpansion
echo|set /p="Copie du nom du fichier"
for /l %%i in (1,1,3) do (
    <nul set /p "=."
    ping localhost -n 2 > nul
)
type temp.txt | clip

echo.
powershell -Command "$host.UI.RawUI.ForegroundColor = 'White'; Write-Host 'Le nom du pack a ete copie dans votre presse-papier !'"
echo.

powershell -Command "$host.UI.RawUI.ForegroundColor = 'Green'; Write-Host ' '"
setlocal EnableDelayedExpansion
echo|set /p="Suppression des fichiers temporaires"
for /l %%i in (1,1,3) do (
    <nul set /p "=."
    ping localhost -n 1 > nul
)
del temp.txt

echo.
powershell -Command "$host.UI.RawUI.ForegroundColor = 'Blue'; Write-Host 'Fini :)'"

pause

::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGyX8VAjFBdBTw+bAEmvFLAd/dTL/eWAsEwQWecsOLno+buKJdwR5V2pcpQs0C5bzplbDyQJLEr7IAY3pg4=
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+JeA==
::cxY6rQJ7JhzQF1fEqQJQ
::ZQ05rAF9IBncCkqN+0xwdVs0
::ZQ05rAF9IAHYFVzEqQJQ
::eg0/rx1wNQPfEVWB+kM9LVsJDGQ=
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWDk=
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATElA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCyDJGyX8VAjFBdBTw+bAE+1EbsQ5+n//NaJo0AYa+4qdobS5bOLLuUB61HrZ9gozn86
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
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

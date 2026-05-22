@echo off
title Next-Level Portfolio Dev Server - Thineth Shalinda
echo ====================================================================
echo                   PORTFOLIO DEVELOPMENT SERVER
echo ====================================================================
echo.
echo   [+] Launching local server (npm run dev)...
echo   [+] Automatically opening browser to http://localhost:3000
echo.
echo ====================================================================
echo   To stop the server, simply close this window or press Ctrl + C.
echo ====================================================================
echo.

:: Open default browser to the localhost address
start "" "http://localhost:3000"

:: Start Next.js development server
npm run dev

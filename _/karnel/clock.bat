@echo off
:loop
cls
echo Current Time: %time%
ping -n 1 127.0.0.1 > nul
goto loop

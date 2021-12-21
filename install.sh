#!/usr/bin/bash

apt-get upgrade
apt-get update
apt-get install nodejs
apt-get install libwebp
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install

echo "Obg por Utilizar a Lolizita-BOT Espero não Desapontalo,-, "

// WHATSAPP CONEXÃO
const { MessageOptions, WAFlag, WANode, WAMetric, ChatModification, DisconectReason, MessageTypeProto, WAConnection, WALocationMessage, ReconnectMode, WAContextInfo, proto, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent,  WAMessage,  BaileysError,  WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, GroupSettingChange } = require('@adiwajshing/baileys')

//_MÓDULOS NPM
const fs = require('fs');
const imageToBase64 = require('image-to-base64');
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const fetc = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const http = require('http');
const util = require('util');

// ARQUIVOS LIB
const {color, bgcolor} = require('./lib/color');
const { addMetadata } = require('./lib/exif.js')
const { webp2gifFile } = require("./lib/gif.js")
const {fetchJson} = require('./lib/fetcher');
const { addLimit, getLimit } = require('./lib/limit.js')
const {getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, addKoinUser, addATM,  checkATMuser, log} = require('./lib/functions');
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')
const _registered = JSON.parse(fs.readFileSync('./base de dados/datauser/registered.json'));

//_ ARQUIVOS DATAUSER
const uang = JSON.parse(fs.readFileSync('./base de dados/datauser/uang.json'));
const ban = JSON.parse(fs.readFileSync('./base de dados/datauser/banned.json'));
const _level = JSON.parse(fs.readFileSync('./base de dados/datauser/level.json'));

//_ARQUIVOS NA PASTA HELP
const { help } = require('./base de dados/help/help')
const { ptbr } = require('./base de dados/datauser/mess')

// ARQUIVOS LOLIZITA-BOT 
const setiker = JSON.parse(fs.readFileSync('./base de dados/temp/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./base de dados/temp/vid.json'))
const audionye = JSON.parse(fs.readFileSync('./base de dados/temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./base de dados/temp/image.json'))
const sotoy = JSON.parse(fs.readFileSync('./base de dados/data/sotoy.json'))
const daily = JSON.parse(fs.readFileSync('./base de dados/data/diario.json'))
const welcome = JSON.parse(fs.readFileSync('./base de dados/arquivos/welcome.json'));
const _leveling = JSON.parse(fs.readFileSync('./base de dados/arquivos/leveling.json'));
const antilink = JSON.parse(fs.readFileSync('./base de dados/arquivos/antilink.json'));
const antifaker = JSON.parse(fs.readFileSync('./base de dados/arquivos/antifaker.json'));
const palavrão = JSON.parse(fs.readFileSync('./base de dados/arquivos/palavrão.json'));
const palavra = JSON.parse(fs.readFileSync('./lib/palavras.json'))

//_CONFIGURE O BOT NA PASTA DATA
const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, SeuNome, OwnerNumber, NomeDoBot} = infos

const blocked = []; //<~ Bloqueados do bot
cdd = "480000" //<~ Tempo de espera do jogo da velha
crtt = "Jogo da velha" //<~ Verificado do jogo da velha
baterai = 'não detectado' //<~Detecção da bateria
//_NUMERO DO DONO DO BOT

const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${SeuNome}\n` //<~ NÃO MEXA AQUI
+ `ORG:${NomeDoBot};\n` //<~ NÃO MEXA AQUI. 
+ 'TEL;type=CELL;type=VOICE;waid=559481417512:+55 94 8141-7512\n' 
+ 'END:VCARD'                                       //COLOQUE SEU NÚMERO\\

//_TIC-TAC-TOE
const tictactoe = JSON.parse(fs.readFileSync('./base de dados/ttt/tictactoe.json'));
const { ttthelp } = require('./base de dados/ttt/TTTconfig/ttthelp');
const { tttme } = require('./base de dados/ttt/TTTconfig/tttme');
var tttset = require('./base de dados/ttt/TTTconfig/tttset.json');
var esp = require('./base de dados/ttt/TTTconfig/tttframe.json');

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
if (
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
) {
return true
} else {
return false
}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
if (
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
) {
return true
} else {
return false
}
}

//TESTE PARA EMPATE
const Tie = () => {
if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
return true
} else {
return false
}
}

const IA = () => {
if (WinnerX() || WinnerO() || Tie()) {
tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
tttset.reActivate1 = "off"
IAmove1()
//JOGADAS PROGRAMADAS ABAIXO
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "??" && esp.a3 == "??" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
//PRIORIZAR CANTOS E CENTRO
tttset.reActivate1 = "off"
while (tttset.reActivate3 == "on") {
priorityC()
}
tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "HARD" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//HARD
tttset.reActivate1 = "off"
IAmove1()
} else if (tttset.tttdifficulty == "NORMAL" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//NORMAL
tttset.reActivate1 = "off"
let randomNORMAL = Math.floor(Math.random() * 3)
if (randomNORMAL == 0 || randomNORMAL == 1) {
IAmove1()
} else {
while (tttset.reActivate2 == "on") {
IAalter()
}
}
tttset.reActivate2 = "on"
} else {
//EASY / RANDOM
let randomALL = Math.floor(Math.random() * 9)
switch (randomALL) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
}
break
}
}
}

const IAmove1 = () => {
//JOGADA PARA VITÓRIA
if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
esp.a1 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
esp.b1 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
esp.a1 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
esp.a2 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
esp.a1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
esp.a3 = "⭕"
//JOGADA PARA BLOQUEIO
} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
esp.a1 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
esp.b1 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
esp.a1 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
esp.a2 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
esp.a1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
esp.a3 = "⭕"
}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
let randomALTER = Math.floor(Math.random() * 9)
switch (randomALTER) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate2 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate2 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate2 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate2 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate2 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate2 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate2 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate2 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate2 = "off"
esp.c3 = "⭕"
}
break
}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
let randomPriC = Math.floor(Math.random() * 5)
switch (randomPriC) {
case 0 :
if (esp.a1 == "🔲") {
tttset.reActivate3 = "off"
esp.a1 = "⭕"
}
break
case 1 :
if (esp.a3 == "🔲") {
tttset.reActivate3 = "off"
esp.a3 = "⭕"
}
break
case 2 :
if (esp.b2 == "🔲") {
tttset.reActivate3 = "off"
esp.b2 = "⭕"
}
break
case 3 :
if (esp.c1 == "🔲") {
tttset.reActivate3 = "off"
esp.c1 = "⭕"
}
break
case 4 :
if (esp.c3 == "🔲") {
tttset.reActivate3 = "off"
esp.c3 = "⭕"
}
break
}
}
///_ END TIC-TAC-TOE CONFIG by: Resen

//TEMPORIZADO 
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} minutos ${pad(seconds)} Segundos`
}

//CONEXÃO DO QR CODE
async function starts() {
const lolizita = new WAConnection()
lolizita.logger.level = 'warn'
console.log(banner.string)
lolizita.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('escaneie o código qr'))
})

fs.existsSync('./NãoApaque.json') && lolizita.loadAuthInfo('./NãoApaque.json')
lolizita.on('connecting', () => {
start('2', ' ')
})
lolizita.on('open', () => {
success('2', 'Lolizita conectada')
setTimeout( () => {
console.log(color('[❗] Prontinho agora é so usar'))
}, 3000)    		    	     	
})         	
lolizita.sendMessage(`${OwnerNumber}@s.whatsapp.net`, `Ohayo prazer eu sou o seu bot❤️`, MessageType.text)
await lolizita.connect({timeoutMs: 10*1000})
fs.writeFileSync('./NãoApaque.json', JSON.stringify(lolizita.base64EncodedAuthInfo(), null, '\t'))

//_WELCOME = BEM VINDO...
lolizita.on('group-participants-update', async (anu) => {
mdata = await lolizita.groupMetadata(anu.jid)
if(antifaker.includes(anu.jid)) {
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {
lolizita.sendMessage(mdata.id, 'Números fake não são permitidos nesse grupo', MessageType.text)
setTimeout(async function () {
lolizita.groupRemove(mdata.id, [num])
}, 3000)
}
}
}
if (!welcome.includes(anu.jid)) return
try {
const mdata = await lolizita.groupMetadata(anu.jid)
console.log(anu)
if (anu.action == 'add') {
num = anu.participants[0]
try {
ppimg = await lolizita.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `Olá @${num.split('@')[0]}!!
Bem-vindo(a) ao grupo ${mdata.subject}! Olhe as regras do grupo para não ser banido 

Use o comando ${p}menu para listar meus comandos

Leia As Regras Do Grupo:
${mdata.desc}`
let buff = await getBuffer(ppimg)
lolizita.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num], thumbnail:null}})
} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppimg = await lolizita.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `Bye Bye @${num.split('@')[0]} 👋`
let buff = await getBuffer(ppimg)
lolizita.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num], thumbnail:null}})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})
//_FIM 

lolizita.on('CB:Blocklist', json => { 
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
  }
})

lolizita.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LIGAÇÃO DETECTADA LIGAÇÕES = BLOCK \x1b[1;37m]')
lolizita.sendMessage(callerId, "Ligações = block", MessageType.text)
setTimeout(async() => {
await lolizita.blockUser(callerId, "add")
}, 4000)
})

lolizita.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
})
global.p
global.batrei = global.batrei ? global.batrei : []
lolizita.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})

//_LINGUAGEM DO BOT, "N MEXA EM NADA."
lolizita.on('chat-update', async (mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.p
global.blocked
//_HORAS
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const data = moment.tz('Asia/Jakarta').format('DD/MM')

const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const type = Object.keys(mek.message)[0]
body = (type === 'conversation' && mek.message.conversation.startsWith(p)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(p) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(p) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(p) ? mek.message.extendedTextMessage.text : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const anu = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(p)
const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
const totalchat = await lolizita.chats.all()
const botNumber = lolizita.user.jid
//<~CASO VC SEJA MUITO RUIM EM MEXER VOM BOT MEXA AI
//<~ CUIDADO AO MODIFICAR, SE FOR NO PV PEDINDO AJUDA
const ownerNumber = [`${OwnerNumber}@s.whatsapp.net`] //PARA MUDAR VAI EM DATA E CONFIGURAÇÕES 
//<~ PARA RESOLVER ERROS NA BASE, EU N VOU RESPONDER
const isGroup = from.endsWith('@g.us')
const senderr = isGroup ? mek.participant : mek.key.remoteJid
sender = mek.key.fromMe ? lolizita.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const groupMetadata = isGroup ? await lolizita.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isOwner = ownerNumber.includes(sender)
const isBanned = ban.includes(sender) 
const q = args.join(' ')
const id = botNumber
const me = lolizita.user
const tescuk = ["0@s.whatsapp.net"]
var pushname = lolizita.contacts[sender] != undefined ? lolizita.contacts[sender].vname || lolizita.contacts[sender].notify: undefined
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
// ARQUIVOS ANTIS 
const isWelcome = isGroup ? welcome.includes(from) : true //Welcome
const isLevelingOn = isGroup ? _leveling.includes(from) : true //Leveling "Leveis de grupos"
const isAntiLink = isGroup ? antilink.includes(from) : true //Anti link
const isAntifaker = isGroup ? antifaker.includes(from) : true //Anti link
const isPalavrão = isGroup ? palavrão.includes(from) : false
const isRegistered = checkRegisteredUser(sender) 
const isUser = checkRegisteredUser(sender) //Use

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const enviar = (teks) => {
lolizita.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
}

const costum = (pesan, tipe, target, target2) => {
 lolizita.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}

const sendMess = (hehe, teks) => {
lolizita.sendMessage(hehe, teks, text)
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? lolizita.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : lolizita.sendMessage(from, teks.trim(), extendedText, {quoted: tob, contextInfo: {"mentionedJid": memberr}})
}

mess = {
espere: '[WAIT] Sendo processado⏳ aguarde ± 1 min!',
success: '『❗』Sucesso lek',
error: {
stick: '『❗』 Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
},
only: {
tobireplayoff: `『❌』Comando ${comando} desativado com sucesso!`,
tobireplay: `『❗』Comando ${comando} ativado com sucesso!`,
tobantilink: ` Essᴇ ᴛɪᴘᴏ ᴅᴇ ʟɪɴᴋ: *${budy}*\n\nNᴀ̃ᴏ ᴇ́ ᴍᴜɪᴛᴏ ʙᴇᴍ ᴘᴇʀᴍɪᴛɪᴅᴏ ᴀǫᴜɪ`,
}
}

colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage') 
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

//_FUCTION PATENTE
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {
patt = 'Bronze  I🥉'
} else if (nivelAtual === 2) {
patt = 'Bronze II🥉'
} else if (nivelAtual === 3) {
patt = 'Bronze  III🥉'
} else if (nivelAtual === 4) {
patt = 'Bronze  IV🥉'
} else if (nivelAtual === 5) {
patt = 'Bronze  V🥉'
} else if (nivelAtual === 6) {
patt = 'Prata I🥈'
} else if (nivelAtual === 7) {
patt = 'Prata II🥈'
} else if (nivelAtual === 8) {
patt = 'Prata III🥈'
} else if (nivelAtual === 9) {
patt = 'Prata IV🥈'
} else if (nivelAtual === 10) {
patt = 'Prata V🥈'
} else if (nivelAtual === 11) {
patt = 'Ouro I🥇'
} else if (nivelAtual === 12) {
patt = 'Ouro II🥇'
} else if (nivelAtual === 13) {
patt = 'Ouro III🥇'
} else if (nivelAtual === 14) {
patt = 'Ouro IV🥇'
} else if (nivelAtual === 15) {
patt = 'Ouro V🥇'
} else if (nivelAtual === 16) {
patt = 'Campeão I🏆'
} else if (nivelAtual === 17) {
patt = 'Campeão II🏆'
} else if (nivelAtual === 18) {
patt = 'Campeão III🏆'
} else if (nivelAtual === 19) {
patt = 'Campeão IV🏆'
} else if (nivelAtual === 20) {
patt = 'Campeão V🏆'
} else if (nivelAtual === 21) {
patt = 'Diamante I 💎'
} else if (nivelAtual === 22) {
patt = 'Diamante II 💎'
} else if (nivelAtual === 23) {
patt = 'Diamante III 💎'
} else if (nivelAtual === 24) {
patt = 'Diamante IV 💎'
} else if (nivelAtual === 25) {
patt = 'Diamante V 💎'
} else if (nivelAtual === 26) {
patt = 'Mestre I 🐂'
} else if (nivelAtual === 27) {
patt = 'Mestre II 🐂'
} else if (nivelAtual === 28) {
patt = 'Mestre III 🐂'
} else if (nivelAtual === 29) {
patt = 'Mestre IV 🐂'
} else if (nivelAtual === 30) {
patt = 'Mestre V 🐂'
} else if (nivelAtual === 31) {
patt = 'Mítico I 🔮'
} else if (nivelAtual === 32) {
patt = 'Mítico II 🔮'
} else if (nivelAtual === 33) {
patt = 'Mítico III 🔮'
} else if (nivelAtual === 34) {
patt = 'Mítico IV 🔮'
} else if (nivelAtual === 35) {
patt = 'Mítico V 🔮'
} else if (nivelAtual === 36) {
patt = 'God I🕴'
} else if (nivelAtual === 37) {
patt = 'God II🕴'
} else if (nivelAtual === 38) {
patt = 'God III🕴'
} else if (nivelAtual === 39) {
patt = 'God IV🕴'
} else if (nivelAtual === 40) {
patt = 'God V🕴'
} else if (nivelAtual === 41) {
patt = 'Grande Mestre I 🛐'
} else if (nivelAtual === 42) {
patt = 'Grande Mestre II 🛐'
} else if (nivelAtual === 43) {   	
patt = 'Grande Mestre III 🛐'
} else if (nivelAtual === 44) {
patt = 'Grande Mestre IV 🛐'
} else if (nivelAtual >= 45) {
patt = 'Deus-Sama🔰'
} 

//FUCTION TIPO DE USUÁRIO
if (groupAdmins) {
prema = 'Ademir🤓'
}
if (isOwner) {
prema = `El ${SeuNome}🕴🏽`
} else {
var prema = 'Membro comum🗿'
}

//FUCTION TIPO DE USUÁRIO
var ase = new Date();
var tempo = ase.getHours();
switch(tempo){
case 0: tempo = `Boa noite ${pushname}🌛`; break;
case 1: tempo = `Boa noite ${pushname}🌛`; break;
case 2: tempo = `Boa noite ${pushname}🌛`; break;
case 3: tempo = `Bom Dia ${pushname}✨`; break;
case 4: tempo = `Bom Dia ${pushname}✨`; break;
case 5: tempo = `Bom Dia ${pushname}✨`; break;
case 6: tempo = `Bom Dia ${pushname}✨`; break;
case 7: tempo = `Bom Dia ${pushname}✨`; break;
case 8: tempo = `Bom Dia ${pushname}✨`; break;
case 9: tempo = `Bom Dia ${pushname}✨`; break;
case 10: tempo = `Bom Dia ${pushname}✨`; break;
case 11: tempo = `Boa tarde ${pushname}🔥`; break;
case 12: tempo = `Boa tarde ${pushname}🔥`; break;
case 13: tempo = `Boa tarde ${pushname}🔥`; break;
case 14: tempo = `Boa tarde ${pushname}🔥`; break;
case 15: tempo = `Boa tarde ${pushname}🌹`; break;
case 16: tempo = `Boa tarde ${pushname}🌹`; break;
case 17: tempo = `Boa tarde ${pushname}🌹`; break;
case 18: tempo = `Boa noite ${pushname}🌛`; break;
case 19: tempo = `Boa noite ${pushname}🌛`; break;
case 20: tempo = `Boa noite ${pushname}🌛`; break;
case 21: tempo = `Boa noite ${pushname}🌛`; break;
case 22: tempo = `Boa noite ${pushname}🌛`; break;
case 23: tempo = `Boa noite ${pushname}🌛`; break;
}
var tempo = '' + tempo;

//PORCENTAGEM DA BATERIA
var up_porcenntagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const level_porcen = getLevelingLevel(sender)
if (level_porcen <= 10) {
up_porcenntagem = `*[█▒▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 20) {
up_porcenntagem = `*[██▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 30) {
up_porcenntagem = `*[███▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 40) {
up_porcenntagem = `*[████▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 50) {
up_porcenntagem = `*[█████▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 60) {
up_porcenntagem = `*[██████▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 70) {
up_porcenntagem = `*[███████▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 80) {
up_porcenntagem = `*[████████▒▒] ${level_porcen}%*`
} else if (level_porcen <= 90) {
up_porcenntagem = `*[█████████▒] ${level_porcen}%*`
} else if (level_porcen <= 100) {
up_porcenntagem = `*[██████████] ${level_porcen}%*`
} 		

//PORCENTAGEM DA BATERIA
var porcentagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const bateria = (`${baterai}`)
if (bateria <= 10) {
porcentagem = `*[█▒▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 20) {
porcentagem = `*[██▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 30) {
porcentagem = `*[███▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 40) {
porcentagem = `*[████▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 50) {
porcentagem = `*[█████▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 60) {
porcentagem = `*[██████▒▒▒▒] ${bateria}%*`
} else if (bateria <= 70) {
porcentagem = `*[███████▒▒▒] ${bateria}%*`
} else if (bateria <= 80) {
porcentagem = `*[████████▒▒] ${bateria}%*`
} else if (bateria <= 90) {
porcentagem = `*[█████████▒] ${bateria}%*`
} else if (bateria <= 100) {
porcentagem = `*[██████████] ${bateria}%*`
} 			

// VERIFICADO
const tob = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${tempo}`}}}

const players_caption = `${groupName}\n⪧ ⃝༘⃕Cᴏᴍᴀɴᴅᴏ: ${comando}\n⪧ ⃝༘⃕ Mᴜsɪᴄᴀ: ${q}` 
const play_quetod = {
key: { groupName, fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": players_caption} } } 

const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

//_XP COM LEVELING ATIVO
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
const requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
const getLevel = getLevelingLevel(sender)
const namelv = checkId
mett = ["1", "2", "3", "4", "5"]
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./base de dados/audios/som` + res + `.mp3`)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LEVEL UP \x1b[1;37m]', color(pushname, "yellow"), color('subiu'), color('de', "yellow"), color('level'), color('no', "yellow"), color('grupo:'), color(groupName, "yellow"))
const lvup = { 
text:
`
    ═══╾ Lᴇᴠᴇʟ Uᴘ ╼═══                           
  ➣ 𝙽ᴜᴍᴇʀᴏ: @${namelv.split('@')[0]}
╭════╾「👾」╼════╾
┣❲🔰❳ 𝚇ᴘ: ${getLevelingXp(sender)}
┣❲🆙❳ 𝙻ᴇᴠᴇʟ: ${getLevel} -> ${getLevelingLevel(sender)}
┣❲〽️❳ 𝙿ᴀᴛᴇɴᴛᴇ: ${patt}
╰════╾「🌀」╼════╾
`,
contextInfo: {mentionedJid: [namelv]}}
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\nTag: @${namelv.split('@')[0]}\n${up_porcenntagem}`}}}
lolizita.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: tob})
lolizita.sendMessage(from, lvup, text, {quoted: level_quetod})
}
} catch (err) {
console.error(err)
}
}

//_DINHEIRO 
if (isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}

////FINALIZAR TTT AUTOMATICAMENTE
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
lolizita.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
lolizita.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

// ANTILINKS, PIX TED, WHATSAPP....
if (budy.includes("https")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
lolizita.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("://chat.whatsapp.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
lolizita.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("://youtu.be/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
lolizita.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
lolizita.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("Https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
lolizita.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("http:/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
lolizita.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("https:/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
lolizita.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("https://t.me/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
lolizita.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("https://wa.me/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
lolizita.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("*TED ou PIX*")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
lolizita.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("https://vm.tiktok.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
lolizita.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (messagesC.includes("https://s.kwai.app/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
lolizita.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
lolizita.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

/*[--ANTI PALAVRÃO --]*/
if (isGroup && isPalavrão) { 
if (palavra.includes(messagesC)) {
enviar(`Essᴀ ᴘᴀʟᴀᴠʀᴀ ғᴏɪ ᴘʀᴏɪʙɪᴅᴀ ɴᴇssᴇ ɢʀᴜᴘᴏ\nRᴇᴘᴇɴsᴇ ᴏǫᴜᴇ ᴠᴄ ғᴇᴢ ᴘᴏʀ 4 ᴍɪɴᴜᴛᴏs ғᴏʀᴀ ᴅᴏ ɢʀᴜᴘᴏ 👋`)
setTimeout( () => { 
lolizita.groupRemove(from, [sender]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}, 2000)
setTimeout( () => { 
enviar(`Aᴅɪᴄɪᴏɴᴀɴᴅᴏ ${pushname} Nᴏᴠᴀᴍᴇɴᴛᴇ\nCᴀsᴏ ᴅᴇ̂ ᴇʀʀᴏ, Aʟɢᴜᴍ ᴀᴅᴍ ᴀᴅᴅ ᴅᴇɴᴏᴠᴏ シ︎`)
}, 185000) //240000
var addd = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => { 
lolizita.groupAdd(from, [addd]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}, 240000)
setTimeout( () => {
lolizita.updatePresence(from, )
enviar("Aᴅᴇᴜsシ︎")
}, 0)
}
}

//_CONSOLE DE COMANDOS NO PRIVADO E MENSAGEM
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('CMD', "red"), ']', color(comando, "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))
if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color('Message', "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))

//_CONSOLE DE COMANDOS E MENSAGENS EM GRUPOS:
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('CMD', "red"), ']', color(comando, "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))
if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color('Message', "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))

//VISUALIZADOR AS MENSAGENS 
lolizita.chatRead(from)

//_USUÁRIO BANIDO
if (isCmd && isBanned) {
enviar(ptbr.ban())
return console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('BAN', "red"), ']', color('Ignorando', "yellow"), 'comando', color('do', "yellow"), color(pushname), 'Horas', color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'))
}

//REGISTRO USUARIO
if (isCmd && !isRegistered) {
return enviar(`
┌─❖
│*「️Cᴏᴍᴀɴᴅᴏ Nᴇɢᴀᴅᴏ」*
└┬❖ 
   │Pғᴠʀ ғᴀᴄ̧ᴀ ʟᴏɢɪɴ
┌┤Pᴀʀᴀ sᴇ ʀᴇɢɪsᴛʀᴀʀ:
││Usᴇ: Lᴏɢɪɴ
│├━━━── • ──━━━
││ _SISTEMA DE REGISTRO_
│└━━━── • ──━━━
╰─━━━─── • ───━━━❋ཻུ۪۪⸙`)
}

if ((budy.match("login")) || (budy.match("Login")) || (budy.match("LOGIN"))) {            				
if (isUser) return enviar(`📌 *Você já está registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
if (!isGroup) enviar('『❗』Esᴘᴇʀᴇ ᴏ ᴘʀᴏᴄᴇssᴀᴍᴇɴᴛᴏ ᴅᴏ sᴇᴜ ʟᴏɢɪɴ')
if (isGroup) enviar(`『❗』Sᴇʀᴠɪᴄ̧ᴏ ᴅᴇ ʟᴏɢɪɴ ʙᴇᴍ-sᴜᴄᴇᴅɪᴅᴏ!\nEsᴛᴏᴜ ᴇɴᴠɪᴀɴᴅᴏ ᴏs ᴅᴀᴅᴏs ɴᴏ sᴇᴜ ᴘʀɪᴠᴀᴅᴏ`)
try {
var ppimg = await lolizita.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)
const tekentod = 
`
┬────────────┈ ⳹
┌┤⪧ ⃝༘⃕🐤REGISTRADO(A)
││
││Rᴇɢɪsᴛʀᴏ ʙᴇᴍ sᴜᴄᴇᴅɪᴅᴏ!!
││⪧ ⃝༘⃕🐤ɪᴅ: ${serialUser}
││⪧ ⃝༘⃕🐤ʜᴏʀᴀʀɪᴏ: ${time}
││⪧ ⃝༘⃕🐤ɴᴏᴍᴇ: ${pushname}
││⪧ ⃝༘⃕🐤ɴᴜᴍᴇʀᴏ: wa.me/${sender.split('@')[0]}
│├────────
││ _SISTEMA DE REGISTRO_
│└────────
╰─━━━─── • ───━━━❋ཻུ۪۪⸙
`            
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await lolizita.sendMessage(senderr, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                 
} else {
addRegisteredUser(from, pushname, time, serialUser)
await lolizita.sendMessage(senderr, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                  
}
}

//<~COMANDOS SEM PREFIXOS, BY TOBI
if (!mek.key.fromMe) {
if ((budy.match("Pq")) || (budy.match("pq"))) {
lolizita.updatePresence(from, Presence.composing)
mett = ["1", "2", "3", "4", "5"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/figurinhas/Pq_sticker.webp`)
lolizita.sendMessage(from, result, sticker, {quoted: mek})}}}

if (!mek.key.fromMe) {
if ((budy.match("hentai")) || (budy.match("Hentai"))) {
lolizita.updatePresence(from, Presence.composing)
mett = ["1", "2", "3", "4", "5"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/figurinhas/hentai_sticker.webp`)
lolizita.sendMessage(from, result, sticker, {quoted: mek})}}}

if (!mek.key.fromMe) {
if ((budy.match("Analise")) || (budy.match("analise"))) {
lolizita.updatePresence(from, Presence.composing)
mett = ["1", "2", "3", "4", "5"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/figurinhas/Analise_sticker.webp`)
lolizita.sendMessage(from, result, sticker, {quoted: mek})}}}

if (!mek.key.fromMe) {
if ((budy.match("Sexo")) || (budy.match("sexo"))) {
lolizita.updatePresence(from, Presence.composing)
mett = ["1", "2", "3", "4", "5"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/figurinhas/sexo_sticker.webp`)
lolizita.sendMessage(from, result, sticker, {quoted: mek})}}}

//<~TODOS OS COMANDOS APARTI DE AGR
switch(comando) {
case 'help': 
case 'menu':
case 'ajuda':
//「 ❗ 」By Tobi シ︎
lolizita.updatePresence(from, Presence.composing)
uptime = process.uptime()
const checATM = checkATMuser(sender)
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const requireXp = 5 * Math.pow(useLevel, 2) + 50 * useLevel + 100
const chatss = `${totalchat.length}`
wew = fs.readFileSync('./src/menu.png')
lolizita.sendMessage(from, wew, image, {quoted: tob, thumbnail:null, caption: help(p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, chatss, NomeDoBot, SeuNome)})
break

case 'dono':
case 'criador':
case 'owner':
//「 ❗ 」By Tobi シ︎
lolizita.sendMessage(from, '『❗』Nᴜᴍᴇʀᴏ do Mᴇᴜ Cʀɪᴀᴅᴏʀ foi Eɴᴠɪᴀᴅᴏ no seu ᴘʀɪᴠᴀᴅᴏ',MessageType.text, { quoted: tob} )
lolizita.sendMessage(sender, 'Esᴛᴇ ᴇ́ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ [(>_<)] Cᴀsᴏ ᴛᴇɴʜᴀ ᴀʟɢᴜᴍᴀ ᴅᴜᴠɪᴅᴀ ғᴀʟᴇ ᴄᴏᴍ ᴇʟᴇ',MessageType.text, { quoted: tob} )
lolizita.sendMessage(sender, {
displayname: "Jeff", vcard: vcard
}, MessageType.contact, {
quoted: tob
})
break

case 'banir':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('A marca-alvo que você quer chutar!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Alvo removido com sucesso :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
lolizita.groupRemove(from, mentioned)
} else {
mentions(`Alvo removido com sucesso : @${mentioned[0].split('@')[0]}`, mentioned, true)
lolizita.groupRemove(from, mentioned)
}
break

case 'add':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) 
if (args.length < 1) return enviar('Você quer adicionar um gênio?')
if (args[0].startsWith('08')) return enviar('Use o código do país, man')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
lolizita.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
enviar('Falha ao adicionar destino, talvez porque é privado')
}
break

case 'promover': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) 
if (args.length < 1) return enviar(`Use: ${p + comando} @Alvo`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Promote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
lolizita.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
lolizita.groupMakeAdmin(from, mentioned)
}
break

case 'rebaixar':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) 
if (args.length < 1) return enviar(`Use: ${p + comando} @Alvo`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Demote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
lolizita.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
lolizita.groupDemoteAdmin(from, mentioned)
}
break

case 'abrir-grupo': 
case 'abrir-gp':
case 'abrirg':
case 'abrir':
case 'abrir-gc':
//「 ❗ 」By Tobi シ︎
lolizita.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) 
open = {
text: `Grupo aberto por: @${sender.split("@")[0]}`,
contextInfo: {
mentionedJid: [sender]
}
}
lolizita.groupSettingChange (from, GroupSettingChange.messageSend, false)
lolizita.sendMessage(from, open, text, {
quoted: tob
})
break

case 'fecharg':
case 'fechar':
case 'fechagrupo':
case 'fechar-gp':
//「 ❗ 」By Tobi シ︎
lolizita.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) 
var nomor = mek.participant
const close = {
text: `Grupo fechado por: @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: {
mentionedJid: [nomor]
}
}
lolizita.groupSettingChange (from, GroupSettingChange.messageSend, true);
enviar(close)
break

case 'totag':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) 
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await lolizita.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await lolizita.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: tob
}
ini_buffer = fs.readFileSync(file)
lolizita.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await lolizita.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await lolizita.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: tob
}
ini_buffer = fs.readFileSync(file)
lolizita.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await lolizita.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await lolizita.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 999999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: tob
}
ini_buffer = fs.readFileSync(file)
lolizita.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await lolizita.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await lolizita.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: tob
}
ini_buffer = fs.readFileSync(file)
lolizita.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await lolizita.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await lolizita.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: tob
}
ini_buffer = fs.readFileSync(file)
lolizita.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await lolizita.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await lolizita.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 999999999,
contextInfo: { mentionedJid: mem },
quoted: tob
}
ini_buffer = fs.readFileSync(file)
lolizita.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
enviar(`『❗』Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${p + comando}`)
}
break

case 'setnome': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) 
if (args.length < 1) return enviar(`『❗』Use: ${p + comando} Novo Nome Do Grupo`)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
lolizita.groupUpdateSubject(idgrup, `${body.slice(9)}`)
lolizita.sendMessage(from, '『❗』Nome do grupo alterado', text, {
quoted: tob
})
break

case 'setdesk': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) 
if (args.length < 1) return enviar(`『❗』Use: ${p + comando} Nova Descrição`)
lolizita.groupUpdateDescription(from, `${body.slice(9)}`)
lolizita.sendMessage(from, '『❗』Descrição do grupo alterada', text, {
quoted: tob
})
break

case 'setppgc': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) 
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const medipp = await lolizita.downloadAndSaveMediaMessage(ftgp)
await lolizita.updateProfilePicture (from, medipp)
enviar('『❗』foto do grupo alterada')
break

case 'marcar':
//「 ❗ 」By Tobi シ︎
lolizita.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `⪧ Total: ${groupMembers.length} membros\n`
for (let mem of groupMembers) {
todos += `⪧ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(' '+todos+' ', members_id, true)
break

case 'infogp': 
//「 ❗ 」By Tobi シ︎
lolizita.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(ptbr.group())
ppUrl = await lolizita.getProfilePicture(from) 
buffer = await getBuffer(ppUrl)
lolizita.sendMessage(from, buffer, image, {quoted: tob, thumbnail:null, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO*:\n${groupDesc}`})
break

case 'listadmins': 
case 'listadmin':
case 'adminlist':
case 'listadm':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
adl = `Lista de administradores do grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adl, groupAdmins, true)
break

case 'linkgp': 
case 'linkgc':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) 
linkgc = await lolizita.groupInviteCode(from)
enviar('https://chat.whatsapp.com/'+linkgc)
break

case 'notif': 
//「 ❗ 」By Tobi シ︎
if (!isGroupAdmins) return enviar(ptbr.admin())
lolizita.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(ptbr.group())
if (args.length < 1) return enviar(`『❗』Use: ${p + comando} Aviso!`)
aviso  = `Aviso de: @${sender.split("@")[0]}\n\nAviso: ${body.slice(7)}`
group = await lolizita.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: aviso,
contextInfo: {
mentionedJid: jids
},
quoted: tob
}
await lolizita.sendMessage(from, options, text)
break

case 'supertag': 
//「 ❗ 」By Tobi シ︎
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await lolizita.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await lolizita.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: tob
}
ini_buffer = fs.readFileSync(file)
lolizita.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await lolizita.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await lolizita.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: tob
}
ini_buffer = fs.readFileSync(file)
lolizita.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await lolizita.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await lolizita.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4',
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: tob
}
ini_buffer = fs.readFileSync(file)
lolizita.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await lolizita.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await lolizita.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4',
contextInfo: { mentionedJid: mem },
quoted: tob
}
ini_buffer = fs.readFileSync(file)
lolizita.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
enviar(`[❗] Responder imagem/adesivo/áudio/vídeo com a legenda ${p + comando} para marcar`)
}
break    

case 'delete': //Grupo
case 'del':
case 'apagar':
//「 ❗ 」By Tobi シ︎
if (!isGroup)return enviar(ptbr.group())
if (!isGroupAdmins)return enviar(ptbr.admin())
try {
lolizita.deleteMessage(from, {
id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
enviar('Só é possível deletar mensagens minhas')
}
break

case 'welcome':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) 
if (args.length < 1) return enviar(`[❗]On/Off, Exemplo ${p + comando} On`)
if (args[0] === 'on') {
if (isWelcome) return enviar('*[❗] ja esta ativado amigo...*')
welcome.push(from)
fs.writeFileSync('./base de dados/arquivos/welcome.json', JSON.stringify(welcome))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = welcome.indexOf(welcome.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
welcome.splice(position, 1)
fs.writeFileSync('./base de dados/arquivos/welcome.json', JSON.stringify(welcome))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]ativar/desativar, Exemplo ${p + comando} On`)
}
break

case 'leveling':
case 'leveis':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (args.length < 1) return enviar(`[❗]ativar/desativar, Exemplo ${p}${comando} ativar`)
if (args[0] === 'on') {
if (isLevelingOn) return enviar('*[❗] ja esta ativado amigo...*')
_leveling.push(from)
fs.writeFileSync('./base de dados/arquivos/leveling.json', JSON.stringify(_leveling))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = _leveling.indexOf(_leveling.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
_leveling.splice(position, 1)
fs.writeFileSync('./base de dados/arquivos/leveling.json', JSON.stringify(_leveling))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]on/off, Exemplo ${p}${comando} on`)
}
break

case 'antilink':
case 'antilinks':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAntiLink) return enviar('*[❗] ja esta ativado amigo...*')
antilink.push(from)
fs.writeFileSync('./base de dados/arquivos/antilink.json', JSON.stringify(antilink))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = antilink.indexOf(antilink.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
antilink.splice(position, 1)
fs.writeFileSync('./base de dados/arquivos/antilink.json', JSON.stringify(antilink))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
}
break

case 'antifake':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAntifaker) return enviar('*[❗] ja esta ativado amigo...*')
antifaker.push(from)
fs.writeFileSync('./base de dados/arquivos/antifaker.json', JSON.stringify(antifaker))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = antifaker.indexOf(antifaker.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
antifaker.splice(position, 1)
fs.writeFileSync('./base de dados/arquivos/antifaker.json', JSON.stringify(antifaker))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
}
break
//<~FIM DOS COMANDOS EM GRUPOS

//<~COMEÇO DOS COMANDOS STICKERS
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
case 'gif':
case 'f':
case 'figu':
case 'figurinha':
case 'fig':
//「 ❗ 」By Tobi シ︎
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await lolizita.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
})
.on('error', function (err) {
fs.unlinkSync(media)
enviar(ptbr.stick())
})
.on('end', function () {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async (error) => {
if (error) return enviar(ptbr.stick())
lolizita.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: tob})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
 })
 })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await lolizita.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
})
.on('error', function (err) {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function () {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async (error) => {
if (error) return enviar(ptbr.stick())
lolizita.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: tob})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await lolizita.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
enviar(ptbr.waitgif())
keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return enviar('ocorreu um erro')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(ptbr.stick())
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ranw} -o ${ranw}`, async (error) => {
if (error) return enviar(ptbr.stick())
lolizita.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: tob})
fs.unlinkSync(ranw)
})
})
})
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'st':
//「 ❗ 」By Tobi シ︎
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await lolizita.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
enviar(ptbr.stick())
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
lolizita.sendMessage(from, buffer, sticker, {
quoted: tob
})
fs.unlinkSync(rano)
})
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await lolizita.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`Falha na conversão de ${tipe} para sticker`)
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
lolizita.sendMessage(from, buffer, sticker, {
quoted: tob
})
fs.unlinkSync(rano)
})
})
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'stk':
//「 ❗ 」By Tobi シ︎
lolizita.updatePresence(from, Presence.composing)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await lolizita.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
fs.unlinkSync(media)
enviar(ptbr.stick())
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar(ptbr.stick())
lolizita.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: tob
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await lolizita.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar(ptbr.stick())
lolizita.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: tob
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'toimg':
//「 ❗ 」By Tobi シ︎
lolizita.updatePresence(from, Presence.composing)
if (!isQuotedSticker) return enviar('『❗』Você precisa marcar um sticker não animado para isso')
enviar(mess.espere)
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medtmg = await lolizita.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return enviar('『❗』falha ao converter sticker em imagem')
buffer = fs.readFileSync(ran)
lolizita.sendMessage(from, buffer, image, {
quoted: tob,
caption: '🐤'
})
fs.unlinkSync(ran)
})
break

case 'togif': 
//「 ❗ 」By Tobi シ︎
if (!isQuotedSticker) return enviar(`『❗』Você precisa marcar um sticker animado para isso`)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await lolizita.downloadAndSaveMediaMessage(encmediaaa)
enviar(mess.espere)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
lolizita.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: tob, caption: '🐤'})
fs.unlinkSync(mediaaa)
}
break

case 'attp': 
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Use dessa forma:\nComando: ${p}attp ${SeuNome} gado`)
enviar(mess.espere)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
lolizita.sendMessage(from, attp2, sticker, {quoted: tob})
break

case 'rename':
//「 ❗ 」By Tobi シ︎
var namaPackss = q.substring(0, q.indexOf('|') - 0)
var authorPackss = q.substring(q.lastIndexOf('|') + 1)
stiker_wm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await lolizita.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {
"sticker-pack-id": stickerpackid,
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
"android-app-store-link": googlelink,
"ios-app-store-link": applelink
}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))

if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")

wm = Buffer.concat([f, ff, fff, ffff])

fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
lolizita.sendMessage(from, fs.readFileSync(exifst), sticker, {
quoted: tob
})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
fs.unlinkSync('undefined.webp')
})
});
break
/*
*-𝐹𝐼𝑀
*/
case 'play':   
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Exemplo : ${p + comando} Plutão`)	
enviar(mess.espere)
query = args.join(" ")
site = await fetchJson(`https://akame-api2.herokuapp.com/api/ytplay?query=${query}&apikey=ovohSOXk`)
imagem = await getBuffer(`https://api-exteam.herokuapp.com/api/card-spotify?titulo=${encodeURIComponent(site.result.title)}&author=${encodeURIComponent(site.result.channel)}&album=Playlist do Private&capa=${site.result.thumb}`)
msc = await getBuffer(site.result.result)
lolizita.sendMessage(from, imagem, image, {quoted: tob})
lolizita.sendMessage(from, msc, audio, {mimetype: 'audio/mp4', ptt: true, quoted: play_quetod})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'play1': 
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Exemplo : ${p + comando} Plutão`)	
hay = body.slice(6)
enviar(mess.espere)
play = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=S38aL2CO2Ez4wZjJWxD2vaJKKrC&q=${hay}`)
lagu = await getBuffer(play.result.url_audio)
lolizita.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: play_quetod})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'play2':    
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Exemplo : ${p + comando} Plutão`)	
enviar(mess.espere)
play = body.slice(7)
trescapa = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${play}`)
lagu = await getBuffer(trescapa.result.url)
lolizita.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: play_quetod})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'play3':    
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar('Qual o nome da música?')
enviar(mess.espere)
play = body.slice(7)
play_4 = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${play}`)
buffer = await getBuffer(play_4.result.thumb)
lagu = await getBuffer(play_4.result.url)
lolizita.sendMessage(from, buffer, image, {quoted: tob, caption: `${site.result.title}`})
lolizita.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: play_quetod})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'tomp3': 
//「 ❗ 」By Tobi シ︎
lolizita.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return enviar(`Marque um vídeo com ${p}tomp3`)
enviar(mess.espere)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await lolizita.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
if (err) return enviar('❌falha ao converter video para mp3❌')
buffer = fs.readFileSync(ran)
lolizita.sendMessage(from, buffer, audio, {
mimetype: 'audio/mp4', ptt:true, quoted: tob
})
fs.unlinkSync(ran)
})
break

case 'rapido':  
case 'nightcore':
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar('『❗』Aguarde, Adicionando efeito rápido....')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bmedia = await lolizita.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bmedia} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bmedia)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
lolizita.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: tob})
fs.unlinkSync(ran)
})
break   

case 'devagar': 
case 'slow':
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar('『❗』Aguarde, Adicionando efeito devagar....')
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await lolizita.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
lolizita.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: tob})
fs.unlinkSync(ran)
})
break

case 'esquilo': 
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar('『❗』Aguarde, Adicionando efeito esquilo....')
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await lolizita.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
lolizita.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: tob})
fs.unlinkSync(ran)
})
break

case 'gemuk': 
case 'gigante':
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar('『❗』Aguarde, Adicionando efeito gigante....')
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await lolizita.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
lolizita.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: tob})
fs.unlinkSync(ran)
})
break

case 'fast': 
case 'rapid':
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar('『❗』Aguarde, Adicionando efeito rapido 3x....')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
amedia = await lolizita.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${amedia} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(amedia)
if (err) return enviar('Erro')
hah = fs.readFileSync(ran)
lolizita.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: tob})
fs.unlinkSync(ran)
})
break

case 'baixo': 
case 'bass':
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar('『❗』Aguarde, Adicionando efeito baixo 50hz....')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await lolizita.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
lolizita.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: tob})
fs.unlinkSync(ran)
})
break

case 'earrape': 
case 'estourar':       
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar('『❗』Aguarde, Adicionando efeito estorado....')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await lolizita.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
lolizita.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: tob})
fs.unlinkSync(ran)
})
break
//<~FIM DOS COMANDOS DE MUSICAS

//<~COMEÇO DOS COMANDOS DE NUVEM
case 'liststik':
//「 ❗ 」By Tobi シ︎
teks = `Lista de sticker : \n`
for (let awokwkwk of setiker) {
teks += `⪧ ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*\nUse o comando\n*${p}getstik (nome do pacote)*\nPara pegar adesivos`
lolizita.sendMessage(from, teks.trim(), extendedText, { quoted: tob, contextInfo: { "mentionedJid": setiker } })
break

case 'getstik':
//「 ❗ 」By Tobi シ︎
namastc = body.slice(9)
try {
result = fs.readFileSync(`./base de dados/temp/stick/${namastc}.webp`)
lolizita.sendMessage(from, result, sticker, {quoted: tob, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} catch {
enviar('Pacote não registrado')
}
break

case 'addstik':
//「 ❗ 」By Tobi シ︎
if (!isQuotedSticker) return enviar('Responder o adesivo')
if (!isOwner) return enviar(mess.only.ownerB)
svst = body.slice(9)
if (!svst) return enviar('Qual é o nome do adesivo?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await lolizita.downloadMediaMessage(boij)
setiker.push(`${svst}`)
fs.writeFileSync(`./base de dados/temp/stick/${svst}.webp`, delb)
fs.writeFileSync('./base de dados/temp/stik.json', JSON.stringify(setiker))
lolizita.sendMessage(from, `Adicionando adesivo com sucesso\nConferido por ${p}liststik`, MessageType.text, { quoted: tob })
break

case 'listvn':
case 'vnlist':
//「 ❗ 」By Tobi シ︎
teks = '*Lista de audio:*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*\nUse comandos\n*${p}getvn (nome do pacote)*\nPara pegar o audio`
lolizita.sendMessage(from, teks.trim(), extendedText, { quoted: tob, contextInfo: { "mentionedJid": audionye } })
break

case 'addvn':
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um audio!!!')
if (!isOwner) return enviar(mess.only.ownerB)
svst = body.slice(7)
if (!svst) return enviar('Qual é o nome do audio')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await lolizita.downloadMediaMessage(boij)
audionye.push(`${svst}`)
fs.writeFileSync(`./base de dados/temp/audio/${svst}.mp3`, delb)
fs.writeFileSync('./base de dados/temp/vn.json', JSON.stringify(audionye))
lolizita.sendMessage(from, `Sucesso ao adicionar audio\nConferido por ${p}listvn`, MessageType.text, { quoted: tob })
break

case 'getvn':
//「 ❗ 」By Tobi シ︎
namastc = body.slice(7)
try {
buffer = fs.readFileSync(`./base de dados/temp/audio/${namastc}.mp3`)
lolizita.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: tob, ptt: true })
} catch {
enviar('Pacote não registrado')
}
break

case 'listimg':
//「 ❗ 」By Tobi シ︎
teks = '*Lista Imagem :*\n\n'
for (let awokwkwk of imagenye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${imagenye.length}*\nUse o comando\n*${p}getimg (nome do pacote)*\nPara tirar fotos`
lolizita.sendMessage(from, teks.trim(), extendedText, { quoted: tob, thumbnail:null, contextInfo: { "mentionedJid": imagenye } })
break

case 'addimg':
//「 ❗ 」By Tobi シ︎
if (!isQuotedImage) return enviar('responder imagem ')
if (!isOwner) return enviar(mess.only.ownerB)
svst = body.slice(8)
if (!svst) return enviar('Qual é o nome da imagem ')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await lolizita.downloadMediaMessage(boij)
imagenye.push(`${svst}`)
fs.writeFileSync(`./base de dados/temp/foto/${svst}.jpeg`, delb)
fs.writeFileSync('./base de dados/temp/image.json', JSON.stringify(imagenye))
lolizita.sendMessage(from, `Adicionando Video com Sucesso\nConferido por ${p}listimg`, MessageType.text, { quoted: tob })
break

case 'getimg':
//「 ❗ 」By Tobi シ︎
namastc = body.slice(8)
try {
buffer = fs.readFileSync(`./base de dados/temp/foto/${namastc}.jpeg`)
lolizita.sendMessage(from, buffer, image, { quoted: tob, caption: `Resultado do banco de dados : ${namastc}.jpeg` })
} catch {
enviar('Pack tidak terdaftar')
}
break

case 'listvid':
//「 ❗ 」By Tobi シ︎
teks = '*Lista de Videos :*\n\n'
for (let awokwkwk of videonye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}*\nUse o comando\n*${p}getvid (nome do pacote)*\nPara pegar um video`
lolizita.sendMessage(from, teks.trim(), extendedText, { quoted: tob, contextInfo: { "mentionedJid": videonye } })
break

case 'addvid':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return enviar(mess.only.ownerB)
if (!isQuotedVideo) return enviar('Marque um video')
svst = body.slice(8)
if (!svst) return enviar('O nome do video')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await lolizita.downloadMediaMessage(boij)
videonye.push(`${svst}`)
fs.writeFileSync(`./base de dados/temp/vídeo/${svst}.mp4`, delb)
fs.writeFileSync('./base de dados/temp/vid.json', JSON.stringify(videonye))
lolizita.sendMessage(from, `Sucesso Adicionais Video\nConferido por ${p}listvid`, MessageType.text, { quoted: tob })
break

case 'getvid':
//「 ❗ 」By Tobi シ︎
namastc = body.slice(8)
try {
buffer = fs.readFileSync(`./base de dados/temp/vídeo/${namastc}.mp4`)
lolizita.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: tob })
} catch {
enviar('Pacote não registrado')
}
break
//<~FIM DOS COMANDOS DE NUVEM

//<~COMEÇO DOS COMANDOS DE JOGOS
case 'amongus': 
//「 ❗ 」By Tobi シ︎
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
mentions(`${sus}`, mentioned, true)
break

case 'getname':
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Tag alguém`)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const jajzjKk = lolizita.contacts[mentioned] != undefined ? lolizita.contacts[mentioned].vname || lolizita.contacts[mentioned].notify: undefined
nome = `${jajzjKk}`
lolizita.sendMessage(from, nome, text, {quoted: tob})	
break

case 'dado': 
//「 ❗ 」By Tobi シ︎
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./base de dados/datauser/dados/'+dadu+'.webp')
lolizita.sendMessage(from, dador, sticker, {quoted: tob})
break

case 'tagme':
//「 ❗ 」By Tobi シ︎
const tagme = {
text: `@${sender.split("@")[0]} 🧙‍♂️`,
contextInfo: {mentionedJid: [sender]
}
}
lolizita.sendMessage(from, tagme, text)
break

case "ppt": 
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(ptbr.tterro())
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return enviar(ptbr.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do bot"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
enviar(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
enviar(pph)
}
break

case 'gado': 
//「 ❗ 」By Tobi シ︎
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
enviar(hisil)
break

case 'sn': 
//「 ❗ 」By Tobi シ︎
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return lolizita.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${p}sn O ${SeuNome} é um baiano preguiçoso?`, text, {quoted: tob})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
enviar(hasil)
break

case 'chance': 
//「 ❗ 」By Tobi シ︎
lolizita.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return lolizita.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${p}chance do ${SeuNome} ser um trouxa`, text, {quoted: tob})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
lolizita.sendMessage(from, hasil, text, {quoted: tob, contextInfo: {mentionedJid: [sender]}})
break

case 'ttt': 
//「 ❗ 」By Tobi シ︎
const limitrl = getLimit(sender, daily)
if (!isGroup) {
enviar(ptbr.group())
} else if (tttset.tttstatus == "on") {
enviar(`
「❗ESPERE❗ 」

 Alguém já está jogando no momento
 Por favor aguarde 8 minutos`)
} else if (tttset.waitingTime == "on") {
enviar(`
「❗ESPERE 8 MINUTOS❗ 」

Alguém jogou recentemente
Por favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
enviar(`
「❗Defina a dificuldade❗ 」

${p}ttt easy
Dificuldades: easy, normal... 
hard e impossible....`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
enviar(`
「❗ESPERE❗」

Opa, deixe seus amigos jogarem.
também, tente novamente Em 8 minutos.`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`╭◪「❗COMEÇOU❗ 」\n╰───────────────╮  \n╭───────────────╯\n├❏ O Jogo Começou!!!\n├❏ Modo: ${tttset.tttdifficulty}\n╰───────────────╯`, text, tescuk, crtt)
lolizita.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
lolizita.sendMessage(from,`Caso não saiba como jogar digite: ${p}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'lolizita': 
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Use ${p}loli texto`)
try { 
capaz = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (capaz.error) return enviar('Não sei ler o que não existe 🐤 (converse cmg)')
lolizita.sendMessage(from, `${capaz.success} 🐤`, text, {quoted: mek})
} catch {
enviar(ptbr.erro)
}
break 

case 'ddd':
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Use ${p + comando} 94`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
lolizita.sendMessage(from, dddlist, text, {quoted: tob})	
break

case 'level':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isLevelingOn) return enviar(ptbr.levelnoton())
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return enviar(ptbr.levelnol())
const requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
const getLevel = getLevelingLevel(sender)
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\n⪧𝖳𝚊𝚐: @${sender.split('@')[0]}\n${up_porcenntagem}`}}}
lolizita.sendMessage(from, leveltab(pushname, userLevel, userXp, patt, getLevel), text, {
quoted: level_quetod,
contextInfo: {
mentionedJid: [sender]
}
})
.catch(async(err) => {
console.error(err)
await enviar(`Error!\n${err}`)
})
break

case 'ranklevel':
case 'nivelrall':
//「 ❗ 」By Tobi シ︎
if (!isLevelingOn) return enviar(ptbr.levelnoton())
let userh = _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = `*〈👾 Rᴀɴᴋ Lᴇᴠᴇɪs 👾〉*\n\n`
let nom = 0
try {
for (let i = 0; i < 5; i++) {
nom++
leaderboardlvl += `⪧ ⃝༘⃕ꪶ📱ꫂ @${userh[i].id.replace('@s.whatsapp.net', '')}\n⪧ ⃝༘⃕ꪶ👾ꫂ 𝚇ᴘ: ${userh[i].xp}\n⪧ ⃝༘⃕ꪶ🌀ꫂ 𝙻ᴇᴠᴇʟ: ${userh[i].level}\n\n`
}
lolizita.sendMessage(from, leaderboardlvl, text, {quoted: tob})
} catch (err) {
console.error(err)
await enviar(`pelo menos 10 usuários para poder acessar o banco de dados`)
}
break

case 'coord': 
//「 ❗ 」By Tobi シ︎
tttset.playertest = sender
if (!isGroup) {
enviar(ptbr.group())
} else if (tttset.tttstatus == "off") {
enviar(`Você ainda não iniciou o jogo\nDigite ${p}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
enviar(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
enviar(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
enviar(`Digite o comando com uma coordenada\nExemplo: ${p}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
enviar(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
lolizita.sendMessage(from, `『❗』Parabens *${pushname}* Você ganhou no jogo da velha\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
lolizita.sendMessage(from, `『❗』Parabens *${pushname}* Você Ganhou.`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "??"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "??"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
lolizita.sendMessage(from, `『❗』Parabens *${pushname}* Você ganhou.\n\n➣  PUNIÇÃO: +${randomTTTXP} XP 🔮`, text)
} else {
lolizita.sendMessage(from, `『❗』Vitoria da *${NomeDoBot}* Você Perdeu amigo!`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
lolizita.sendMessage(from, `『❗』Empate entre *${pushname}* e *${NomeDoBot}*\n\n ➣ NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
lolizita.sendMessage(from, `『❗』Empate entre *${pushname}* e *${NomeDoBot}*`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break

case 'ttthelp': 
//「 ❗ 」By Tobi シ︎
lolizita.sendMessage(from, ttthelp(p)
, text)
break

case 'tttme': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
lolizita.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tttrank': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 7; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 3) {board += `${i + 1}º 🏆 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 4) {board += `${i + 1}º 💎 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 5) {board += `${i + 1}º 🐂 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 6) {board += `${i + 1}º 🐂 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await lolizita.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: tob})
}
break

case 'pau':
//「 ❗ 」By Tobi シ︎
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
enviar(hasil)
break

case 'slot': 
//「 ❗ 」By Tobi シ︎
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : ??') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '?? : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : 🍊 : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`Consiga 3 iguais para ganhar
╭╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╝

${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
enviar(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
lolizita.sendMessage(from, slott, text, {quoted: tob})
break
   
case 'gay':
//「 ❗ 」By Tobi シ︎
lolizita.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não???'} else if (boiola > 51) {bo = 'você é gay??'
}
hasil = `Você é ${random}% gay\n\n${bo}`
enviar(hasil)
break

case 'roleta': 
//「 ❗ 」By Tobi シ︎
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./base de dados/figurinhas/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
lolizita.sendMessage(from, figb, sticker, {quoted: tob})
}, 2100)
}
setTimeout( () => {
lolizita.sendMessage(from, morte, text, {quoted: tob})
}, 2300)
break

case 'caracoroa': 
//「 ❗ 」By Tobi シ︎
const cara = fs.readFileSync('./base de dados/datauser/cara/cara.webp');
const coroa = fs.readFileSync('./base de dados/datauser/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
enviar(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./base de dados/datauser/cara/'+fej+'.webp')
lolizita.sendMessage(from, cararoa, sticker, {quoted: tob})
break
//<~FIM DOS COMANDOS DE JOGOS

//<~COMEÇO DOS HENTAIS
case  'hentai': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
tk = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(tk.url)
lolizita.sendMessage(senderr, buffer, image, {caption: 'Baum né?', quoted: tob, thumbnail:null})
break

case  'neko':
//「 ❗ 」By Tobi シ︎
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
znn = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(znn.url)
lolizita.sendMessage(senderr, buffer, image, {caption: `${comando}, certo?`, quoted: tob, thumbnail:null})
break

case 'eroneko':
//「 ❗ 」By Tobi シ︎
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
tobiq = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=hardianto`)
kon = await getBuffer(tobiq)
lolizita.sendMessage(senderr, kon, image, {caption: `Hehehehe`, quoted: tob, thumbnail:null})
break

case 'kitsune':
//「 ❗ 」By Tobi シ︎
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
tobiw = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=hardianto`)
kon = await getBuffer(tobiw)
lolizita.sendMessage(senderr, kon, image, {caption: `Linda dms!`, quoted: tob, thumbnail:null})
break

case 'pussy':
//「 ❗ 」By Tobi シ︎
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
tobie = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=hardianto`)
lolizita.sendMessage(senderr, tobie, image, {caption: `Op!!🤯`, quoted: tob, thumbnail:null})
break

case 'trapnime':
//「 ❗ 」By Tobi シ︎
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
tobir = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(tobir.url)
lolizita.sendMessage(senderr, buffer, image, { quoted: tob, thumbnail:null})
break

case 'bj':
//「 ❗ 」By Tobi シ︎
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
tobit = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=hardianto`)
kon = await getBuffer(tobit)
lolizita.sendMessage(senderr, kon, image, {caption: `${comando}, certo?`, quoted: tob, thumbnail:null})
break
//<~FIM DOS COMANDOS DE HENTAI

//<~COMEÇO DOS COMANDOS ANIMES
case 'wallpaper':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
tobiy = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=hardianto`)
kon = await getBuffer(tobiy)
lolizita.sendMessage(from, kon, image, {caption: 'Gostou?', quoted: tob, thumbnail:null})
break

case  'megumin':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
tobiu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(tobiu.url)
lolizita.sendMessage(from, buffer, image, {caption: `${comando}, certo?`, quoted: tob, thumbnail:null})
break

case 'neko2':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
tobio = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
kon = await getBuffer(tobio)
lolizita.sendMessage(from, kon, image, { quoted: tob, thumbnail:null})
break

case 'feedsfw':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
tobim = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=feed&apikey=hardianto`)
lolizita.sendMessage(from, tobim, image, {quoted: mek, thumbnail:null})
break

case 'nhug':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
loliq = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=kemonomimi&apikey=hardianto`)
lolizita.sendMessage(from, loliq, image, {quoted: tob, thumbnail:null})
break

case 'foxgirl':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
loliw = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=foxGirl&apikey=hardianto`)
lolizita.sendMessage(from, loliw, image, {quoted: tob, thumbnail:null})
break

case 'sfwpat':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
lolie = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=pat&apikey=hardianto`)
lolizita.sendMessage(from, lolie, image, {quoted: tob, thumbnail:null})
break

case 'sfwkiss':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
lolir = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=kiss&apikey=hardianto`)
lolizita.sendMessage(from, lolir, image, {quoted: tob, thumbnail:null})
break

case 'sfwpoke':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
lolit = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=hardianto`)
lolizita.sendMessage(from, lolit, image, {quoted: tob, thumbnail:null})
break

case 'sfwsmug':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
loliy = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=smug&apikey=hardianto`)
lolizita.sendMessage(from, loliy, image, {quoted: tob, thumbnail:null})
break

case 'sfwpat':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
loliu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=pat&apikey=hardianto`)
lolizita.sendMessage(from, loliu, image, {quoted: tob, thumbnail:null})
break

case 'beijo':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
tobip = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=kiss&apikey=hardianto`)
kon = await getBuffer(tobip)
lolizita.sendMessage(from, kon, image, { quoted: tob, thumbnail:null})
break

case 'kemonomimi':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
tobia = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=kemonomimi&apikey=hardianto`)
kon = await getBuffer(tobia)
lolizita.sendMessage(from, kon, image, { quoted: tob, thumbnail:null})
break
//<~FIM DOS COMANDOS DE ANIMES

//<~COMEÇO DOS COMANDOS DO DONO
case 'bc':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return  enviar(ptbr.ownerB())
if (args.length < 1) return enviar('Cadê o texto?')
tobis = await lolizita.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await lolizita.downloadMediaMessage(encmedia)
for (let _ of anu) {
lolizita.sendMessage(_.jid, buff, image, {caption: `[ 𝚃ʀᴀɴsᴍɪᴄ̧ᴀ̃ᴏ ᴅᴇ  𝙰ᴠɪsᴏ ]\n\n${body.slice(4)}`})
}
enviar('Transmissão enviada com sucesso')
} else {
for (let _ of tobis) {
sendMess(_.jid, `[ 𝚃ʀᴀɴsᴍɪᴄ̧ᴀ̃ᴏ ᴅᴇ 𝙰ᴠɪsᴏ ]\n\n${body.slice(4)}`)
}
enviar('Transmissão enviada com sucesso')
}
break

case 'bcstik':
case 'bcfig':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return enviar('Quem é Você, Você não é meu dono ???')
if (!isQuotedSticker) return enviar('Marque uma figurinha!!!')
bcsticker = await lolizita.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await lolizita.downloadMediaMessage(encmedia)
for (let _ of bcsticker) {
lolizita.sendMessage(_.jid, bc, sticker) 
}
enviar(`Figurinha envianda para: ${totalchat.length} chats`)
}
break

case 'clone': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isOwner) return  enviar(ptbr.ownerB())
if (args.length < 1) return enviar('Mencione quem devo roubar a foto de perfil')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await lolizita.getProfilePicture(id)
buffer = await getBuffer(pp)
lolizita.updateProfilePicture(botNumber, buffer)
mentions(`Roubei a foto de perfil de: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
enviar('ocorreu um erro')
}
break

case 'block': 
case 'bloquear':
//「 ❗ 」By Tobi シ︎
lolizita.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(ptbr.group())
if (!isOwner) return enviar(ptbr.ownerB())
lolizita.blockUser (`${body.slice(8)}@c.us`, "add")
lolizita.sendMessage(from, `Número de bloqueio, pedido recebido`, text, {
quoted: tob
})
break

case 'unblock': 
case 'desbloquear':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isOwner) return enviar(ptbr.ownerB())
lolizita.blockUser (`${body.slice(9)}@c.us`, "remove")
enviar(`Desbloquear, comando aceito`)
break

case 'ban': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isOwner) return  enviar(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot`
mentions(`${susp}`, mentioned, true)   
break

case 'unban': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isOwner) return  enviar(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot`
mentions(`${susp}`, mentioned, true)   
break

case 'antipalavras':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(ptbr.group())
if (!isBotGroupAdmins) return enviar(`[📍] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return enviar(`[❗]ativar/desativar, Exemplo ${p + comando} ativar`)
if (args[0] === 'on') {
if (isPalavrão) return enviar('*Já esta ativado...*')
palavrão.push(from)
fs.writeFileSync('./base de dados/arquivos/palavrão.json', JSON.stringify(palavrão))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
palavrão.splice(from, 1)
fs.writeFileSync('./base de dados/arquivos//palavrão.json', JSON.stringify(palavrão))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]on/off, Exemplo ${p + comando} on`)
}
break

case 'addpalavra':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return  enviar(ptbr.ownerB())
if (!isPalavrão) return enviar(`『❗』A função anti palavras está desativada`)
if (args.length < 1) return enviar( `Use assim : ${p + comando} [palavra]. exemplo ${p + comando} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./lib/palavras.json', JSON.stringify(palavra))
await enviar(`Palavra *${q}* adicionado na lista com sucesso!`)
break

case 'delpalavra':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return  enviar(ptbr.ownerB())
if (!isPalavrão) return enviar(`『❗』A função anti palavras está desativada`)
if (args.length < 1) return enviar( `Use assim : ${p + comando} [palavra]. exemplo ${p + comando} puta`)
let dbw = body.slice(12)
const position = palavra.indexOf(dbw)
palavra.splice(position, 1)
fs.writeFileSync('./lib/palavras.json', JSON.stringify(palavra))
await enviar(`Palavra *${q}* removida da lista com sucesso!`)
break 

case 'listname':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return  enviar(ptbr.ownerB())
if (!isPalavrão) return enviar(`『❗』A função anti palavras está desativada`)
teks = `Lista de palavras: \n\n`
for (let ahzhgxnshxg of palavra) {
teks += `⪧ ${ahzhgxnshxg}\n`
}
teks += `\nTotal : ${palavra.length}\nUse o comando\n${p}Addpalavra『Nome』\nPara adicionar texto\n\n E use o comando\n${p}Delpalavra『Nome』\nPara tirar texto`
lolizita.sendMessage(from, teks.trim(), extendedText, { quoted: tob, contextInfo: { "mentionedJid": palavra } })
break

case 'setname':
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Use ${p + comando} Churrasco-Bot`)
if (!isOwner) return  enviar(ptbr.ownerB())
NomeDoBot = args[0]
enviar(`*O nome do bot foi alterado com sucesso para*: ${q}`)
break 		 		

case 'setprefix':
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Use ${p + comando} !`)
if (!isOwner) return  enviar(ptbr.ownerB())
p = args[0]
enviar(`*O prefix do bot foi alterado com sucesso para*: ${q}`)
break 		 		

case 'setdono':
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Use ${p + comando} kapa`)
if (!isOwner) return  enviar(ptbr.ownerB())
SeuNome = args[0]
enviar(`*O nome do dono foi alterado com sucesso para*: ${q}`)
break 		 		

case 'setowner':
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Use ${p + comando} 55xxx`)
if (!isOwner) return  enviar(ptbr.ownerB())
OwnerNumber = args[0]
enviar(`*O número do dono foi alterado com sucesso para*: ${q}`)
break 		 		

case 'ping':
//「 ❗ 」By Tobi シ︎
const timestamp = speed();
const latensi = speed() - timestamp
lolizita.updatePresence(from, Presence.composing)
uptime = process.uptime()
lolizita.sendMessage(from, `
*「 ⚙️-❪SPEED/BOT❫-⚙️ 」*
*Velocidade de resposta do bot*
*Velocidade* : ${latensi.toFixed(4)} _Segundo_`,
text, {
quoted: tob
})
break

case 'visuchat':
//「 ❗ 」By Tobi シ︎
const readallid = await lolizita.chats.all()
lolizita.setMaxListeners(25)
for (let xyz of readallid) {
await lolizita.chatRead(xyz.jid)
}
lolizita.sendMessage(from, `Pronto`, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": "Todos os chats foram vistos",
'jpegThumbnail': fs.readFileSync('./src/bot.jpg')
}
}
}
})
break

case 'bloqueados': 
//「 ❗ 」By Tobi シ︎
teks = 'Esta é uma lista de números bloqueados :\n'
for (let block of blocked) {
teks += `~> @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
lolizita.sendMessage(from, teks.trim(), extendedText, {quoted: tob, contextInfo: {"mentionedJid": blocked}})
break

case 'desligar':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return enviar(ptbr.ownerB)
enviar('Bot desligado')
setTimeout(() => {
lolizita.close()
}, 3000)
break

case 'reiniciar': 
//「 ❗ 」By Tobi シ︎
if (!isOwner) return enviar(ptbr.ownerB())
npm = `npm start`
enviar("Aguarde, Estou Reiniciando...")
exec(npm, (err, stdout) => {
if(err) return lolizita.sendMessage(from, "Erro", text, {quoted: tob})
if (stdout) {
lolizita.sendMessage(from, stdout, text, {quoted: tob})
} 
})
break

case 'clearchat': 
case 'clearall':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return  enviar(ptbr.ownerB())
tobif = await lolizita.chats.all()
list_chat = await lolizita.chats.all()
for (let chat of list_chat) {
lolizita.modifyChat(chat.jid, "delete", {includeStarred: false})
}
lolizita.sendMessage(from, `Pronto`, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"caption": `Todos os chats foram apagados`
}
}
}
})
break
//<~FIM DOS COMANDOS DE DONOS

//<~COMEÇO DOS COMANDOS TESTES
//<~COMANDOS NÃO LISTADOS NO MENU
case 'kapaii':
enviar(mess.espere)
teste = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=feed&apikey=hardianto`)
lolizita.sendMessage(from, teste, image, {quoted: mek, thumbnail:null})
break

case 'link':
linkkk = await lolizita.groupInviteCode(from)
var kapakapakapa = `${sender.split("@")[0]}`
lolizita.sendMessage(`${kapakapakapa}@s.whatsapp.net`, `'https://chat.whatsapp.com/'+linkkk`, MessageType.text)
break
//<~FIM DOS COMANDOS DE TESTES

default:

if (body == `${p + comando}`)  {
	
hsl = `『❗』Comando ${p + comando} não existe`
lolizita.sendMessage(from, hsl, text, {quoted: mek})
lolizita.updatePresence(from, Presence.composing)
result = fs.readFileSync(`./base de dados/figurinhas/burro_sticker.webp`)
lolizita.sendMessage(from, result, sticker)
console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('CMD', "red"), ']', color('Comando', "yellow"), color(`${p}${comando}`, "yellow"), color('não registrado', "yellow"), color('de', "yellow"), color(pushname, "yellow"))
}
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
enviar(ptbr.erro)
}
})
}
starts()
//<~FIM DOS COMANDOS
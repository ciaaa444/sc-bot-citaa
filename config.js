require("dotenv").config();

global.owner = ["6283191088031"]; 
global.mods = ["6283191088031"]; 
global.prems = ["6283191088031"]; 
global.nameowner = "𝗇𝖾𝗏𝖺𝖺 🇨🇳";
global.numberowner = "6283878929540";
global.mail = "-";
global.gc = "https://whatsapp.com/channel/0029Vb7RdjHCBtxFJ1M6Tz32";
global.instagram = "https://instagram.com/fitya_taa"; 
global.wm = "৻ꪆ 𝗓𝗁𝖾𝗇𝗀 𝗌𝗁𝗎𝗒𝗂";
global.wait = "_*Tunggu sebentar, sedang diproses...*_"; 
global.eror = "_*Terjadi kesalahan, coba lagi nanti!*_"; 
global.stiker_wait = "*Stiker sedang dibuat, tunggu ya...*";
global.packname = "𝗻𝗼𝘃𝗶𝗶 - 𝗯𝗼𝘁";
global.author = "𝘁𝗲𝗹𝗲:@𝗳𝗶𝘁𝘆𝗮_𝘁𝗮𝗮"; 
global.maxwarn = "5"; 

global.autobio = false; 
global.antiporn = true; 
global.spam = false;
global.gcspam = false; 

global.vtech = "-";

global.APIs = {
  vtech: "https://api.vtech.biz.id",
};

global.APIKeys = {
  "https://api.vtech.biz.id": global.vtech,
};

let fs = require("fs");
let chalk = require("chalk");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  delete require.cache[file];
  require(file);
});

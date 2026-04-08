const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUR5b0k1cGdTcnRXOFFuY1Z3MXUraWd3bVdkc0ZhUUhGK2lIdE8xWCswZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGVPUzVHK0NVQ3g0QlhmeW01d2lLRjd1eks0ZGovYXV0OUdrelFYcGtFWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRFFlb2xncHVKSWw0ZFpUOVAwQm5lK09FQzFHV1RPYldVbHFTSzZIZm1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNY3lzN2hkeXpGcEpwZVdHNHZCazJZNitTUWJXdGFPWnBNTVU0cHpxNVgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9OblQ2M0lrMlA5bEV1RjNYNkszNlpLNzlDc2VtTExBYXZzWWVKRi9RSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtMakREeDh2UVpvMkR4SkVPWVU1Y0FaZ2NyWXB0YTRiNFU1ajhCV1hGajg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5yOWFrWkJ1M29jYms2dHFMbVRtK0tubk9TN1hTZ3ZQZlZBNmlhU00yTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZE40bXZ6ZTU4QmdKQ2lOaDk4dU0vaDBmT2lZR0RHY3lWVTdXVVY0YWRBVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IithbTNqSFVwcXM4bmRIUE1vZEtVSFQvZTZRSnNML016bjFoZTJqaklyYnMxcWR2VGpYbFFKK3Q3eFZ0dWxLVGh2dExZY0xXc3ZXMXVxMUZMZExFeGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6InV1Mm9MMUdJK091QWtWTHYvaW9QYlBUd0lOcUs5ZHdBSVRpYjYzSDlxeEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTUsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTUsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVDNFRlNFMVAiLCJtZSI6eyJpZCI6IjkxNjI5NzczNTM5ODoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLKgOG0gOG0i+G0gCIsImxpZCI6IjE2MDY4Mzc4NjI4OTM2OToxOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0puVHNPZ0hFSXowMnM0R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImlvRnZ5SFBIQWdNZms5cHdhQUozakdrT3lMMFRjdTQwSnkwd2xHQmlOUVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRNM1JYUlFwSHpucU5RRnNJR1A1dlNYRStYVEZndnI3VFhZWjBTM0k5d3FCUk5RcHFpQ0xiREorKzMraU9tZDR0eFNpSmtRclpnN3ZYOWpXUUNuZEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwZ24zWG1sNnVCRGg3K3QxamJIRlQ2bjM3UGljY1RDZXZycVJDbTcyVWtuMEJHWmRCamQ3M28ramJnMTJDMExFYklPUjhhWDBFRGZMMXhWWDkyVXBqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE2MDY4Mzc4NjI4OTM2OToxOUBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXFCYjhoenh3SURINVBhY0dnQ2Q0eHBEc2k5RTNMdU5DY3RNSlJnWWpVRiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc1NjgwMDE5LCJsYXN0UHJvcEhhc2giOiIzbWwxalMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpUMSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Suvo-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Suvo-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Suvo-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "916297735398",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*SuvoMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ SuvoMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "916297735398",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

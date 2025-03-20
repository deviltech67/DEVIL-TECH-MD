const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ*

> *ASHUU-MD-V1 REPO:*
*|* https://github.com/deviltech67/DEVIL-TECH-MD*

> *SUPPORT CHENNAL:*
*|* *https://whatsapp.com/channel/0029Vb9u0GQ8qIzmoGPEtq0s*
> * *SYSTEM SETTING:*
*|* *ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ*
*|* *94760091093*
*╰──────────────●●►*

> *CREATED BY CYBER LOKU ASHUU OFC*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363395467876104@newsletter',
      newsletterName: "ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'CYBER LOKU ASHUU OFC',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/deviltech67/DEVIL-TECH-MD" ,
thumbnailUrl: "https://files.catbox.moe/n4tno9.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});

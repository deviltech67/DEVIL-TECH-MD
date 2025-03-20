const config = require('../config')
const {cmd , commands} = require('../command')
cmd({

    pattern: "menu",

    react: "📍",

    alias: ["allmenu","bot","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu3',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `*╭══〘〘 ${config.BOT_NAME} 〙〙*
*┃❍ ᴍᴏᴅᴇ* : *${config.MODE}*
*┃❍ ᴘʀᴇғɪx* : *${config.PREFIX}*
*┃❍ ʀᴀᴍ* : *34.56 ɢʙ/60.79*
*┃❍ ᴄʀᴇᴀᴛᴏʀ* : *ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ*
*┃❍ ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ* : *${config.ALWAYS_ONLINE}*
*┃❍ ᴠᴇʀsɪᴏɴs* : *ᴠ.1.0.0*
*╰═════════════════⊷*
 *♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-CMD 📥* *❒⁠⁠⁠⁠* 
*├⬡ .ғʙ*
*├⬡ .ɪɴꜱᴛᴀ*
*├⬡ .ᴠɪᴅᴇᴏ*
*├⬡ .ɢᴅʀɪᴠᴇ*
*├⬡ .ᴛᴡɪᴛᴛᴇʀ*
*├⬡ .ᴛᴛ*
*├⬡ .ᴍᴇᴅɪᴀғɪʀᴇ*
*├⬡ .ᴘʟᴀʏ*
*├⬡ .ᴘʟᴀʏ2*
*├⬡ .sᴏɴɢ*
*├⬡ .ᴠɪᴅᴇᴏ*
*├⬡ .ᴠɪᴅᴇᴏ2*
*├⬡ .sᴘᴏᴛɪꜰʏ*
*├⬡ .ɪᴍɢ*
*├⬡ .ʟʏʀɪᴄs*
*├⬡ .ᴀᴘᴋ*
*├⬡ .ᴅᴀʀᴀᴍᴀ*
*├⬡ .ᴘʟᴀʏ2*
*├⬡ .ᴘʟᴀʏ4*
*├⬡ .ʙᴀɪsᴄᴏᴘᴇ*
*├⬡ .ɢɪɴɪsɪsɪʟᴀ*
*├⬡ .ᴛᴏᴘᴅꜰ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🏮 EMPIRE DEVIL TECH 🏮* *❒⁠⁠⁠⁠* 
*├⬡ .ғᴀᴍɪʟʏ*
*├⬡ .ᴄʜᴀɴɴᴇʟ*
*├⬡ .sᴜᴘᴘᴏʀᴛ*
*├⬡ .ᴇxᴏʀ*
*├⬡ .ᴘʀᴏᴍᴏᴛᴇsᴛᴀꜰꜰ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🕺 FUN-CMD 🕺* *❒⁠⁠⁠⁠* 
*├⬡ .Fᴀᴍɪʟʏ*
*├⬡ .ʜᴇᴀʀᴛ*
*├⬡ .ɴɪᴋᴀʟ*
*├⬡ .sʜʏ*
*├⬡ .ᴍᴏᴏɴ*
*├⬡ .ᴄᴏɴғᴜsᴇᴅ*
*├⬡ .ʜᴀᴘᴘʏ*
*├⬡ .ᴀɴɢʀʏ*
*├⬡ .sᴀᴅ*
*├⬡ .ʜᴏᴛ*
*├⬡ .ᴇᴍɪx🙂,😇*
*├⬡ .ᴇxᴏʀ*
*├⬡ .ᴀᴛᴛᴘ*
*├⬡ .ꜱʜᴀᴘᴀʀ*
*├⬡ .ʙᴏɴᴋ*
*├⬡ .ꜱᴍᴜɢ*
*├⬡ .ʙᴜʟʟʏ*
*├⬡ .ᴀᴡᴏᴏ*
*├⬡ .ᴋɪꜱꜱ*
*├⬡ .ᴄᴜᴅᴅʟᴇ*
*├⬡ .ʟɪᴄᴋ*
*├⬡ .ɢʟᴏᴍᴘ*
*├⬡ .ꜱᴍɪʟᴇ*
*├⬡ .ʜɪɢʜꜰɪᴠᴇ*
*├⬡ .ꜱʟᴀᴘ*
*├⬡ .ᴋɪʟʟ*
*├⬡ .ᴡɪɴᴋ*
*├⬡ .ʙɪᴛᴇ*
*├⬡ .ᴄʀɪɴɢᴇ*
*├⬡ .ᴅᴀɴᴄᴇ*
*├⬡ .ʙʟᴜꜱʜ*
*├⬡ .ʜᴀɴᴅʜᴏʟᴅ*
*├⬡ .ɴᴏᴍ*
*├⬡ .ʜᴀᴄᴋ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-CMD 🔍* *❒⁠⁠⁠⁠* 
*├⬡ .ʏᴛꜱ*
*├⬡ .ʏᴛᴀ*
*├⬡ .ʟᴏʟɪ*
*├⬡ .ᴍᴏᴠɪᴇɪɴғᴏ*
*├⬡ .ᴍᴏᴠɪᴇ*
*├⬡ .Gᴏᴏɢʟᴇ*
*├⬡ .ᴡᴇᴀᴛʜᴇʀ*
*├⬡ .sᴛɪᴄᴋsᴇᴀʀᴄʜ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🧸 EMOTIONAL CMD🧸* *❒⁠⁠⁠⁠* 
*├⬡ .sᴀᴅ*
*├⬡ .ᴀɴɢʀʏ*
*├⬡ .ʜᴀᴘᴘʏ*
*├⬡ .ʜᴇᴀʀᴛ*
*├⬡ .ᴄᴏɴғᴜsᴇᴅ*
*├⬡ .sʜʏ*
*├⬡ .ᴍᴏᴏɴ*
*├⬡ .ʜᴏᴛ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🎮 GAME-CMD 🎮* *❒⁠⁠⁠⁠* 
*├⬡ .ɴᴜᴍʙᴇʀɢᴀᴍᴇ*
*├⬡ .ʀᴏʟʟ🎲*
*├⬡ .ᴄᴏɪɴꜰʟɪᴘ🪙*
*├⬡ .pick*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🧠 AI-CMD 🧠* *❒⁠⁠⁠⁠* 
*├⬡ .ɢᴘᴛ*
*├⬡ .ᴀɪ*
*├⬡ .ᴀɴᴀʟʏsᴇ*
*├⬡ .ʟʟᴀᴍᴀ3*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-CMD 👨‍💻* *❒⁠⁠⁠⁠* 
*├⬡ .ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*├⬡ .ᴜᴘᴅᴀᴛᴇ*
*├⬡ .ᴀʟʟᴠᴀʀ*
*├⬡ .sᴇᴛᴛɪɴɢs*
*├⬡ .ᴏᴡɴᴇʀ*
*├⬡ .sᴛᴀᴛᴜs-ʀᴇᴘʟʏ*
*├⬡ .ᴀᴜᴛᴏ-ʀᴇᴘʟʏ*
*├⬡ .ᴀɴᴛɪ-ʙᴀᴅ*
*├⬡ .ᴀʟᴡᴀʏs-ᴏɴʟɪɴᴇ*
*├⬡ .ᴀᴜᴛᴏ-sᴛɪᴄᴋᴇʀ*
*├⬡ .ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ*
*├⬡ .ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ*
*├⬡ .sᴛᴀᴛᴜs-ʀᴇᴀᴄᴛ*
*├⬡ .ᴀɴᴛɪ-ᴄᴀʟʟ*
*├⬡ .ʀᴇᴀᴅ-ᴍᴇssᴀɢᴇ*
*├⬡ .ᴀɴᴛɪ-ʙᴀᴅ*
*├⬡ .ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ*
*├⬡ .ᴀɴᴛɪ-ʟɪɴᴋ*
*├⬡ .ᴀɴᴛɪᴅᴇʟᴇᴛᴇ*
*├⬡ .ʀᴇᴘᴏ*
*├⬡ .ᴋɪɴɢ*
*├⬡ .ꜱʏꜱᴛᴇᴍ*
*├⬡ .ꜱᴛᴀᴛᴜꜱ*
*├⬡ .Aʙᴏᴜᴛ*
*├⬡ .ʙʟᴏᴄᴋ*
*├⬡ .ᴜɴʙʟᴏᴄᴋ*
*├⬡ .sʜᴜᴛᴅᴏᴡɴ*
*├⬡ .ᴄʟᴇᴀʀᴄʜᴀᴛs*
*├⬡ .sᴇᴛᴘᴘ*
*├⬡ .ʙʀᴏᴀᴅᴄᴀsᴛ*
*├⬡ .ᴊɪᴅ*
*├⬡ .ɢᴊɪᴅ*
*├⬡ .ᴘᴀɪʀ*
*├⬡ .sᴀᴠᴇ*
*├⬡ .ʀᴀɴᴋ*
*├⬡ .ᴄᴀʟᴄ*
*├⬡ .ʀᴇꜱᴛᴀʀᴛ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *👥 GROUP-CMD 👥* *❒⁠⁠⁠⁠* 
*├⬡ .ʀᴇᴍᴏᴠᴇ*
*├⬡ .ᴅᴇʟᴇᴛᴇ*
*├⬡ .ᴀᴅᴅ*
*├⬡ .ᴋɪᴄᴋ*
*├⬡ .ᴋɪᴄᴋᴀʟʟ*
*├⬡ .sᴇᴛɢᴏᴏᴅʙʏᴇ*
*├⬡ .sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*├⬡ .ᴘʀᴏᴍᴏᴛᴇ*
*├⬡ .ᴅᴇᴍᴏᴛᴇ*
*├⬡ .ᴛᴀɢᴀʟʟ*
*├⬡ .ɢᴇᴛᴘɪᴄ*
*├⬡ .ɪɴᴠɪᴛᴇ*
*├⬡ .ʀᴇᴠᴏᴋᴇ*
*├⬡ .ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*├⬡ .ᴀʟʟʀᴇǫ*
*├⬡ .ᴍᴜᴛᴇ*
*├⬡ .ᴅᴇʟ*
*├⬡ .ᴜɴᴍᴜᴛᴇ*
*├⬡ .ʟᴏᴄᴋɢᴄ*
*├⬡ .ᴜɴʟᴏᴄᴋɢᴄ*
*├⬡ .ʟᴇᴀᴠᴇ*
*├⬡ .ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*├⬡ .ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*├⬡ .ᴊᴏɪɴ*
*├⬡ .ʜɪᴅᴇᴛᴀɢ*
*├⬡ .ɢɪɴғᴏ*
*├⬡ .ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*├⬡ .ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*├⬡ .ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*├⬡ .sᴇɴᴅᴅᴍ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *📃 INFO-CMD 📃* *❒⁠⁠⁠⁠* 
*├⬡ .ᴀʙᴏᴜᴛ*
*├⬡ .ᴀʟɪᴠᴇ*
*├⬡ .ʙᴏᴛɪɴꜰᴏ*
*├⬡ .ꜱᴛᴀᴛᴜꜱ*
*├⬡ .ᴘɪɴɢ*
*├⬡ .ᴘɪɴɢ2*
*├⬡ .ꜱʏꜱᴛᴇᴍ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🤖 BOT-CMD 🤖* *❒⁠⁠⁠⁠* 
*├⬡ .ᴠᴇʀsɪᴏɴ*
*├⬡ .ʀᴇᴘᴏ*
*├⬡ .ᴍᴇɴᴜ*
*├⬡ .ᴍᴇɴᴜ2*
*├⬡ .ᴍᴇɴᴜ3*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-CMD 🎡* *❒⁠⁠⁠⁠* 
*├⬡ .sᴛɪᴄᴋᴇʀ*
*├⬡ .ᴛʀᴛ*
*├⬡ .ᴛᴏɪᴍᴀɢᴇ*
*├⬡ .ᴛᴛs*
*├⬡ .ꜰᴀɴᴄʏ*
*├⬡ .ᴜʀʟ*
*├⬡ .Aɢᴇ*
*├⬡ .ᴛɢs*
*├⬡ .ᴄᴏɴᴠᴇʀᴛ*
*├⬡ .ᴛɪɴʏ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-CMD ⛱️* *❒*
*├⬡ .ᴅᴏɢ*
*├⬡ .ᴄᴀᴛ*
*├⬡ .ᴀɴɪᴍᴇ*
*├⬡ .ᴄᴏᴜᴘʟᴇᴘᴘ*
*├⬡ .ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
*├⬡ .ᴀɴɪᴍᴇɢɪʀʟ*
*├⬡ .ᴀɴɪᴍᴇɢɪʀʟ1*
*├⬡ .ᴀɴɪᴍᴇɢɪʀʟ2*
*├⬡ .ᴀɴɪᴍᴇɢɪʀʟ3*
*├⬡ .ᴀɴɪᴍᴇɢɪʀʟ4*
*├⬡ .ᴀɴɪᴍᴇɢɪʀʟ5*
*├⬡ .ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-CMD 🏜️* *❒⁠⁠⁠⁠* 
*├⬡ .ɪᴍɢ*
*├⬡ .ʟᴏɢᴏ*
*├⬡ .ss*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🌐 OTHER-CMD 🌐* *❒⁠⁠⁠⁠* 
*├⬡ .ᴛʀᴛ*
*├⬡ .ᴊᴏᴋᴇ*
*├⬡ .ꜰᴀᴄᴛ*
*├⬡ .ɢɪᴛʜᴜʙ*
*├⬡ .ɢᴘᴀꜱꜱ*
*├⬡ .ʜᴀᴄᴋ*
*├⬡ .ǫᴜᴏᴛᴇ*
*├⬡ .ǫʀ*
*├⬡ .ꜱʀᴇᴘᴏ*
*├⬡ .sʏsᴛᴇᴍ*
*├⬡ .ʀᴀɴᴋ*
*├⬡ .ᴛɪᴍᴇᴢᴏɴᴇ*
*├⬡ .ᴅᴇꜰɪɴᴇ*
*├⬡ .ᴅᴀɪʟʏꜰᴀᴄᴛ*
*├⬡ .ᴍɪɴᴜᴛᴏʀ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *📍 BUG-CMD 🦠* *❒⁠⁠⁠⁠*
*├⬡ .xʙᴜɢ*
*┕──────────────────❒*
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ*`

await conn.sendMessage(from,{image:{url: config.ALIVE_IMG},caption:madeMenu,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363395467876104@newsletter',
      newsletterName: '𝐃𝐄𝐕𝐈𝐋-𝐓𝐄𝐂𝐇-𝐌𝐃 𝚩❍𝐓 𝐌𝛆፝֟፝֟ƞ̽ʊྀི̊𓆪͛',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})

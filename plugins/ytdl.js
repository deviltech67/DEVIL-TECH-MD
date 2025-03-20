const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://www.dark-yasiya-api.site' // API LINK ( DO NOT CHANGE THIS!! )

cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    react: "🎧",
    filename: __filename
},
async (conn, mek, m, { from, reply, q }) => {
    try {

        if (!q) return reply('Give me song name or url !')

        const search = await fetchJson(`${apilink}/search/yt?q=${q}`)
        const data = search.result.data[0];

        const ytdl = await fetchJson(`${apilink}/download/ytmp3?url=${data.url}`)
        const downloadLink = ytdl.result?.dl_link || ytdl.dl_link;
        
        if (!downloadLink) {
            return reply("❌ Failed to get download link. Try again later.");
        }

        let message = `‎‎*乂 DEVIL-TECH-MD SONG DOWNLOADER*

*⚙️ 𝖳𝗂𝗍𝗅𝖾* : ${data.title}
*📃 𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇* : ${data.description}
*🚀 𝖵𝗂𝖾𝗐𝗌* : ${data.views}
*⏰ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇* : ${data.timestamp}
*📆 𝖴𝗉𝗅𝗈𝖺𝖽𝖾𝗱 𝖮𝗇* : ${data.ago}
*🎬 𝖢𝗁𝖺𝗇𝗇𝖾𝗅* : ${data.author.name}
*🖇️ 𝖴𝗋𝗅* : ${data.url}

*乂 REPLY THE DOWNLOAD OPTION*  

*1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗈 𝖳𝗒𝗉𝖾*
*2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍 𝖳𝗒𝗉𝖾*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ*`;

        // Send song info with newsletter
        const vv = await conn.sendMessage(
            from,
            {
                text: message,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: "ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄジ",
                        newsletterJid: "120363395467876104@newsletter",
                    },
                    externalAdReply: {
                        title: `DEVIL-TECH-MD Song Downloader`,
                        body: `${data.title} : Powered By DEVIL-TECH-MD Song Information Search Engine`,
                        thumbnailUrl: data.thumbnail,
                        sourceUrl: ``,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                    },
                },
            },
            { quoted: mek },
        );

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        await conn.sendMessage(from, { 
                            audio: { url: downloadLink }, 
                            mimetype: "audio/mpeg" 
                        }, { quoted: mek });
                        break;
                    case '2':  
                        await conn.sendMessage(from, { 
                            document: { url: downloadLink }, 
                            mimetype: "audio/mpeg", 
                            fileName: data.title + ".mp3", 
                            caption: `${data.title}

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ*`
                        }, { quoted: mek });

                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }
            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply('An error occurred while processing your request.');
    }
});

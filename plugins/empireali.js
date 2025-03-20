const { cmd } = require("../command");

cmd({
    pattern: "family",
    desc: "devil tech Family",
    category: "fun",
    react: "👨‍👩‍👧‍👦",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    const familyList = `
         *[ • DEVIL-TECH-MD 𝖥𝖠𝖬𝖨𝖫𝖸 • ]*

    [ • 𝖣𝖠𝖬𝖤 DEVIL TECH: 𝖢𝖠𝖱𝖬𝖤𝖭👸 ]
       *•────────────•⟢*
                *𝖥𝖱𝖨𝖤𝖭𝖣’𝖲*
      *╭┈───────────────•*
      *│  ◦* *▢➠ ALAN XD ( KLW )*
      *│  ◦* *▢➠ ZORO XD ( KLW )*
      *│  ◦* *▢➠ SAURON XD ( KLW )*
      *│  ◦* *▢➠ STIL XD ( KLW )*
      *│  ◦* *▢➠ ALVIN XD ( KLW )*
      *│  ◦* *▢➠ SAMAYAN ( KLW )*
      *│  ◦* *▢➠ TOM ( KLW )*
      *│  ◦* *▢➠ LEGEND ( KLW )*
      *│  ◦* *▢➠ THANIYA ( KLW )*
      *│  ◦* *▢➠ CYBER ADHI ( TDD )*
      *│  ◦* *▢➠ HIRUSHAN ( TDD )*
      *│  ◦* *▢➠ AKEN ( TDD )*
      *│  ◦* *▢➠ CYBER ABIYA ( TDD )*
      *│  ◦* *▢➠ VAJIRA MD OWNER ( TDD )*
      *│  ◦* *▢➠ CHAMIDU ( TDD )*
      *│  ◦* *▢➠ VIDU ( TDD )*
      *│  ◦* *▢➠ SUHAS ( TDD )*
      *│  ◦* *▢➠ DIDULA ( TDD )*
      *│  ◦* *▢➠ SAHAS ( TDD )*
      *╰┈───────────────•*
      ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ
        *•────────────•⟢*
    `;

    try {
        // Envoi de la réponse avec l'image et la liste de la famille
        await conn.sendMessage(m.chat, {
            image: { url: "https://files.catbox.moe/4854y4.jpg" },
            caption: familyList.trim()
        }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply("❌ *An error occurred while fetching the family list. Please try again.*");
    }
});
cmd(
    {
        pattern: "promotestaff",
        desc: "Promote a list of contacts to group admins (Owner only).",
        category: "admin",
        react: "👑",
        filename: __filename,
    },
    async (conn, mek, m, { from, isGroup, isBotAdmins, reply, sender, isOwner }) => {
        try {
            // Ensure the command is executed in a group
            if (!isGroup) {
                return reply("❌ This command can only be used in groups.");
            }

            // Ensure the bot has admin privileges
            if (!isBotAdmins) {
                return reply("❌ I need to be an admin to perform this action.");
            }

            // Ensure the command is executed by the bot's owner
            if (!isOwner) {
                return reply("❌ This command is restricted to the bot owner.");
            }

            // List of staff contacts to promote (replace with actual numbers)
            const staffContacts = [
                "94760091093@s.whatsapp.net", // Replace with staff contact numbers
                "94760091093@s.whatsapp.net", // Example: Add staff members here
                "94760091093@s.whatsapp.net", // Example: Add staff members here
                "94760091093@s.whatsapp.net", // Example: Add staff members here
                "94760091093@s.whatsapp.net", // Example: Add staff members here
                "94760091093@s.whatsapp.net", // Example: Add staff members here
                "94760091093@s.whatsapp.net", // Example: Add staff members here
                "94760091093@s.whatsapp.net", // Example: Add staff members here
                "94760091093@s.whatsapp.net", // Example: Add staff members here
                "94760091093@s.whatsapp.net", // Example: Add staff members here
            ];

            // Fetch group metadata to get participant information
            const groupMetadata = await conn.groupMetadata(from);
            const groupParticipants = groupMetadata.participants;

            // Filter existing admins
            const existingAdmins = groupParticipants
                .filter(participant => participant.admin === "admin" || participant.admin === "superadmin")
                .map(participant => participant.id);

            // Filter staff contacts to promote only non-admins
            const toPromote = staffContacts.filter(contact => !existingAdmins.includes(contact));

            // Promote each contact
            for (const contact of toPromote) {
                await conn.groupParticipantsUpdate(from, [contact], "promote"); // Promote the contact
            }

            // Reply with a success message
            if (toPromote.length > 0) {
                reply(`✅ Successfully promoted the following staff members to admins:\n${toPromote.map(c => `- ${c}`).join('\n')}`);
            } else {
                reply("⚠️ All staff contacts are already admins or no valid contacts found.");
            }
        } catch (error) {
            reply(`❌ Error promoting staff: ${error.message}`);
        }
    }
);
cmd(
    {
        pattern: "exor",
        desc: "Modify group name, description, and profile picture directly in the code.",
        category: "admin",
        react: "🔄",
        filename: __filename,
    },
    async (conn, mek, m, { from, isGroup, isBotAdmins, isAdmins, reply, isOwner }) => {
        try {
            // Ensure the command is executed in a group
            if (!isGroup) {
                return reply("❌ This command can only be used in groups.");
            }

            // Ensure the bot is an admin
            if (!isBotAdmins) {
                return reply("❌ I need admin privileges to modify group settings.");
            }

            // Ensure the user is an admin or the owner
            if (!isAdmins && !isOwner) {
                return reply("❌ Only group admins or the bot owner can use this command.");
            }

            // Define the new group settings here
            const groupName = "─ ͟͞ ❮❮ 𝐒𝐑𝐈 𝐋𝐀𝐍𝐊𝐀𝐍 𝐂𝐘𝐁𝐄𝐑 𝐒𝐎𝐂𝐈𝐄𝐓𝐘┃ᴍᴀɪɴ ᴄʜᴀɴᴇʟ ❯❯  ͟͞⏤ ヤ🇦🇴";
            const imageUrl = "https://i.ibb.co/zhN2HTv7/1830.jpg"; // Replace with the actual image URL
            const groupDescription = `
🔥✨ 𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝒕𝒉𝒆 𝐒𝐫𝐢 𝐋𝐚𝐧𝐤𝐚𝐧 𝐂𝐲𝐛𝐞𝐫 𝐒𝐨𝐜𝐢𝐞𝐭𝐲! 🔥✨  

_Your Ultimate Hub for All Things Tech! 🚀💻_

💥 What We Offer:
🤖 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 | ⚙️ 𝐁𝐨𝐭𝐬 | 📱 𝐀𝐩𝐩𝐬 | 🌐 𝐖𝐞𝐛𝐬𝐢𝐭𝐞𝐬

🎁 _Exclusive Giveaways & Surprises Await!_
📣 _Share our channel and group to unlock more powerful tools and exciting rewards!_

_📢 Stay Connected, Stay Ahead, and Keep Sharing! 🚀🔥_

  👥 𝐓𝐞𝐚𝐦 𝐒𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞: 
👑  Owners:  𝐂𝐲𝐛𝐞𝐫 𝐓𝐡𝐞𝐡𝐚𝐧, 𝐒𝐚𝐝𝐞𝐞𝐩𝐚 𝐗𝐃  
⭐  Leaders:  𝐀𝐫𝐨 𝐗𝐃, 𝐂𝐲𝐛𝐞𝐫 𝐀𝐬𝐡𝐮  
💎  Co-Leaders:  𝐒𝐚𝐦𝐚𝐲𝐚𝐧
📚  Head Professors:  𝐒𝐮𝐫𝐚, 𝐀𝐥𝐚𝐧 𝐗𝐃  
📝  Professors:  𝐂𝐲𝐛𝐞𝐫 𝐓𝐡𝐞𝐡𝐚𝐧, 𝐒𝐚𝐝𝐞𝐞𝐩𝐚 𝐗𝐃
🎨  Graphic Designers:  𝐑𝐊 𝐃𝐞𝐚𝐠𝐥𝐞, 𝐙𝐨𝐫𝐨 𝐗𝐃
            `;

            // Update the group name
            await conn.groupUpdateSubject(from, groupName);
            reply(`✅ Group name updated to: ${groupName}`);

            // Update the group description
            await conn.groupUpdateDescription(from, groupDescription.trim());
            reply(`✅ Group description updated successfully.`);

            // Update the group profile picture
            if (imageUrl.startsWith("http")) {
                try {
                    // Download the image using axios
                    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
                    const buffer = Buffer.from(response.data, "binary");

                    // Check if the buffer is valid
                    if (buffer.length === 0) {
                        return reply("❌ Failed to download the image. The file is empty.");
                    }

                    // Set the group profile picture
                    await conn.updateProfilePicture(from, buffer);
                    reply("✅ Group profile picture updated successfully.");
                } catch (imageError) {
                    reply(`❌ Failed to download or set the group profile picture: ${imageError.message}`);
                }
            } else {
                reply("❌ Invalid image URL provided.");
            }
        } catch (error) {
            reply(`❌ Error updating group settings: ${error.message}`);
        }
    }
);

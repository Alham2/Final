const {
	MessageEmbed
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { MessageButton, MessageActionRow } = require('discord.js')
const { handlemsg } = require(`${process.cwd()}/handlers/functions`)
module.exports = {
	name: "developer",
	category: "🔰 Info",
	aliases: ["dev", "Truchorko"],
	description: "Shows Information about the Developer",
	usage: "developer",	
	type: "bot",
	run: async (client, message, args, cmduser, text, prefix) => {
		let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
		
		try {	
			let button_public_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.invite).setURL("https://discord.com/api/oauth2/authorize?client_id=1103258973517389855&permissions=8&scope=applications.commands%20bot")
			let button_support_dc = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.dc).setURL("https://discord.gg/utmuExHwyT")
			let button_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.botlist).setURL(`https://botlist.Truchorko.dev`)
			const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
			message.reply({embeds: [new MessageEmbed()
				.setColor(es.color)
				.setFooter(client.getFooter(es))
				.setTimestamp()
				.setThumbnail("https://cdn.discordapp.com/avatars/840025174651830333/df7b527a701d9a1ab6d73213576fe295.webp?size=1024")
				.setTitle(client.la[ls].cmds.info.developer.title)
				.setURL("https://team.arcades.ga")
				.setDescription(client.la[ls].cmds.info.developer.description)],
components: allbuttons
			}).catch(error => console.log(error));
		} catch (e) {
			console.log(String(e.stack).grey.bgRed)
			return message.reply({embeds: [new MessageEmbed()
			  .setColor(es.wrongcolor)
			  .setFooter(client.getFooter(es))
			  .setTitle(client.la[ls].common.erroroccur)
			  .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
			]});
		}
	}
}


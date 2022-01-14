const { MessageEmbed } = require("discord.js");

module.exports = (client) => {
  
  const InvitesTracker = require("@androz2091/discord-invites-tracker")
  
  const tracker = InvitesTracker.init(client, {
    fetchGuilds: true,
    fetchVanity: true,
    fetchAuditLogs: true,
  });
  
  tracker.on("guildMemberAdd", async (member, type, invite) => {
    
  let channel = member.guild.channels.cache.get("771241924538662952");
  
  const member2 = client.guilds.cache
			.get('771238821550620703')
			.members.cache.filter(member => !member.user.bot).size;
		const welbed = new MessageEmbed()
			.setTitle('New Member!!')
			.setDescription(
				`\`${
					member.user.tag
				}\` Welcome to Chill Heaven ! <a:velcome:889125994756190261>\nMake sure to pick <#778214800357851147> !! <a:waiting1:889126255109214249>\nHope you will enjoy here!! :D <a:tota1:889126771755204629>\nBecause of you now we are **${member2}**!! <a:nacho:786056810150887464>\nIf you are enjoying then make sure to **invite your friends** too !! <:please:773446535450853427> `
			)
			.setColor('RANDOM')
			.setThumbnail(member.user.displayAvatarURL())
			
			let embed = new MessageEmbed()
			.setColor("2F3136")
			
  
  if (type === "normal") {
    embed.addField(`> Invited by`, `• ${invite.inviter}\n• \`${invite.inviter.tag}\`\n• \`${invite.uses}\` invites`)
    embed.addField(`> Invite code used`, `• \`${invite.code}\`\n• \`${invite.uses}\` uses\n• <t:${Math.round(invite.createdTimestamp / 1000)}:R>`)
    embed.setTimestamp()
    embed.setThumbnail(invite.inviter.displayAvatarURL())
    
    channel.send({content: `${member}`, embeds: [welbed, embed]});
    
  } else if (type === "permissions") {
    
    channel.send({content: `${member}`, embeds: [welbed]});
    
  } else if (type === "unknown") {
    embed.setTitle("I don't know how they joined.")
    
    channel.send({content: `${member}`, embeds: [welbed, embed]});
    
  } else if (type === "vanity") {
    embed.setTitle("Invited by vanity-url")
    
    channel.send({content: `${member}`, embeds: [welbed, embed]})
  }
  });
}
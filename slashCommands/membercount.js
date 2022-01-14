module.exports = {
  name: "membercount",
  description: "membercount of the server.",
  cooldown: {
    time: 5000,
    message: ""
  },
  memberpermissions: [],
  clientPermissions: [],
  nsfw: false,
  run: async(client, interaction) => {
    try {
      await interaction.guild.members.fetch()
      
      interaction.sendE(`>>> \\🤡 | Total Members: ${interaction.guild.members.cache.size}\n\n\\👀 | Humans: ${interaction.guild.members.cache.filter(c => !c.user.bot).size}\n\n\\🤖 | Bots: ${interaction.guild.members.cache.filter(c => c.user.bot).size}`)
      
    } catch (e) {
      interaction.error("Something went  wrong ;)..\nError: " + e.message + "\nContact my developers to fix it")
      console.log(String(e).bgred)
    }
  }
}
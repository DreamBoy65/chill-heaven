module.exports = {
  name: "test",
  description: "test",
  cooldown: {
    time: 50000,
    message: ""
  },
  memberpermissions: [],
  clientPermissions: [],
  nsfw: false,
  run: async(client, interaction) => {
    try {
      client.emit("guildMemberAdd", interaction.member)
      interaction.followUp("Done!")
    } catch (e) {
      interaction.error("Something went wrong;)")
      console.log(e)
    }
  }
}

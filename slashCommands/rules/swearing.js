module.exports = {
  name: "swearing",
  description: "Gives you information on swearing.",
  cooldown: {
    time: 5000,
    message: ""
  },
  memberpermissions: [],
  clientPermissions: [],
  options: [
    {
      "User": {
        name: "user",
        description: "To ping the user.",
        required: false
      }
    }
  ],
  nsfw: false,
  run: async(client, interaction) => {
    try {
      let user = interaction.options.getUser("user")
      
      interaction.sendE(">>> Swearing & abusing is not allowed. (If someone is going all out on personal insults, a tirade of swear words,, they will be punished.)", {
        thumbnail: 'https://i.imgur.com/4WEv9Gg.png',
        title: `For ${user ? user.tag : "NoNe" }`
      })
    } catch (e) {
      interaction.error("Something went wrong;)")
      console.log(e)
    }
  }
}

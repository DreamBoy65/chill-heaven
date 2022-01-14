module.exports = {
  name: "spam",
  description: "Gives you information on spam.",
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
      
      interaction.sendE(">>> Don't spam. (Spamming includes zalgo, excessive caps/reaction spams, copy pastes, picture/link/GIF spam, reaction spam and walls of text)", {
        thumbnail: 'https://i.imgur.com/4WEv9Gg.png',
        title: `For ${user ? user.tag : "NoNe" }`
      })
    } catch (e) {
      interaction.error("Something went wrong;)")
      console.log(e)
    }
  }
}

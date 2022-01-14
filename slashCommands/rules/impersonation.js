module.exports = {
  name: "impersonation",
  description: "Gives you information on impersonation.",
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
      
      interaction.sendE(">>> Don't impersonate anyone, like YouTubers or Staff. (This includes copying avatars, nicknames, or just trolling to imitate an user)", {
        thumbnail: 'https://i.imgur.com/4WEv9Gg.png',
        title: `For ${user ? user.tag : "NoNe" }`
      })
    } catch (e) {
      interaction.error("Something went wrong;)")
      console.log(e)
    }
  }
}

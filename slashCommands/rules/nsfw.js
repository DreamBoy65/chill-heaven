module.exports = {
  name: "nsfw",
  description: "Gives you information on nsfw.",
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
      
      interaction.sendE(">>> Don't post NSFW/Gore/18+ stuff in the channels (Not only you shouldn't do this but, you also shouldn't have any NSFW/Gore-ish Pfps/Nickname/Usernames)", {
        thumbnail: 'https://i.imgur.com/4WEv9Gg.png',
        title: `For ${user ? user.tag : "NoNe" }`
      })
    } catch (e) {
      interaction.error("Something went wrong;)")
      console.log(e)
    }
  }
}

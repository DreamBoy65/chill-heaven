module.exports = {
  name: "bully",
  description: "Gives you information on bully.",
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
      
      interaction.sendE(">>> Don't harass or insult any other members. (This includes threats, internet attacks and cyber bullying. Other people have feelings too.)", {
        thumbnail: 'https://i.imgur.com/4WEv9Gg.png',
        title: `For ${user ? user.tag : "NoNe" }`
      })
    } catch (e) {
      interaction.error("Something went wrong;)")
      console.log(e)
    }
  }
}

module.exports = {
  name: "hack",
  description: "Gives you information on hack.",
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
      
      interaction.sendE(">>> First of all dont give attention to these people they just fool around. Discord is the safe platform and cannot hack you. By using some loopholes or glitch, they at-most only get your profile picture :joy:. They will threaten you by giving some numbers and saying it’s your ip. Ignore them, block them & report them. Just don’t click on any links you don’t know or download anything from someone you don’t know or when a stranger offers you. Such as nitro link and game links.", {
        thumbnail: interaction.guild.iconURL(),
        title: `For ${user ? user.tag : "NoNe" }`
      })
    } catch (e) {
      interaction.error("Something went wrong;)")
      console.log(e)
    }
  }
}

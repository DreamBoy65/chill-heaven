module.exports = {
  name: "limit",
  description: "set the vc limit.",
  cooldown: {
    time: 5000,
    message: ""
  },
  memberpermissions: [],
  clientPermissions: [],
  nsfw: false,
  options: [
    {
      "Integer": {
        name: "limit",
        description: "channel limit.",
        required: true
      }
    }
   ],
  run: async(client, interaction) => {
    try {
      if(!interaction.member.voice.channel) return interaction.error("You have to be in vc to use this cmd.")
      
      let vc = client.vc.get(`tempvoicechannel_${interaction.guild.id}_${interaction.member.voice.channel.id}`)
      
      if(!vc) return interaction.error("You are not in a join to create vc.")
      
      if(vc.author !== interaction.user.id) return interaction.error("Only channel author can use this cmd.")
      
      let channel = interaction.guild.channels.cache.get(vc.vc)
      
      if(!channel) return;
      
      let no = interaction.options.getInteger("limit")
      
      if(no > 99) return interaction.error("limit cannot be more than 99")
      
      await channel.setUserLimit(no)
      
      interaction.success("Done!")

    } catch (e) {
      interaction.error("Something went  wrong ;)..\nError: " + e.message + "\nContact my developers to fix it")
      console.log(e)
    }
  }
}
const {
    JsonDatabase
} = require("wio.db");

const db = new JsonDatabase({
  databasePath:"./database.json"
});

module.exports = async(client) => {
  client.vc = db;
  new Promise(resolve => {
    setInterval(async() => {
      resolve(2);
        try{
          const guild = client.guilds.cache.get("771238821550620703");
          const channels = guild.channels.cache.map(ch => ch.id)
          for (let i = 0; i < channels.length; i++) {
            const key = `tempvoicechannel_${guild.id}_${channels[i]}`;
            if (db.get(key)) {
              let vc = guild.channels.cache.get(db.get(key).vc)
              if (vc.members.size < 1) {
                await db.delete(key);
                return vc.delete();
              } else {}
            }
          }
      } catch {}
    }, 10000)
  })


  client.on("voiceStateUpdate", async(oldState, newState) => {
    
    if(!oldState.channelId && newState.channelId){
      if(newState.channelId === "897426679931224064") {
      await jointocreatechannel(newState)
      }
    }

    if(oldState.channelId && !newState.channelId){
      
      if (db.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`)) {
            //fetch it from the guild
            let vc = oldState.guild.channels.cache.get(db.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`)?.vc);
            //if the channel size is below one
            if (vc.members.size < 1) { 
              //delete it from the map
              await db.delete(`tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`); 
              //log that it is deleted
              console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: just left the room lol")
              //delete the voice channel
              return vc.delete(); 
          } else {}
      }
    }
    
    if(oldState.channelId && newState.channelId){
      
      if(db.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`)){
        
        let vc =  newState.guild.channels.cache.get(db.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`)?.vc)
        
        if(!vc?.members || vc?.members?.size < 1){
          db.delete(`tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`); 
         //log it 
          console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: left ig.")
        //delete the room
          await vc.delete(); 
           
          if(newState.channelId === "897426679931224064") {
            await sleep(2000)
            jointocreatechannel(newState)
          }
        } 
      }
    }
  })
}

async function jointocreatechannel(user) {
      //log it 
      console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Created a Room")
      //user.member.user.send("This can be used to message the member that a new room was created")
      await user.guild.channels.create(`${user.member.user.username}'s Room`, {
        type: 'GUILD_VOICE',
        parent: user.channel.parent.id, //or set it as a category id
      }).then(async vc => {
        //move user to the new channel
        user.setChannel(vc);
        //set the new channel to the map
        db.set(`tempvoicechannel_${vc.guild.id}_${vc.id}`, {
   vc: vc.id,
   author: user.member.user.id
});
        //change the permissions of the channel

      })
    }

function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
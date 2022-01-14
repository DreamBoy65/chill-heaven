module.exports = {
    
    client: {
      presence: {
        activity: {
          name: "Demons 🎭",
          type: "WATCHING"
        }, 
      status: "dnd"
      },
      token: ".X7OHPA.9GsK1UTKBFWQcVOTif7dX9gvSS8"
    },
    prefix: ".",
    support: "https://discord.gg/pwAXkpsCHf",
    loadSlashsGlobal: false,
    slashCommandsDirs: [
      {
        Folder: "rules",
        CmdName: "rule",
        CmdDescription: "Teach some rules to bakas"
      },
      {
        Folder: "others",
        CmdName: "other",
        CmdDescription: "Idk what to add."
      },
      {
        Folder: "jointovc",
        CmdName: "vc",
        CmdDescription: "Join to create vc."
      }
    ],
    antiCrash: true,
    timezone: "Asia/Calcutta",
    
    channels: {
        debug: "924076193253326869",
        guildJoin: "924076079839346709",
        guildLeave: "924076132846948412",
        feedback: "924076275893674025",
        commands: "924076446689939556"
    },

    database: {
        enable: false,
        uri: process.env.MONGO_URI,
        config: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            autoIndex: false,
            connectTimeoutMS: 10000,
            family: 4
        }
    },
}
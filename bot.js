const Discord = require("discord.js");
const hngel = new Discord.Client({autoReconnect:true});

hngel.on("ready", () => {
  console.log("By hngel ");
  });

if (message.content.startsWith("-clr")) {
        let count = parseInt(args[0]) || 1;

          message.delete();
          message.channel.fetchMessages({ limit: Math.min(count, 100), before: message.id }).then(messages => {
          const prunable = messages.filter(m => m.author.id ===hngel.user.id);

        return Promise.all(
            prunable.map(m => m.delete())
        ).then(() => {
        });
    }).catch(message.error);
    
  }
    });

hngel.login(process.env.B)

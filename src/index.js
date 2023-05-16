const Discord = require('discord.js');

const config = require('./Data/config.json');

const Permissions = require('discord.js')

const client = new Discord.Client({ 
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ],
    disableEveryone: false
 });
client.on('ready', () => console.log('ready'));

client.on('messageCreate',message => {
    // console.log(message.content);

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    //Include your own discord channels ID inside ''
    const guild = client.guilds.fetch('');
    const everyoneRole = message.guild.roles.everyone;

    if(command ==='createtext') {
        const name = message.content.replace('!createtext','')
        message.guild.channels
        .create(name, {
            type: 'text',
            permissionOverwrites: [
                    {
                        id: message.author.id, 
                        allow:[Discord.Permissions.FLAGS.VIEW_CHANNEL, Discord.Permissions.FLAGS.MANAGE_ROLES, Discord.Permissions.FLAGS.MANAGE_CHANNELS],
                      },
                      {
                        id: client.user.id, 
                        allow:[Discord.Permissions.FLAGS.VIEW_CHANNEL, Discord.Permissions.FLAGS.MANAGE_ROLES, Discord.Permissions.FLAGS.MANAGE_CHANNELS],
                      },
                      {
                        id: everyoneRole.id,  
                        deny:[Discord.Permissions.FLAGS.VIEW_CHANNEL],
                      },
            ],
        })
        .then((channel) => {
            console.log(channel)
            //Include your own channel ID inside ''
            const categoryId = ''

        })
    }

    if (command ==='createevent') {
        const name2 = message.content.replace('!createevent','')
        //Include your own channel ID inside ''
        client.channels.cache.get('').send('@everyone' + '' + name2);
    }

});
client.login(config.token);
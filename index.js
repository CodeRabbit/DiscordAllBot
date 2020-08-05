const Discord = require('discord.js');
const client = new Discord.Client();
const BOT_TOKEN = 'NzM4MDE5NjE3NzAzNzIzMDA4.XyF0VA.jBmb0unOLr14OzLuqdgJUOGJFzc';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login(BOT_TOKEN);

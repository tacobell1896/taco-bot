const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('pong');
	}
	if (msg.content === 'what is my avatar') {
		msg.reply(msg.author.displayAvatarURL());
	}

	if (!msg.guild) return;

	if (msg.content.startsWith('!kick')) {
		const user = msg.mentions.users.first();
		if (user) {	
			const member = msg.guild.member(user);	
			if (member) {
				member
					.kick('Optional reason to appear in audit logs')
					.then(() => {
						msg.reply(`Successfully kicked ${user.tag}`);
					})
					.catch(err => {
						msg.reply('I was unable to kick this guy');
						console.error(err);
					});
			} else {	
			msg.reply(msg.author.displayAvatarURL());
			}

			} else {
				msg.reply('No user was mentioned!');
			}
	}
});

client.login('Nzk5NTAwMjY3MzM4OTg5NjE4.YAEepQ.AUldPZvqLvMh33Dq-FCEOxva87w');

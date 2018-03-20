const Discord = require("discord.js");
const bot = new Discord.Client();

const  prefix = "*";

bot.on('ready', function() {
	bot.user.setGame("vous menacer");
	console.log("Le bot a bien ete connecte");
});

bot.on('message', message => {
		if(message.content[0] === prefix) {
			if(message.content === '*amstramgram') {
				message.channel.send("Am Stram Gram...");
				message.channel.send("Pic et Pic et Col\351gram...");
				message.channel.send("Bour et Bour et Ratatam...");
				message.channel.send("Am Stram Gram...");
				message.channel.send("Pic !");
}}});
				
	
bot.login('NDI1NzQ5ODMxNTMzOTg1Nzkz.DZMSvg.zWadSK15JsFG1h6C4CzrvdG8mck');


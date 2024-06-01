const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  // Spam detection logic goes here
  // Implement spam detection algorithm to keep the server clean
  // You can use TensorFlow.js for advanced spam detection
});

client.login('your-bot-token');
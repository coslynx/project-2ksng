const { Client, Message } = require('discord.js');

module.exports = {
  name: 'warn',
  description: 'Warn a user for violating server rules',
  execute(message, args) {
    if (!message.member.hasPermission('KICK_MEMBERS')) {
      return message.reply('You do not have permission to use this command.');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('You need to mention a user to warn.');
    }

    const reason = args.slice(1).join(' ');
    if (!reason) {
      return message.reply('You need to provide a reason for the warning.');
    }

    const member = message.guild.member(user);
    if (member) {
      member
        .send(`You have been warned in ${message.guild.name} for: ${reason}`)
        .catch(err => console.error('Could not send warning message to the user', err));
    } else {
      message.reply('That user is not in this server.');
    }

    // Log the warning in the logging system
    const loggingChannel = message.guild.channels.cache.find(channel => channel.name === 'logs');
    if (!loggingChannel) {
      return console.log('Logging channel not found');
    }

    loggingChannel.send(`User ${user.tag} has been warned by ${message.author.tag} for: ${reason}`);
  },
};
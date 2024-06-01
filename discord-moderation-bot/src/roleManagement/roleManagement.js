const Discord = require('discord.js');

module.exports = {
  name: 'rolemanagement',
  description: 'Manage roles for users based on their behavior',

  execute(message, args) {
    // Logic for role management based on user behavior
    if (args[0] === 'add') {
      // Add role to user
      const role = message.guild.roles.cache.find(r => r.name === args[1]);
      if (role) {
        const member = message.mentions.members.first();
        member.roles.add(role);
        message.channel.send(`Added role ${role.name} to ${member.user.username}`);
      } else {
        message.channel.send('Role not found');
      }
    } else if (args[0] === 'remove') {
      // Remove role from user
      const role = message.guild.roles.cache.find(r => r.name === args[1]);
      if (role) {
        const member = message.mentions.members.first();
        member.roles.remove(role);
        message.channel.send(`Removed role ${role.name} from ${member.user.username}`);
      } else {
        message.channel.send('Role not found');
      }
    } else {
      message.channel.send('Invalid command. Use !rolemanagement add/remove <role> <@user>');
    }
  },
};
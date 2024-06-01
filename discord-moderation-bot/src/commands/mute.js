const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    description: 'Mute a user in the server',
    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_ROLES')) {
            return message.reply('You do not have permission to use this command');
        }

        const target = message.mentions.users.first();
        if (!target) {
            return message.reply('Please specify a user to mute');
        }

        const mainRole = message.guild.roles.cache.find(role => role.name === 'member');
        const muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

        const memberTarget = message.guild.members.cache.get(target.id);

        if (!args[1]) {
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted`);
        } else {
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(() => {
                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            }, ms(args[1]));
        }
    }
};
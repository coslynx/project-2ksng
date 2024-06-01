const Discord = require('discord.js');

class VotingSystem {
  constructor(client) {
    this.client = client;
    this.votes = new Map();
  }

  startVote(channel, question, options) {
    const embed = new Discord.MessageEmbed()
      .setTitle('🗳️ Vote')
      .setDescription(question)
      .setColor('#FF4500')
      .addField('Options:', options.join('\n'));

    channel.send({ embeds: [embed] })
      .then((message) => {
        options.forEach((option, index) => {
          message.react(this.getEmoji(index));
        });
        this.votes.set(message.id, { question, options });
      })
      .catch(console.error);
  }

  handleReaction(reaction, user) {
    if (user.bot) return;
    const message = reaction.message;
    if (!this.votes.has(message.id)) return;

    const { question, options } = this.votes.get(message.id);
    const optionIndex = this.getOptionIndex(reaction.emoji.name);
    if (optionIndex !== -1) {
      const selectedOption = options[optionIndex];
      message.channel.send(`${user.username} voted for: ${selectedOption}`);
    }
  }

  getEmoji(index) {
    return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'][index];
  }

  getOptionIndex(emoji) {
    return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃃', '6️⃣', '7️⃣', '8️⃣', '9️⃣'].indexOf(emoji);
  }
}

module.exports = VotingSystem;
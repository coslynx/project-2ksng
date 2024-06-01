const scheduledMessages = {
  scheduleMessage: (message, time) => {
    setTimeout(() => {
      console.log(`Scheduled Message: ${message}`);
    }, time);
  },
};

module.exports = scheduledMessages;
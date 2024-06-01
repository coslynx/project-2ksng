const fs = require('fs');

function logAction(action, user, reason) {
  const logEntry = `${new Date().toISOString()} - ${action} by ${user}: ${reason}\n`;

  fs.appendFile('moderationLog.txt', logEntry, (err) => {
    if (err) {
      console.error('Error logging action: ', err);
    }
  });
}

module.exports = {
  logAction,
};
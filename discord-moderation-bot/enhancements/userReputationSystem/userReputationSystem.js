const userReputationSystem = {
    users: {},
    
    // Function to initialize user reputation
    initializeUserReputation: function(userId) {
        if (!this.users[userId]) {
            this.users[userId] = {
                reputation: 0,
                totalPoints: 0,
                totalVotes: 0
            };
        }
    },
    
    // Function to update user reputation based on points
    updateUserReputation: function(userId, points) {
        if (this.users[userId]) {
            this.users[userId].reputation += points;
            this.users[userId].totalPoints += points;
        }
    },
    
    // Function to update user reputation based on votes
    updateUserVotes: function(userId, vote) {
        if (this.users[userId]) {
            this.users[userId].reputation += vote;
            this.users[userId].totalVotes++;
        }
    },
    
    // Function to get user reputation
    getUserReputation: function(userId) {
        if (this.users[userId]) {
            return this.users[userId].reputation;
        }
        return 0;
    },
    
    // Function to get total points of a user
    getTotalPoints: function(userId) {
        if (this.users[userId]) {
            return this.users[userId].totalPoints;
        }
        return 0;
    },
    
    // Function to get total votes of a user
    getTotalVotes: function(userId) {
        if (this.users[userId]) {
            return this.users[userId].totalVotes;
        }
        return 0;
    }
};
function monkeyPatcher (command) {
    const commandsAvailable = {upvote, downvote, score: getTally};
    return  commandsAvailable[command].call(this);

    function upvote () {
        this.upvotes++;
    }

    function downvote () {
        this.downvotes++;
    }

    function getTally () {
        let upvotes = this.upvotes;
        let downvotes = this.downvotes;

        const OBFUSCATION_MINIMUM = 50;
        const OBFUSCATION_PERCENT_RATIO = 0.25;

        if ((upvotes + downvotes) > OBFUSCATION_MINIMUM) {
            const obfuscationNumber = Math.ceil(
                Math.max(upvotes, downvotes) * OBFUSCATION_PERCENT_RATIO
            );

            upvotes += obfuscationNumber;
            downvotes += obfuscationNumber;
        }

        const score = upvotes - downvotes;
        const rating = getRating.call(this);

        return [upvotes, downvotes, score, rating];
    }

    function getRating () {
        const upvotes = this.upvotes;
        const downvotes = this.downvotes;

        const score = upvotes - downvotes;
        const totalVotes = upvotes + downvotes;

        const NEW_POST_VOTES_MAXIMUM = 10;
        const CONTROVERSIAL_POST_VOTES_MINIMUM = 100;
        const OVERWHELMING_MAJORITY_RATIO = 0.66;

        let rating = 'new';

        if (totalVotes < NEW_POST_VOTES_MAXIMUM) {
            rating = 'new';
        } else if (upvotes / totalVotes > OVERWHELMING_MAJORITY_RATIO) {
            rating = 'hot';
        } else if (
            score >= 0 &&
            totalVotes > CONTROVERSIAL_POST_VOTES_MINIMUM
        ) {
            rating = 'controversial';
        } else if (score < 0) {
            rating = 'unpopular';
        }

        return rating;
    }
}

const post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');

let report = monkeyPatcher.call(post, 'score');
console.log(report);

for (let i = 0; i < 50; i++) {
    monkeyPatcher.call(post, 'downvote');
}

report = monkeyPatcher.call(post, 'score');
console.log(report);
const { Post } = require('../models');

const postdata =
    [
        {
            "title": "This is about some stuff.",
            "post_text": "Here's a post about things. I hope you like it. I say things here.",
            "userId": 1
        },
        {
            "title": "I have something to say.",
            "post_text": "So here is where I say those things. And I say more things until I'm done saying things.",
            "userId": 2
        },
        {
            "title": "I did something cool.",
            "post_text": "I want to tell you about something cool I did. Here's what I did. A really cool thing. See how cool it is?",
            "userId": 3
        }
    ];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
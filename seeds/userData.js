
const { User } = require('../models');

const userdata =

    [
        {
            "user_name": "GinaKnowsBest",
            "password": "theGinazon"
        },
        {
            "user_name": "macuser200",
            "password": "amgoodatcode123"
        },
        {
            "user_name": "Rose",
            "password": "BadWolf"
        }
    ];

const seedUser = () => User.bulkCreate(userdata,
    {
        individualHooks: true,
        returning: true,
    });

module.exports = seedUser;
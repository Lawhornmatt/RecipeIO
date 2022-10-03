const { User } = require('../models');

const userData = [{
        name: "Sal",
        email: "s@aol.com",
        password: "pass"
    },
    {
        name: "Lernantino",
        email: "l@aol.com",
        password: "pass"
    },
    {
        name: "Amiko",
        email: "a@aol.com",
        password: "pass"
    }
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
});

module.exports = seedUser;
const { User } = require('../models');

const userData = [{
        first_name: "Sal",
        last_name: "mon",
        username: "Sal",
        email: "s@aol.com",
        password: "pass"
    },
    {
        first_name: "Quentin",
        last_name: "Larintino",
        username: "Larintino",
        email: "l@aol.com",
        password: "pass"
    },
    {
        first_name: "Amiko",
        last_name: "mon",
        username: "Amiko",
        email: "a@aol.com",
        password: "pass"
    }
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
});

module.exports = seedUser;
const { User } = require('../models');

const userData = [{
        first_name: "Sal",
        last_name: "Ramop",
        username: "BillyBoy",
        email: "s@aol.com",
        password: "pass"
    },
    {
        first_name: "Charlie",
        last_name: "Reynolds",
        username: "SmamboBeeb",
        email: "l@aol.com",
        password: "pass"
    },
    {
        first_name: "Elizabeth",
        last_name: "Hopkins",
        username: "SnaowoReal",
        email: "a@aol.com",
        password: "pass"
    }
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
});

module.exports = seedUser;
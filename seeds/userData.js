const { User } = require('../models');

const userData = [{
        id: 1,
        first_name: "Sal",
        last_name: "Ramop",
        username: "BillyBoy",
        email: "s@aol.com",
        password: "pass"
    },
    {
        id: 2,
        first_name: "Charlie",
        last_name: "Reynolds",
        username: "SmamboBeeb",
        email: "l@aol.com",
        password: "pass"
    },
    {
        id: 3,
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
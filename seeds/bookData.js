const { Book } = require('../models');

const bookData = [{
        id: 1,
        name: 'Breakfast',
        user_id: 1
    },
    {
        id: 2,
        name: 'Lunch',
        user_id: 1
    },
    {
        id: 3,
        name: 'Dinner',
        user_id: 1
    }
];

const seedBook = () => Book.bulkCreate(bookData, {
    individualHooks: true,
    returning: true
});

module.exports = seedBook;
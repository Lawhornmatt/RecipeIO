const { Book } = require('../models');

const bookData = [{
        name: 'Breakfast',
        user_id: 1
    },
    {
        name: 'Lunch',
        user_id: 1
    },
    {
        name: 'Dinner',
        user_id: 1
    }
];

const seedBook = () => Book.bulkCreate(bookData, {
    individualHooks: true,
    returning: true
});

module.exports = seedBook;
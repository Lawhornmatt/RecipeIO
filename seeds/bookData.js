const { Book } = require('../models');

const bookData = [
    { //1
        name: 'BillyBoy Book 1',
        user_id: 1
    },
    { //2
        name: 'BillyBoy Book: The Sequel',
        user_id: 1
    },
    { //3
        name: 'Charlie Breakfast',
        user_id: 2
    },
    { //4
        name: 'Charlie Dinner',
        user_id: 2
    },
    { //5
        name: 'SnaowoReal Book Deux',
        user_id: 3
    },
    { //6
        name: 'SnaowoReal Book Drei',
        user_id: 3
    }
];

const seedBook = () => Book.bulkCreate(bookData, {
    individualHooks: true,
    returning: true
});

module.exports = seedBook;
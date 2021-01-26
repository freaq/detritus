const express = require('express');
const os = require('os');
const bodyParser = require("body-parser");
const {
    exception
} = require('console');

const server = express();
server.use(bodyParser.json());

server.use(express.static('dist'));
// server.get('/api/getUsername', (request, response) => response.send({
//     username: os.userInfo().username
// }));

const app = {
    id: 99999,
    email: 'joe@gmail.com',
    name: 'Joe',
    xp: 5000,
    maxXP: 25000,
    level: 3,
    progress: 45,
    categories: []
};

const categories = [{
        id: 101,
        name: 'Education',
        description: 'The more the better',
        isRootLevelCategory: true,
        categories: [],
        items: [{
                id: 1001
            },
            {
                id: 1002
            },
            {
                id: 1003
            },
            {
                id: 1004
            }
        ]
    },
    {
        id: 102,
        name: 'Insurance',
        description: 'Crucial to have basic coverage',
        isRootLevelCategory: true,
        categories: [],
        items: [{
            id: 1021
        }, {
            id: 1022
        }]
    },
    {
        id: 103,
        name: 'Finance',
        description: 'All about the money',
        isRootLevelCategory: true,
        categories: [{
                id: 1031
            },
            {
                id: 1032
            }
        ]
    },
    {
        id: 1031,
        name: 'Taxes',
        description: 'Taxes are great'
    },
    {
        id: 1032,
        name: 'Checking Account',
        description: "Everyone has one"
    }
];

const items = [{
        id: 1001,
        name: 'High School Diploma',
        description: "It's great to have a diploma"
    },
    {
        id: 1002,
        name: 'Associates Degree',
        description: "I went to college!"
    },
    {
        id: 1003,
        name: 'Bachelors Degree',
        description: "I'm smart"
    },
    {
        id: 1004,
        name: 'Masters Degree',
        description: ""
    },
    {
        id: 1021,
        name: 'Health Insurance',
        description: ""
    },
    {
        id: 1022,
        name: 'Auto Insurance',
        description: ""
    },
    {
        id: 1031,
        name: 'Taxes',
        description: 'Taxes are great'
    },
    {
        id: 1032,
        name: 'Checking Account',
        description: "Everyone has one"
    }
];

server.get('/api/app', (request, response) => {

    const payload = app;
    payload.categories = categories;

    response.send(payload);
});

server.get('/api/categories/:id', (request, response) => {

    if (!request.params.id) {
        console.error("Category 'Id' parameter not found.");
    }

    const category = categories.find((category) => {
        return category.id === Number(request.params.id);
    });
    if (category) {

        // hydrate the sub-categories with their full data
        category.categories = category.categories || [];
        category.categories = category.categories.map((category) =>
        {
            return categories.find((cat) =>
            {
                return cat.id === category.id;
            });
        });

        // hydrate the items with their full data
        category.items = category.items || [];
        category.items = category.items.map((item) =>
        {
            return items.find((itm) =>
            {
                return itm.id === item.id;
            });
        });
        response.send(category);
    } else {
        console.error("Category with id '" + request.params.id + "' not found.");
    }
});

server.get('/api/items/:id', (request, response) => {

    if (!request.params.id) {
        console.error("Item 'Id' parameter not found.");
    }

    const item = items.find((item) => {
        return item.id === Number(request.params.id);
    });
    if (item) {
        response.send(item);
    } else {
        console.error("Item with id '" + request.params.id + "' not found.");
    }
});




server.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

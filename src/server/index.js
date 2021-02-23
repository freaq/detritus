const express = require('express');
const os = require('os');
const {
    exception
} = require('console');



const server = express();
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use(express.static('dist'));

const API = require('./api.js');
const api = new API();


server.get('/api/app', api.getApp);

server.get('/api/categories/:id', api.getCategory);

server.get('/api/items/:id', api.getItem);

server.post('/api/items/:id', api.createOrUpdateUserItem);

server.get('/api/users/:id', api.getUser);

server.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));



// const categories = [{
//         id: 101,
//         name: 'Education',
//         description: 'The more the better',
//         isRootLevelCategory: true,
//         categories: [],
//         items: [{
//                 id: 1001
//             },
//             {
//                 id: 1002
//             },
//             {
//                 id: 1003
//             },
//             {
//                 id: 1004
//             }
//         ]
//     },
//     {
//         id: 102,
//         name: 'Insurance',
//         description: 'Crucial to have basic coverage',
//         isRootLevelCategory: true,
//         categories: [],
//         items: [{
//             id: 1021
//         }, {
//             id: 1022
//         }]
//     },
//     {
//         id: 103,
//         name: 'Finance',
//         description: 'All about the money',
//         isRootLevelCategory: true,
//         categories: [{
//                 id: 1031
//             },
//             {
//                 id: 1032
//             }
//         ]
//     },
//     {
//         id: 1031,
//         name: 'Taxes',
//         description: 'Taxes are great'
//     },
//     {
//         id: 1032,
//         name: 'Checking Account',
//         description: "Everyone has one"
//     }
// ];

// const items = [{
//         id: "1001",
//         name: 'High School Diploma',
//         description: "It's great to have a diploma"
//     },
//     {
//         id: "1002",
//         name: 'Associates Degree',
//         description: "I went to college!"
//     },
//     {
//         id: "1003",
//         name: 'Bachelors Degree',
//         description: "I'm smart"
//     },
//     {
//         id: "1004",
//         name: 'Masters Degree',
//         description: ""
//     },
//     {
//         id: "1021",
//         name: 'Health Insurance',
//         description: ""
//     },
//     {
//         id: "1022",
//         name: 'Auto Insurance',
//         description: ""
//     },
//     {
//         id: "1031",
//         name: 'Taxes',
//         description: 'Taxes are great'
//     },
//     {
//         id: "1032",
//         name: 'Checking Account',
//         description: "Everyone has one"
//     }
// ];
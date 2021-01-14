const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
// app.get('/api/getUsername', (req, res) => res.send({
//     username: os.userInfo().username
// }));


app.get('/api/app', (req, res) => res.send({
    id: 12345,
    email: 'joe@gmail.com',
    name: 'Joe',
    xp: 5000,
    maxXP: 25000,
    level: 3,
    progress: 45,
    categories: [{
            id: 'abc',
            name: 'Education',
            description: 'The more the better',
            categories: [],
            items: [{
                    id: 'itemEducationHighSchoolDiploma',
                    name: 'High School Diploma',
                    description: "It's great to have a diploma"
                },
                {
                    id: 'itemEducationAssociatesDegree',
                    name: 'Associates Degree',
                    description: "I went to college!"
                },
                {
                    id: 'itemEducationBachelorsDegree',
                    name: 'Bachelors Degree',
                    description: "I'm smart"
                },
                {
                    id: 'itemEducationMastersDegree',
                    name: 'Masters Degree',
                    description: ""
                }
            ]
        },
        {
            id: 'def',
            name: 'Insurance',
            description: 'Crucial to have basic coverage',
            categories: [],
            items: [{
                    id: 'itemInsuranceHealth',
                    name: 'Health Insurance',
                    description: ""
                },
                {
                    id: 'itemInsuranceAuto',
                    name: 'Auto Insurance',
                    description: ""
                }
            ]
        },
        {
            id: 'ghi',
            name: 'Finance',
            description: 'All about the money',
            categories: [{
                    id: 'categoryFinanceTaxes',
                    name: 'Taxes',
                    description: 'Taxes are great'
                },
                {
                    id: 'categoryFinanceCheckingAccount',
                    name: 'Checking Account',
                    description: "Everyone has one"
                }
            ]
        }
    ]
}));


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

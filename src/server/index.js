const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
// app.get('/api/getUsername', (req, res) => res.send({
//     username: os.userInfo().username
// }));


app.get('/api/user', (req, res) => res.send({
    id: 12345,
    email: 'joe@gmail.com',
    name: 'Joe',
    xp: 5000,
    level: 3,
    categories: [{
            id: 'abc',
            name: 'Education',
            description: '',
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
            description: '',
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
        }
    ]
}));


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

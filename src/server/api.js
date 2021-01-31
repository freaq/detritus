const DetritusDB = require('./database/detritusDb.js');
const database = new DetritusDB();

let items;

module.exports = class API {

    getApp = (request, response) => {

        const payload = {
            id: 99999,
            email: 'joe@gmail.com',
            name: 'Joe',
            xp: 5000,
            maxXP: 25000,
            level: 3,
            progress: 45,
            categories: []
        };

        database.getCategories().then((result) => {
            payload.categories = result;
            response.send(payload);
        });
    };

    getCategory = (request, response) => {

        if (!request.params.id) {
            console.error("Category 'Id' parameter not found.");
        }

        database.getCategory(request.params.id).then((result) => {

            if (!result) {
                console.error('getCategory returned an empty result');
            }

            console.log(result);

            const category = result.find((category) => {
                return category.id === request.params.id;
            });
            if (category) {

                // hydrate the sub-categories with their full data
                category.categories = category.categories || [];
                category.categories = category.categories.map((category) => {
                    return categories.find((cat) => {
                        return cat.id === category.id;
                    });
                });

                if (!items) {
                    database.getItems().then((result) => {
                        items = result;

                        // hydrate the items with their full data
                        category.items = category.items || [];
                        category.items = category.items.map((item) => {
                            return items.find((itm) => {
                                return itm.id === item.id;
                            });
                        });
                        response.send(category);


                    });
                } else {
                    // hydrate the items with their full data
                    category.items = category.items || [];
                    category.items = category.items.map((item) => {
                        return items.find((itm) => {
                            return itm.id === item.id;
                        });
                    });
                    response.send(category);
                }

            } else {
                console.error("Category with id '" + request.params.id + "' not found.");
            }
        });
    };

    getItem = (request, response) => {

        if (!request.params.id) {
            console.error("Item 'Id' parameter not found.");
        }

        const item = items.find((item) => {
            return item.id === request.params.id;
        });
        if (item) {
            response.send(item);
        } else {
            console.error("Item with id '" + request.params.id + "' not found.");
        }
    };
}
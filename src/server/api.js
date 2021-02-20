const DetritusDB = require('./database/detritusDb.js');
const database = new DetritusDB();

let items;

module.exports = class API {

    getApp = (request, response) => {

        const app = {
            id: 'detritus',
            categories: []
        };

        database.getCategories().then((result) => {
            app.categories = result;
            response.send(app);
        });
    };

    getUser = (request, response) => {
        if (!request.params.id) {
            console.error("User 'auth0UserId' parameter not found.");
        }

        database.getUser(request.params.id).then((users) => {

            if (!users) {
                console.error('getUser returned an empty result');
            }

            const user = users[0];

            console.log(user);

            database.getCategories().then((categories) => {
                user.categories = categories;
                response.send(user);
            });
        });
    };

    getCategory = (request, response) => {

        if (!request.params.id) {
            console.error("Category 'id' parameter not found.");
        }

        database.getCategory(request.params.id).then((result) => {

            if (!result) {
                console.error('getCategory returned an empty result');
            }

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
            console.error("Item 'id' parameter not found.");
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
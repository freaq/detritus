const CosmosDB = require('./cosmosDb.js');
const database = new CosmosDB();

module.exports = class DetritusDB {

    async getCategories() {
        const querySpec = {
            query: 'SELECT * FROM categories'
        };

        const results = await database.getItems('categories', querySpec);
        return results;
    };

    async getCategory(categoryId) {
        const querySpec = {
            query: "SELECT * FROM categories c WHERE c.id = '" + categoryId + "' "
        };

        const results = await database.getItems('categories', querySpec);
        return results;
    };

    async getItems() {
        const querySpec = {
            query: "SELECT * FROM items"
        };

        const results = await database.getItems('items', querySpec);
        return results;
    };

    async getItem(itemId) {
        const querySpec = {
            query: "SELECT * FROM items i WHERE i.id = '" + itemId + "' "
        };

        const results = await database.getItems('items', querySpec);
        return results;
    };

    async getUser(auth0UserId) {
        const querySpec = {
            query: "SELECT * FROM users u WHERE u.auth0UserId = '" + auth0UserId + "' "
        };

        const results = await database.getItems('users', querySpec);
        return results;
    };

    async createOrUpdateUserItem(item) {

        const results = await database.upsertItem('userItems', item);
        return results;
    };


}
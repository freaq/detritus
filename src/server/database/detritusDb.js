const CosmosDB = require('./cosmosDb.js');
const database = new CosmosDB();

module.exports = class DetritusDB {

    async getCategories() {
        const querySpec = {
            query: 'SELECT * FROM categories'
        };

        const results = await database.fetchAll('categories', querySpec);
        return results;
    };

    async getCategory(categoryId) {
        const querySpec = {
            query: "SELECT * FROM categories c WHERE c.id = '" + categoryId + "' "
        };
    
        const results = await database.fetchAll('categories', querySpec);
        return results;
    };

    async getItems() {
        const querySpec = {
            query: "SELECT * FROM items"
        };
    
        const results = await database.fetchAll('items', querySpec);
        return results;
    };    

    async getUser(auth0UserId) {
        const querySpec = {
            query: "SELECT * FROM users u WHERE u.auth0UserId = '" + auth0UserId + "' "
        };
    
        const results = await database.fetchAll('users', querySpec);
        return results;
    };


}
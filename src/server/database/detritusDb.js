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

}
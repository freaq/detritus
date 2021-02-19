// import environment variables defined in .env
require('dotenv').config();

const CosmosClient = require('@azure/cosmos').CosmosClient;

const dbClient = new CosmosClient(process.env.COSMOSDB_CONNECTION_STRING);

const databaseId = process.env.COSMOS_DATABASE_ID;

module.exports = class CosmosDB {

    async fetchAll(container, querySpec) {
        const {
            resources: results
        } = await dbClient
            .database(databaseId)
            .container(container)
            .items
            .query(querySpec)
            .fetchAll();

        return results;
    }

    async createItem(container, newItem) {
        const {
            resource: createdItem
        } = await dbClient
            .database(databaseId)
            .container(container)
            .items
            .create(newItem);

        return createdItem;
    }

    async updateItem(container, item) {
        const {
            resource: updatedItem
        } = await container
            .item(item.id)
            .replace(item);

        return updatedItem;
    }

    async deleteItem(container, item) {
        const {
            resource: result
        } = await container
            .item(item.id)
            .delete();

        return result;
    }

}
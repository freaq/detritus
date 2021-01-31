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
            .items.query(querySpec)
            .fetchAll();

        return results;
    }

}
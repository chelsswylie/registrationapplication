const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://Chels:Chewy1109!@cluster0.tdspp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

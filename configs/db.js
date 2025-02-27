const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'library';

const main = async () => {
    await client.connect();

    console.log('Connect Successfully');


    const db = client.db(dbName);

    return 'Done';
}

main();
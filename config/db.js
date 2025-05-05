const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://anikarahman201:bCOUkoWDqU6TIpXH@books.xsq5zah.mongodb.net/?retryWrites=true&w=majority&appName=Books";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function database() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        const db = client.db("Library");
        return db;
    } catch (err) {
        console.error("MongoDB Connection Error", err);
        throw err;
    }
}

module.exports = database;
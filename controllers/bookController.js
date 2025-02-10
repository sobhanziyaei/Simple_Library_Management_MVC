const url = require("url");

const bookModel = require("./../models/Book");

const getAll = async (req, res) => {
    const books = await bookModel.find();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(books));
    res.end();
}

module.exports = {
    getAll,
}
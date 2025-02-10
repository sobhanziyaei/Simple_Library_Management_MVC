const http = require("http");
const url = require("url");
const fs = require("fs");

const bookController = require("./controllers/bookController");

const server = http.createServer((req, res) => {

    // فعال‌سازی CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === "GET" && req.url === "/api/books") {
        bookController.getAll(req, res);
    }

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
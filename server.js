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

    // ✅ پردازش URL فقط در یک‌جا
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (req.method === "GET" && pathname === "/api/books" && !query.id) {
        bookController.getAll(req, res);
    }
    else if (req.method === "GET" && pathname === "/api/books" && query.id) {
        bookController.getById(req, res, query.id);  // ✅ ارسال id مستقیماً به کنترلر
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "مسیر یافت نشد" }));
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

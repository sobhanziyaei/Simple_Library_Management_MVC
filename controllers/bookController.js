const bookModel = require("./../models/Book");

const getAll = async (req, res) => {
    const books = await bookModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(books));
    res.end();
}

const getById = async (req, res, id) => {  // ✅ دریافت id به‌صورت مستقیم
    if (!id) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "لطفاً یک شناسه معتبر ارسال کنید" }));
        res.end();
        return;
    }

    const books = await bookModel.find();
    const book = books.find((book) => book.id == id);  // ✅ مقایسه انعطاف‌پذیر

    if (book) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(book));
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "کتاب موردنظر پیدا نشد" }));
        res.end();
    }
}

module.exports = {
    getAll, getById
};

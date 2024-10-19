const connection = require("../connection/connection");
const { STATUS_CODES } = require('http');
const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_NOT_FOUND = 404;
const STATUS_INTERNAL_SERVER_ERROR = 500;

// create an author /POST
exports.createAuthor = async (req, res) => {
    try {
        const { name, bio } = req.body;
        const sql = "INSERT INTO author (name, bio) VALUES (?, ?)";
        const results = connection.run(sql, [name, bio]);
        res.status(STATUS_CREATED).json({ message: 'Author created successfully', "Record added": results.values });
    } catch (err) {
        console.error(err.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR] });
    }
}

// Get all the authors /GET
exports.getAllAuthors = async (req, res) => {
    try {
        const sql = "SELECT * FROM author";
        connection.all(sql, (error, authors) => {
            res.status(STATUS_OK).json({ authors });
        });
    } catch (err) {
        console.error(err.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR] });
    }
}

// Get single author  /GET/:author_id
exports.getAuthorById = async (req, res) => {
    try {
        const { author_id } = req.params;
        const sql = "SELECT * FROM author WHERE author_id=?";
        const results = connection.get(sql, author_id, (err, row) => {
            if (err) {
                console.error(err.message);
                return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR]});
            }
            if (!row) {
                return res.status(STATUS_NOT_FOUND).json({ message: "Author not found"});
            }
            return res.status(STATUS_OK).json({ Author: row});
        });
    } catch (err) {
        console.error(err.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR] });
    }
}

// Update author  /PUT/:author_id
exports.updateAuthor = async (req, res) => {
    try {
        const { author_id } = req.params;
        const { name, bio} = req.body;
        const sql = "SELECT * FROM author WHERE author_id=?";
        const results = connection.get(sql, author_id, (err, row) => {
            if (err) {
                console.error(err.message);
                return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR]});
            }
            if (!row) {
                return res.status(STATUS_NOT_FOUND).json({ message: "Author not found"});
            } else {
                // update entry since we determined it exists
                const sql2 = "UPDATE author SET name=?, bio=? WHERE author_id=?";
                connection.run(sql2, [name, bio, author_id], (updateErr, updateReply) => {
                    if (updateErr) {
                        console.error("Error on update:" + name + ":" + bio + ":" + author_id + "---" + updateErr.message);
                    } 
                    res.status(STATUS_OK).json({ message: "Author " + author_id + " was updated"});
                });
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR] });
    }
}

// Update author  /DELETE/:author_id
exports.deleteAuthor = async (req, res) => {
    try {
        const { author_id } = req.params;
        const sql = "DELETE FROM author WHERE author_id=?";
        const results = connection.run(sql, author_id, (err, row) => {
            if (err) {
                console.error(err.message);
                return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR]});
            }
            if (!row) {
                return res.status(STATUS_NOT_FOUND).json({ message: "Author not found"});
            }
            res.status(STATUS_OK).json({ message: "Author " + author_id + " was deleted"});
        });
    } catch (err) {
        console.error(err.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR] });
    }
}


// create a book  /POST
exports.createBook = async (req, res) => {
    try {
        const { title,description,author_id,pubdate } = req.body;
        const sql = "INSERT INTO book (title,description,author_id,pubdate) VALUES (?, ?, ?, ?)";
        const results = connection.run(sql, [title,description,author_id,pubdate]);
        res.status(STATUS_CREATED).json({ message: 'Book created successfully', "Record inserted": results.values });
    } catch (err) {
        console.error(err.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR] });
    }
}

// Get all the books   /GET/
exports.getAllBooks = async (req, res) => {
    try {
        const sql = "SELECT * FROM author INNER JOIN book ON author.author_id=book.author_id";
        connection.all(sql, (error, books) => {
            res.status(STATUS_OK).json({ books });
        });
    } catch (err) {
        console.error(err.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR] });
    }
}

// Get single book  /GET/:book_id
exports.getBookById = async (req, res) => {
    try {
        const { book_id } = req.params;
        const sql = "SELECT * FROM book INNER JOIN author WHERE book_id=?";
        const results = connection.get(sql, book_id, (err, row) => {
            if (err) {
                console.error(err.message);
                return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR]});
            }
            if (!row) {
                return res.status(STATUS_NOT_FOUND).json({ message: "Book not found"});
            }
            return res.status(STATUS_OK).json({ Book: rows[0] });
        });
    } catch (err) {
        console.error(err.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR] });
    }
}

// Update book  /PUT/:book_id
exports.updateBook = async (req, res) => {
    try {
        const { book_id } = req.params;
        const { title, description, author_id, pubdate} = req.body;

        const sql = "SELECT * FROM book WHERE book_id=?";
        const results = connection.run(sql, book_id, (err, row) => {
            if (err) {
                console.error(err.message);
                return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR]});
            }
            if (!row) {
                return res.status(STATUS_NOT_FOUND).json({ message: "Book not found"});
            } else {
                // update entry since we determined it exists
                const sql2 = "UPDATE book SET title=?, description=?, author_id=?, pubdate=? WHERE book_id=?";
                connection.query(sql2, [title, description, author_id, pubdate, book_id], (updateErr, updateReply) => {
                    if (updateErr) {
                        console.error("Error on update:" + title + ":" + description + ":" + author + ":" + pubdate + "---" + updateErr.message);
                    } 
                    res.status(STATUS_OK).json({ message: "Book " + book_id + " was updated"});
                });
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR] });
    }
}

// Delete book  /DELETE/:book_id
exports.deleteBook = async (req, res) => {
    try {
        const { book_id } = req.params;
        console.log("book_id:" + book_id);
        const sql = "DELETE FROM book WHERE book_id=?";
        const results = connection.run(sql, book_id, (err, row) => {
            if (err) {
                console.error(err.message);
                return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR]});
            }
            if (!row) {
                return res.status(STATUS_NOT_FOUND).json({ message: "Book not found"});
            }
            res.status(STATUS_OK).json({ message: "Book " + book_id + " was deleted"});
        });
    } catch (err) {
        console.error(err.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: STATUS_CODES[STATUS_INTERNAL_SERVER_ERROR] });
    }
}
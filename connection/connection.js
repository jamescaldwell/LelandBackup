const sqlite3 = require('sqlite3').verbose();

let connection = new sqlite3.Database(':memory:', async (err) => {
    if (!err) {
        console.log ("Connection to database success");
        const createTableSql = `
            CREATE TABLE author(
            author_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            bio TEXT
            );
            CREATE TABLE book(
                    book_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                    title TEXT,
                    description TEXT,
                    author_id INTEGER,
                    pubdate DATE,
                    FOREIGN KEY (author_id) REFERENCES author (author_id) ON DELETE CASCADE
                    );`;
        await connection.exec(createTableSql, (err) => {
            if (err) {
                return console.error('Error creating tables:', err.message);
            }
            console.log('Tables created successfully');
        });
    } else {
        console.log("Connection to database failed:" + JSON.stringify(err));
    }
});

module.exports = connection;
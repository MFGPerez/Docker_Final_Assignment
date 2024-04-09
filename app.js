/**
 * Author: Marcel Gallardo 
 * Date Created: March/28th/2024
 *
 */

const express = require('express');
const app = express();

// book array containing the book data
const books = [
    { id: 1, title: 'Dune', author: 'Frank Herbert' },
    { id: 2, title: 'Fire & Blood', author: 'George R. R. Martin' },
    { id: 3, title: 'The Shining', author: 'Stephen King ' }
];

// Route to get all books
app.get('/api/books', function(req, res) {
    res.json(books);
});

// Route to get one book via ID
app.get('/api/books/:id', function(req, res) {
    const id = parseInt(req.params.id);
    const book = books.find(function(book) {
        return book.id === id;
    });
    if (!book) {
        return res.status(404).send('Book cannot be found');
    }
    else {
        res.json(book);
    }

});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Server is running on port ' + PORT);
});

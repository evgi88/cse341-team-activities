const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

router.get('/',(req, res, next) => {
    res.render('pages/form02', { 
        title: 'Add a Book', 
        path: '/prove02'
    });
});

router.post('/addBook', (req, res, next) => {
    let books = getBooksAsJson();
       
    books.push({
        name: req.body.bookName,
        author: req.body.bookAuthor,
        summary: req.body.bookSummary
    });

    fs.writeFileSync(getBooksPath(), JSON.stringify(books));

    res.redirect('/prove02/display02')
});

router.get('/display02',(req, res, next) => {
    res.render('pages/display02', { 
        title: 'Book Summaries', 
        path: '/prove02',
        books: getBooksAsJson()
    });
});

function getBooksAsJson() {
    let booksPath = getBooksPath();
    return JSON.parse(fs.readFileSync(booksPath).toString());
}

function getBooksPath() {
    return path.join(__dirname, "..", "data", "books02.json");
}

module.exports = router;
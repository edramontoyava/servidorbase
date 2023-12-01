const express= require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller');
const authMiddleware = require('../utils/auth.middleware');


router.get('/', booksController.getBooks);
router.get('/:bookId', booksController.getBookByid);
router.post('/',authMiddleware.authenticateToken,booksController.newBook);
router.put('/:bookId',authMiddleware.authenticateToken ,booksController.updateBook);
router.delete('/:bookId', authMiddleware.authenticateToken,booksController.deleteBook);

module.exports = router;
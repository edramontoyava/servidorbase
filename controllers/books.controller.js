const Book = require("../models/book.model");

exports.getBooks = async (req, res) => {
  try {
    const book = await Book.find();
    return res.status(200).json({
      message: "Libros encontrados",
      data: book,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error al consultar libros",
      data: error,
    });
  }
};

exports.getBookByid = async (req, res) => {
  const bookId = req.params.bookId;
  try {
    const book = await Book.findById(bookId);
    return res.status(200).json({
      message: "Consultando el libro con id:" + bookId,
      data: book,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error al consultar el libro",
      data: error,
    });
  }
};

exports.newBook = async (req, res) => {
    try{
        const {titulo, autor, isbn, genero, precio, stock} = req.body;
        const newBook = new Book({titulo, autor, isbn, genero, precio, stock});
        await newBook.save();
        return res.status(200).json({
            message : "Libro creado",
            data: newBook
        })
    }catch (error) {
        return res.status(404).json({
            message : "Error al crear libro",
            data: error
        })
    }
}

exports.updateBook = async (req, res) => {
    const bookId=req.params.bookId;
    newData = req.body;
    try{

        const updateBook= await Book.findByIdAndUpdate(bookId, newData, {new: true});
        return res.status(201).json({
            message : "Actualizando libro encontrado por ID: "+bookId,
            data: updateBook
        })
    }catch (error) {
        return res.status(404).json({
            message : "Error al editar libro",
            data: error
        })
    }
}

exports.deleteBook = async (req, res) => {
    const bookId=req.params.bookId;
    try{
        await Book.findByIdAndDelete(bookId);
        return res.status(201).json({
            message : "Libro eliminado encontrado por ID: "+bookId
        })
    }catch (error) {
        return res.status(404).json({
            message : "Error al editar libro",
            data: error
        })
    }
}
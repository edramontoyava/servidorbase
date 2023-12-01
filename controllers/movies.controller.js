const movies = require("../models/movies.model");

exports.getMovies = async (req, res) => {
    try {
        const movie = await movies.find();
        return res.status(200).json({
            message: "Peliculas encontradas",
            data: movie,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error al consultar peliculas",
            data: error,
        });
    }
};

exports.getMoviesByid = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await movies.findById(movieId);
        return res.status(200).json({
            message: "Consultando la pelicula con id:" + movieId,
            data: movie,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error al consultar la pelicula",
            data: error,
        });
    }
};

exports.newMovie = async (req, res) => {
    try {
        const {_id,nombre,director,año,duracion, genero} = req.body;
        const newMovie = new movies({_id,nombre,director,año,duracion, genero});
        await newMovie.save();
        return res.status(200).json({
            message: "Pelicula creada",
            data: newMovie,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error al crear la pelicula",
            data: error,
        });
    }
};

exports.UpdateMovie = async (req, res) => {
    const movieId = req.params.movieId;
    newData = req.body;
    try {
        const updateMovie = await movies.findByIdAndUpdate(movieId, newData, {
            new: true,
        });
        return res.status(201).json({
            message: "Actualizando pelicula encontrado por ID: " + movieId,
            data: updateMovie,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error al actualizar la pelicula",
            data: error,
        });
    }
};

exports.deleteMovie = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const deleteMovie = await movies.findByIdAndDelete(movieId);
        return res.status(201).json({
            message: "Eliminando pelicula encontrado por ID: " + movieId,
            data: deleteMovie,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error al eliminar la pelicula",
            data: error,
        });
    }
}


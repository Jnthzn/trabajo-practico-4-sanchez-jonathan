import { Movie } from "../models/movie.model.js";

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();

    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener las películas",
    });
  }
};

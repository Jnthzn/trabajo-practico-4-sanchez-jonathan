import { Movie } from "../models/movie.model.js";

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener las películas" });
  }
};

export const createMovie = async (req, res) => {
  try {
    const { title, genre, duration, year, synopsis } = req.body;

    // 1. Validar campos obligatorios
    if (!title || !genre || !duration || !year) {
      return res.status(400).json({
        message: "title, genre, duration y year son obligatorios",
      });
    }
    // 2. Validar duration
    if (!Number.isInteger(duration) || duration <= 0) {
      return res.status(400).json({
        message: "duration debe ser un número entero mayor a 0",
      });
    }

    // 3. Validar year
    const currentYear = new Date().getFullYear();

    if (
      !Number.isInteger(year) ||
      year < 1888 ||
      year > currentYear ||
      year.toString().length !== 4
    ) {
      return res.status(400).json({
        message: "year inválido (1888 - año actual, 4 dígitos)",
      });
    }

    // 4. Validar synopsis si viene
    if (synopsis && typeof synopsis !== "string") {
      return res.status(400).json({
        message: "synopsis debe ser un texto",
      });
    }

    // 5. Verificar título único
    const existingMovie = await Movie.findOne({ where: { title } });

    if (existingMovie) {
      return res.status(400).json({
        message: "Ya existe una película con ese título",
      });
    }

    // 6. Crear película
    const newMovie = await Movie.create({
      title,
      genre,
      duration,
      year,
      synopsis,
    });

    return res.status(201).json(newMovie);
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear la película",
    });
  }
};

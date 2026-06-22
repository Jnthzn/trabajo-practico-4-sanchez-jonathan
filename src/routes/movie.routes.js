import { Router } from "express";
import {
  getAllMovies,
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controllers.js";

const router = Router();

router.get("/", getAllMovies);
router.post("/", createMovie);
router.get("/:id", getMovieById);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;

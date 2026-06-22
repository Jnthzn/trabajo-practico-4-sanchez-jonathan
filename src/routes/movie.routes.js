import { Router } from "express";
import { getAllMovies } from "../controllers/movie.controllers.js";

const router = Router();

router.get("/", getAllMovies);

export default router;

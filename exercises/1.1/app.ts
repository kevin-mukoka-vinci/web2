import express from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import moviesRouter from './routes/movies';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use('/films', moviesRouter);


export default app;

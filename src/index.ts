import express from "express";
import cors from "cors";
import { config } from "dotenv";
import userRouter from "./routes/userRoutes";

config();


class App {
	public app: express.Application;

	public constructor() {
		this.app = express();

		this.middlewares();
		this.routes();
	}

	// TODO Fazer o middlewares para erros 
	private middlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(cors());
	}

	private database() {
		// conection with DB if need
	}

	private routes() {
		// TODO criar rotas para fazer interação com os posts
		this.app.use("/user", userRouter)
	}
}

export default new App().app;

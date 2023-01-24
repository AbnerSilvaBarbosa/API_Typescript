import express, { NextFunction, Response, Request, } from "express";
import cors from "cors";
import "express-async-errors"
import userRouter from "./routes/userRoutes";





class App {
	public app: express.Application;

	public constructor() {
		this.app = express();

		this.middlewares();
		this.routes();
	}

	private middlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(cors());
	}

	private database() {
		// conection with DB if need
	}

	private routes() {

		// this.app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
		// 	return res.json({
		// 		status: "Error",
		// 		message: error.message
		// 	})
		// })

		// TODO criar rotas para fazer interação com os posts
		this.app.use("/user", userRouter)
	}
}

export default new App().app;

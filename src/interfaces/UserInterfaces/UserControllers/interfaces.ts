import { Request, Response } from "express";

export interface IControler {
	execute(req: Request, res: Response): Promise<Response>
}
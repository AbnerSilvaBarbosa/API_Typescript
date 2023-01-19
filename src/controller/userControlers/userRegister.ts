import { IControler } from './../../interfaces/UserInterfaces/userInterface';
import { validationResult } from 'express-validator';
import { Request, Response } from "express";
import userServicesCreate from "../../services/userServices/userServicesCreate";

type TUser = {
	name: string
	email: string
	password: string
}



class UserRegister implements IControler {
	public async execute(req: Request, res: Response): Promise<Response> {

		const { name, email, password }: TUser = req.body


		const errors = validationResult(req)

		// TODO function for filter firts erros of paraments



		if (!errors.isEmpty()) {
			return res.status(401).json({ errors: errors.array() })
		}



		try {
			const user = await userServicesCreate.execute(name, email, password)
			return res.status(201).json(user)

		} catch (error: unknown | any) {

			return res.status(401).json(error.message)
		}

	}
}


export default UserRegister
import { IControler } from './../../interfaces/UserInterfaces/UserControllers/interfaces';
import { Request, Response } from "express"
import { validationResult } from 'express-validator';
import UserServicesRead from '../../services/userServices/userServicesRead';


class UserSearchById implements IControler {
	public async execute(req: Request, res: Response): Promise<Response> {

		const { userId } = req.params


		const errors = validationResult(req)

		if (!errors.isEmpty()) {
			return res.status(401).json({ errors: errors.array() })
		}



		try {
			const userAccount = await UserServicesRead.findById(userId)
			return res.status(202).send({ user: userAccount })

		} catch (err: unknown | any) {
			return res.status(401).send(err.message)

		}



	}
}

export default UserSearchById
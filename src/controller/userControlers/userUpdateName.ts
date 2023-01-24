import userServicesUpdateName from "../../services/userServices/userServicesUpdateName";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { IControler } from "../../interfaces/UserInterfaces/UserControllers/interfaces";

class UserUpdateName implements IControler {

	public async execute(req: Request, res: Response): Promise<Response> {
		const { name } = req.body
		const { userId } = req.params
		const email = req.headers.email



		const errors = validationResult(req)

		if (!errors.isEmpty()) {
			return res.status(401).json({ errors: errors.array() })
		}

		try {
			const result = userServicesUpdateName.execute(userId, name, email)
			return res.status(200).json({ newInfos: (await result).name })
		} catch (error: undefined | any) {
			return res.status(400).send(error.message)

		}



	}
}

export default UserUpdateName
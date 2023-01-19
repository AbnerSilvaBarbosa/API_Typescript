import userServicesLogin from "../../services/userServices/userServicesLogin";
import { Request, Response } from "express"


class UserLoginToken {

	public async execute(req: Request, res: Response) {

		const { email, password } = req.body

		const result = await userServicesLogin.execute(email, password)



		return res.status(200).json(result)

	}
}


export default UserLoginToken
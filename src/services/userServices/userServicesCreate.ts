import { TUserAccount } from './../../types/userTypes';
import { IUserServicesCreate } from "../../interfaces/UserInterfaces/UserServices/interfaces"
import userModelCreate from "../../models/userModels/userModelCreate"
import UserModelRead from "../../models/userModels/userModelRead";


class UserServicesCreate implements IUserServicesCreate {

	public async execute(name: string, email: string, password: string): Promise<TUserAccount> {


		const userAlreadyExiste = await UserModelRead.findByEmail(email)

		if (userAlreadyExiste) {
			throw new Error("User already exists.")
		}

		const user = await userModelCreate.save(name, email, password)

		return user
	}

}


export default new UserServicesCreate()
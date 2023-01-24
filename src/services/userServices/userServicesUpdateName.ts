import { TUserName } from './../../types/userTypes';
import userModelRead from "../../models/userModels/userModelRead";
import userModelUpdate from "../../models/userModels/userModelUpdate";
import { IUserServicesUpdateName } from '../../interfaces/UserInterfaces/UserServices/interfaces';

class UserServicesUpadateName implements IUserServicesUpdateName {


	async execute(userId: string, name: string, email: string | string[] | undefined): Promise<TUserName> {
		const user = await userModelRead.findById(userId)

		if (!user) {
			throw new Error("User not exist's with this ID")
		}

		if (user.email != email) {
			throw new Error("User not exist's with this ID");

		}
		if (name === user.name) {
			throw new Error("You need pass a diferent name")
		}


		try {
			const result = await userModelUpdate.updateName(userId, name)
			return result
		} catch (error: undefined | any) {
			throw new Error(error.message)
		}

	}
}


export default new UserServicesUpadateName()
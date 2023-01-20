import UserModelRead from "../../models/userModels/userModelRead";
import { IUserServicesRead } from "../../interfaces/UserInterfaces/UserServices/interfaces"


class UserServicesRead implements IUserServicesRead {

	public async findByEmail(email: string) {
		const user = await UserModelRead.findByEmail(email)

		if (!user) {
			throw new Error("Any user with this email")
		}

		return user

	}

	public async findById(userId: string) {
		const user = await UserModelRead.findById(userId)

		if (!user) {
			throw new Error("Any user with this ID")
		}

		return user
	}
}

export default new UserServicesRead()


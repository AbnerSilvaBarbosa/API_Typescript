import UserModelRead from "../../models/userModels/userModelRead";

class UserServicesRead {

	protected async findByEmail(email: string) {
		const user = await UserModelRead.findByEmail(email)

		if (!user) {
			throw new Error("Nenhum usuario com esse email")
		}

		return user

	}

	public async findById(userId: number) {
		const user = await UserModelRead.findById(userId)

		if (!user) {
			throw new Error("Nenhum usuario com esse ID")
		}

		return user
	}
}

export default UserServicesRead


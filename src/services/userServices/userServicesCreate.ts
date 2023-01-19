import userModelCreate from "../../models/userModels/userModelCreate"
import UserModelRead from "../../models/userModels/userModelRead";


class UserServicesCreate {

	// TODO trocar nome da função para createUser
	public async execute(name: string, email: string, password: string) {


		const userAlreadyExiste = await UserModelRead.findByEmail(email)

		if (userAlreadyExiste) {
			throw new Error("User already exists.")
		}

		const user = await new userModelCreate().save(name, email, password)

		return user
	}

}


export default new UserServicesCreate()
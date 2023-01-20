import { TUserLogin } from './../../types/userTypes';
import { IUserServicesLogin } from "../../interfaces/UserInterfaces/UserServices/interfaces"
import userModelLogin from "../../models/userModels/userModelLogin";
import generateToken from "../../scripts/tokengeneration"
import userModelRead from "../../models/userModels/userModelRead";
import { compare } from "bcrypt"

class UserServicesLogin implements IUserServicesLogin {

	public async execute(email: string, userPassword: string): Promise<TUserLogin | undefined> {

		const verifyIfUserExists = await userModelRead.findByEmail(email)

		if (!verifyIfUserExists) {
			throw new Error("Email or Password is incorret ")
		}

		const user = await userModelLogin.getEmailAndPassword(email)

		if (user) {

			try {


				const validPassword = await compare(userPassword, user.password)

				if (!validPassword) {
					throw new Error("Email or Password is incorret ")
				}

				const { name, email, postsCreate, postsLike, comments, userId } = user

				const token = generateToken(email)

				const infosUser: TUserLogin = { token: token, userId: userId, name: name, email: email, postsCreate: postsCreate, postsLike: postsLike, comments: comments }

				return infosUser

			} catch (error: undefined | any) {

				return error.message

			}

		}
	}
}

export default new UserServicesLogin()
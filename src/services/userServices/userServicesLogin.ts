import userModelLogin from "../../models/userModels/userModelLogin";
import UserServicesRead from "./userServicesRead";
import generateToken from "../../scripts/tokengeneration"
import { compare } from "bcrypt"
import { Comment, Like, Post } from "@prisma/client";

type userLogin = {
	email: string,
	password: string,
	name: string,
	postsCreate: Post[];
	postsLike: Like[]
}

// TODO criar tipagem e intreface
class UserServicesLogin extends UserServicesRead {

	public async execute(email: string, password: string) {

		const verifyIfUserExists = await this.findByEmail(email)

		if (!verifyIfUserExists) {
			throw new Error("Email or Password is incorret ")
		}



		const user: userLogin | null = await userModelLogin.getEmailAndPassword(email)

		if (user) {
			const validPassword = await compare(password, user.password)

			if (!validPassword) {
				throw new Error("Email or Password is incorret 2")
			}

			const token = generateToken(user.email)
			return { token, name: user.name, email: user.email, postsCreate: user.postsCreate, likePosts: user.postsLike }

		}


	}



}

export default new UserServicesLogin()
import { TUserWithPassword } from './../../types/userTypes';
import { IUserModelLogin } from "../../interfaces/UserInterfaces/UserModels/interfaces"
import { PrismaClient } from '@prisma/client';

class UserModelLogin implements IUserModelLogin {
	private prisma: PrismaClient

	public constructor() {
		this.prisma = new PrismaClient()
	}

	public async getEmailAndPassword(email: string): Promise<TUserWithPassword | null> {
		try {
			const result = this.prisma.user.findUnique({
				where: {
					email,
				},
				select: {
					userId: true,
					name: true,
					email: true,
					password: true,
					postsCreate: true,
					postsLike: true,
					comments: true,
				}
			})


			return result
		} catch (error: any) {
			throw new Error(error)
		}
	}
}

export default new UserModelLogin()
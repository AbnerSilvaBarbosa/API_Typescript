import { PrismaClient } from '@prisma/client';
import { IUserModelReadInterface } from './../../interfaces/UserInterfaces/userInterface';
import { TUserAccountAll, UserAccount } from './../../types/userTypes';
import userModelCreate from "./userModelCreate";

class UserModelRead implements IUserModelReadInterface {

	private prisma: PrismaClient

	constructor() {
		this.prisma = new PrismaClient()
	}

	public async findByEmail(email: string): Promise<UserAccount | null> {
		try {
			const result = await this.prisma.user.findUnique({
				where: {
					email: email
				}
			})

			return result
		} catch (error) {
			throw new Error("Failed Database")
		}
	}

	public async findById(userId: number): Promise<TUserAccountAll | null> {
		try {
			const result = await this.prisma.user.findUnique({
				where: {
					userId: userId
				},
				select: {
					userId: true,
					name: true,
					email: true,
					comments: true,
					postsCreate: true,
					postsLike: true,
				}
			})

			return result
		} catch (error) {
			throw new Error("Failed Database")
		}

	}
}

export default new UserModelRead()
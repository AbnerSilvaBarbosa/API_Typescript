import { PrismaClient } from '@prisma/client';
import { IUserModelReadInterface } from '../../interfaces/UserInterfaces/UserModels/interfaces';
import { TUserAccountAll, TUserAccount } from './../../types/userTypes';


class UserModelRead implements IUserModelReadInterface {

	private prisma: PrismaClient

	constructor() {
		this.prisma = new PrismaClient()
	}

	public async findByEmail(email: string): Promise<TUserAccount | null> {
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

	public async findById(userId: string): Promise<TUserAccountAll | null> {
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
import { TUserAccount } from './../../types/userTypes';
import { IUserModelCreateInterface } from '../../interfaces/UserInterfaces/UserModels/interfaces';
import { PrismaClient } from '@prisma/client';
import { hash } from "bcrypt"

class UserModelCreate implements IUserModelCreateInterface {

	protected prisma: PrismaClient

	constructor() {
		this.prisma = new PrismaClient()

	}

	public async save(name: string, email: string, password: string): Promise<TUserAccount> {

		const passwordHash = await hash(password, 8)

		try {
			const result = await this.prisma.user.create({
				data: {
					name,
					email,
					password: passwordHash,
				},
			});

			return result;
		} catch (error) {
			throw new Error("Failed Database")
		}
	}

}

export default new UserModelCreate()
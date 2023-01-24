import { IUserModelUpdateName } from './../../interfaces/UserInterfaces/UserModels/interfaces';
import { PrismaClient } from "@prisma/client";
import { TUserName } from '../../types/userTypes';
class UserModelUpdate implements IUserModelUpdateName {

	private prisma: PrismaClient

	public constructor() {
		this.prisma = new PrismaClient()
	}

	public async updateName(userId: string, name: string): Promise<TUserName> {

		try {

			const result = await this.prisma.user.update({
				data: {
					name

				},
				where: {
					userId
				},
				select: {
					name: true,
				}
			})

			return result
		} catch (error) {

			throw new Error("Error Database")

		}



	}

}

export default new UserModelUpdate()
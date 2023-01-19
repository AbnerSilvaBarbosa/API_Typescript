import { PrismaClient } from '@prisma/client';


// TODO criar tipagem e intreface
class UserModelLogin {
	private prisma: PrismaClient

	public constructor() {
		this.prisma = new PrismaClient()
	}

	public async getEmailAndPassword(email: string) {
		try {
			const result = this.prisma.user.findUnique({
				where: {
					email,
				},
				select: {
					email: true,
					password: true,
					name: true,
					postsCreate: true,
					postsLike: true,
				}
			})


			return result
		} catch (error: any) {
			throw new Error(error)
		}
	}
}

export default new UserModelLogin()
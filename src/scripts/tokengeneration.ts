import { sign } from "jsonwebtoken"



export default function tokenGeneration(email: string) {

	if (process.env.SECRETE_KEY) {

		const token = sign({ data: email }, process.env.SECRETE_KEY, {
			subject: email,
			// 7200s
			expiresIn: "7200s"
		})


		return token

	} else {
		throw new Error("Invalid Key")
	}
}
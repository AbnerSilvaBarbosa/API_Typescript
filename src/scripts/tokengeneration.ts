import { sign } from "jsonwebtoken"



export default function tokenGeneration(email: string) {

	if (process.env.SECRETE_KEY) {

		const token = sign({}, process.env.SECRETE_KEY, {
			subject: email,
			expiresIn: "10s"
		})

		return token

	} else {
		throw new Error("Invalid Key")
	}
}
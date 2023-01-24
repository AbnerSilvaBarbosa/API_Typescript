import { Response, Request, NextFunction } from "express";
import jwt, { decode, verify } from "jsonwebtoken"
import "dotenv"
import { config } from "dotenv";

config()

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
	const authToken = req.headers.authorization
	const email = req.headers.email

	if (!authToken) {
		return res.status(401).send("Token is missing")
	}

	if (!process.env.SECRETE_KEY) {
		return res.status(404).send("Key is empty")
	}

	// Bearer sakjdlakj1klj3k21j321
	const [beare, token] = authToken.split(" ")

	try {
		const _token = verify(token, process.env.SECRETE_KEY) as { [key: string]: any }

		if (_token.sub != email || _token.data != email) {
			throw new Error("Token invalid");

		}


		const currentTime = Math.floor(Date.now() / 1000)

		if (currentTime > _token.exp) {
			throw new Error("Token expired");
		}


		return next()
	} catch (error: any) {
		return res.status(401).send(error.message)
	}



}
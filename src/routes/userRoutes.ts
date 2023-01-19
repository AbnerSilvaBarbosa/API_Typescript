import { Router } from "express";
import { body, check } from "express-validator"
import UserSearchById from "../controller/userControlers/userSearch";
import UserRegister from "../controller/userControlers/userRegister";
import UserLoginToken from "../controller/userControlers/userLoginToken";


const router = Router()

const userRegister = new UserRegister()
const userSearchById = new UserSearchById()
const userLoginToken = new UserLoginToken()



// TODO criar rotas para editar o usuario
// TODO criar rotas para deletar uma conta


// strong password = one letter / one number / one capital letter / one special caracter // min 8 caracters
// isEmail = ....@.... .com

router.post("/register",
	[body("name").notEmpty().withMessage("name is mandatory").isLength({ min: 3 }).withMessage("Name need a min 3 letters")],
	[check("email").notEmpty().withMessage("Email is mandatory").isEmail().withMessage("Email invalid")],
	[check("password").notEmpty().withMessage("Password is mandatory").isStrongPassword().withMessage("Password is not strong")],
	userRegister.execute
)

router.get("/getUser/:userId",
	[check("userId").notEmpty().withMessage("Id is required")],
	userSearchById.execute
)

// TODO Arrumar rota e suas pastas
router.post("/userlogintoken", userLoginToken.execute)

export default router
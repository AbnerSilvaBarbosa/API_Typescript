import { Router } from "express";
import { body, check } from "express-validator"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import UserSearchById from "../controller/userControlers/userSearch";
import UserRegister from "../controller/userControlers/userRegister";
import UserLoginToken from "../controller/userControlers/userLoginToken";
import UserUpdateName from "../controller/userControlers/userUpdateName";


const router = Router()

const userRegister = new UserRegister()
const userSearchById = new UserSearchById()
const userLoginToken = new UserLoginToken()
const userUpdateName = new UserUpdateName()



// TODO criar rotas para deletar uma conta


// strong password = one letter / one number / one capital letter / one special caracter // min 8 caracters
// isEmail = ....@.... .com

router.post("/register",
	[body("name").notEmpty().withMessage("name is required").isLength({ min: 3 }).withMessage("Name need a min 3 letters")],
	[check("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Email invalid")],
	[check("password").notEmpty().withMessage("Password is required").isStrongPassword().withMessage("Password is not strong")],
	userRegister.execute
)

router.get("/getUser/:userId",
	ensureAuthenticated,
	[check("userId").notEmpty().withMessage("Id is required").isLength({ min: 3 }).withMessage("ID need a min 3 caracters")],
	userSearchById.execute
)

router.post("/userlogintoken",
	[check("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Email invalid")],
	[check("password").notEmpty().withMessage("Password is required")],
	userLoginToken.execute
)


router.put("/userNameUpdate/:userId",
	ensureAuthenticated,
	[check("name").notEmpty().withMessage("name is required").isLength({ min: 3 }).withMessage("Name need a min 3 letters")],
	[check("userId").notEmpty().withMessage("Id is required").isLength({ min: 3 }).withMessage("ID need a min 3 caracters")],
	userUpdateName.execute
)

export default router
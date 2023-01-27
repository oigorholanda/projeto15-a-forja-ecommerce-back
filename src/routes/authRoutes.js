import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import { signInBodyValidation, userSchemaValidation} from "../middlewares/middlewareAuth.js";

const router = Router();


router.post("/sign-up", userSchemaValidation, signUp);
router.post("/sign-in", signInBodyValidation, signIn);



export default router;
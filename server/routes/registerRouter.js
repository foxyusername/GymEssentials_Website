import express from  "express";
const router = express.Router();

//imported functions

import { registerFunction,loginFunction } from "../controllers/registerFunctions.js";
import { removeToken, validateToken } from "../controllers/jwtToken.js";

router.post('/signup',registerFunction);
router.post('/login',loginFunction);
router.get('/logout',removeToken);
router.get('/validatetoken',validateToken);

export {router as registerRouter};
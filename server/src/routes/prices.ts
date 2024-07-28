import {Router} from "express";
import prices from "../controllers/prices";

const router = Router();


router.get("/all", prices.getPrices);
export default router;

import express from "express";
import v1 from "./v1/v1.mjs";

const router = express.Router();

router.use('/v1',v1);

export default router;
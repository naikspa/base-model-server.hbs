import { Router } from "express";

import { renderPage } from "../controllers/controller";

const router = Router();

router.get("/", renderPage);

export default router;

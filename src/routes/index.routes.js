import { Router } from "express";

import {
  renderIndex,
  renderContact,
  getEmail,
  index2,
  renderEmails,
} from "../controllers/controller";

const router = Router();

router.get("/", renderIndex);

router.post("/email", getEmail);

router.get("/inicio", index2);

router.get("/contact", renderContact);

router.get("/admin/emails", renderEmails);

export default router;

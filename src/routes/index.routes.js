import { Router } from "express";

import {
  renderIndex,
  renderContact,
  getEmail,
  index2,
  renderEmails,
  sendContact,
} from "../controllers/controller";

const router = Router();

router.get("/", renderIndex);

router.post("/email", getEmail);

router.get("/inicio", index2);

router.get("/contacto", renderContact);

router.post("/contacto", sendContact);

router.get("/emails", renderEmails);

export default router;

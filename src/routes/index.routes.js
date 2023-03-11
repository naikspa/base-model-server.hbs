const { Router } = require("express");

const controller = require("../controllers/controller");

const router = Router();

router.get("/", controller.renderIndex);

router.post("/email", controller.getEmail);

router.get("/inicio", controller.index2);

router.get("/contacto", controller.renderContact);

router.post("/contacto", controller.sendContact);

router.get("/emails", controller.renderEmails);

module.exports = router;

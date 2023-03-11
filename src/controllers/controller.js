const controller = {};
const Data = require("../models/Data");
const Contact = require("../models/Contact");

controller.renderIndex = async (req, res) => {
  const data = await Data.find().lean();
  res.render("index", { data: data });
};

controller.getEmail = async (req, res) => {
  try {
    const em = Data(req.body);
    await em.save();
    res.redirect("/inicio");
  } catch (error) {
    console.log(error);
  }
};

controller.index2 = (req, res) => {
  res.render("index2");
};

controller.renderContact = async (req, res) => {
  const con = await Contact.find().lean();
  res.render("contact", { x: con });
};

controller.renderEmails = async (req, res) => {
  const data = await Data.find().lean();
  res.render("emails", { x: data });
};

controller.sendContact = async (req, res) => {
  try {
    const con = new Contact({
      cName: req.body.cName,
      cSurname: req.body.cSurname,
      cEmail: req.body.cEmail,
      cNumber: req.body.cEmail,
    });
    con.save();
    res.redirect("/inicio");
  } catch (error) {
    console.log(error);
  }
};

module.exports = controller;

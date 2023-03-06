import Data from "../models/Data";
import Contact from "../models/Contact";

export const renderIndex = async (req, res) => {
  const data = await Data.find().lean();
  res.render("index", { data: data });
};

export const getEmail = async (req, res) => {
  try {
    const em = Data(req.body);
    await em.save();
    res.redirect("/inicio");
  } catch (error) {
    console.log(error);
  }
};

export const index2 = (req, res) => {
  res.render("index2");
};

export const renderContact = async (req, res) => {
  const con = await Contact.find().lean();
  res.render("contact", { x: con });
};

export const renderEmails = async (req, res) => {
  const data = await Data.find().lean();
  res.render("emails", { x: data });
};

export const sendContact = async (req, res) => {
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

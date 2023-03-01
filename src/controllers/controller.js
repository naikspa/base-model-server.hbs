import Data from "../models/Data";

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
  res.render("contact");
};

export const renderEmails = async (req, res) => {
  const data = await Data.find().lean();
  res.render("emails", { x: data });
};

const express = require("express");
const router = express.Router();
const Company = require("../models/company");

router.get("/home", (req, res) => {
  
  Company.find({}, (err, companies) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
    res.render("home", { companies });
  });
});
router.get("/create", (req, res) => {
  res.render("create");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/:id", (req, res) => {
  
  Company.findOne({ _id: req.params.id }, (err, company) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
    res.render("form", { company });
  });
});

router.put("/", (req, res) => {
  const newCompany = new Company({
    name: req.body.name,
    rgtnumber: req.body.rgtnumber,
    city: req.body.city,
    state: req.body.state,
    CreatedAt: req.body.CreatedAt,
    phonenum: req.body.phonenum,
  });

  newCompany.save((err, company) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
    res.send("save");
  });
});

router.post("/:id", (req, res) => {
  console.log(req.body)
  Company.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      phonenum: req.body.phonenum,
    },
    { new: true },
    (err, company) => {
      if (err)
        return res
          .status(500)
          .json({ msg: "Server Error :)", err: err.message });
      res.send("update");
    }
  );
});

router.delete("/:id", (req, res) => {
  Company.findOneAndDelete({ _id: req.params.id }, (err, company) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
      res.send('delete');
  });
});

module.exports = router;

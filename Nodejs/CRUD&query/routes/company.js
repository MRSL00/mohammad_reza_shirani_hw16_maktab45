const express = require("express");
const router = express.Router();
const Company = require("../models/company");


router.get("/all", (req, res) => {
  Company.find({}, (err, companies) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
    res.json(companies);
  });
});

// created under one year
let date = new Date();
let rang = date.getFullYear() - 1 + date.toISOString().substr(4);

router.get("/underOneyear", (req, res) => {
  Company.find(
    {
      CreatedAt: {
        $gte: rang,
        $lte: date.toISOString(),
      },
    },
    (err, companies) => {
      if (err)return res.status(500).json({ msg: "Server Error :)", err: err.message });
      res.json(companies);
    }
  );
});
// change all city and state
router.post("/changeloc", (req, res) => {
  Company.updateMany({},{$set:{city:"tehran",state:"tehran"}}, (err, com) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
    res.json(com);
  });
});
router.get("/:id", (req, res) => {
  Company.findOne({ _id: req.params.id }, (err, company) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
    res.json(company);
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
    res.json(company);
  });
});

router.post("/:id", (req, res) => {
  Company.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, company) => {
      if (err)
        return res
          .status(500)
          .json({ msg: "Server Error :)", err: err.message });
      res.json(company);
    }
  );
});

router.delete("/:id", (req, res) => {
  Company.findOneAndDelete({ _id: req.params.id }, (err, company) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
    res.json({ company, msg: "success" });
  });
});


module.exports = router;

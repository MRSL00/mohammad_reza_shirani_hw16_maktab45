const express = require("express");
const router = express.Router();
const employee = require("../models/employee");

router.get("/all", (req, res) => {
  employee.find({}, (err, employees) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
    res.json(employees);
  });
});
// get managers
router.get("/manager", (req, res) => {
  employee.find({manger:true}, (err, employees) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
    res.json(employees);
  });
});
// get age between 20 and 30
let date = new Date();
router.get("/between", (req, res) => {
  employee.find(
    {
      dob: {
        $gte: date.getFullYear() - 30 + date.toISOString().substr(4),
        $lte: date.getFullYear() - 20 + date.toISOString().substr(4),
      }
    },{_id:0},
    (err, employees) => {
      if (err)return res.status(500).json({ msg: "Server Error :)", err: err.message });
      res.json(employees);
    }
  );
});
router.get("/:id", (req, res) => {
  employee.findOne({ _id: req.params.id }, (err, employee) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
    res.json(employee);
  });
});
router.put("/", (req, res) => {
  const newEmployee = new employee({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    ntnumber: req.body.ntnumber,
    gender: req.body.gender,
    manger: req.body.manger,
    dob: req.body.dob,
  });
  newEmployee.save((err, employee) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
    res.json(employee);
  });
});
router.post("/:id", (req, res) => {
  employee.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, employee) => {
      if (err)
        return res
          .status(500)
          .json({ msg: "Server Error :)", err: err.message });
      res.json(employee);
    }
  );
});

router.delete("/:id", (req, res) => {
  employee.findOneAndDelete({ _id: req.params.id }, (err, employee) => {
    if (err)
      return res.status(500).json({ msg: "Server Error :)", err: err.message });
    res.json({ employee, msg: "success" });
  });
});





module.exports = router;

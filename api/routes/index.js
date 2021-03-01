const express = require("express");
const router = express.Router();
const Customer = require('../controllers/customer');

//Customer Routes
router.post("/addCustomer", Customer.addCustomer);
router.get("/getAllCustomer", Customer.getAllCustomer);
router.get("/getCustomer/:customerId", Customer.getCustomer);

module.exports = router;
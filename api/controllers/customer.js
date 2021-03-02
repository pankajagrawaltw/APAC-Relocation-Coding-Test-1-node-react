const { date } = require("joi");
const mongoose = require("mongoose");
const Customer = require("../models/customer");

// For add Customers
module.exports.addCustomer = (req, res) => {
    Customer(req.body).save().then((result) => {
        res.status(200).json({ message: "customer save", result });
    }).catch((error) => res.status(400).send(error));
},
    // For Get All Customers Details
    module.exports.getAllCustomer = (req, res) => {
        Customer.find({}).then((result) => {
            res.status(200).json({ customers: result })
        }).catch((error) => res.status(400).send(error));

    },
    // For Get Single Customers Details
    module.exports.getCustomer = (req, res) => {
        Customer.findOne({ _id: req.params.customerId }).then((result) => {
            res.status(200).json({ customer: result })
        }).catch((error) => res.status(400).send(error));

    }


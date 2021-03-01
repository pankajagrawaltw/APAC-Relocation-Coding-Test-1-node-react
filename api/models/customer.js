const mongoose = require('mongoose');
const CustomerSchema = mongoose.Schema({
    customerImage: {
        type: String,
        default: ''
    },

    customerName: {
        type: String,
        default: ''
    },
    requestID: {
        type: String,
    },
    movingDate: {
        type: String,
        default: ''
    },
    shipmentMode: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: ''
    },
    origin: {
        type: String,
        default: ''
    },
    destination: {
        type: String,
        default: ''
    },
    appointmentDT: {
        type: String,
    },
    requestStatus: {
        type: String,
    },
    logSurveyDetails: {
        type: String,
        default: ''
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Customer', CustomerSchema);
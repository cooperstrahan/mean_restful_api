const mongoose = require('mongoose');
require('../config/mongoose.js');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true, 
        minlength: 2
    },
    description: {
        type: String, 
        default:""
    },
    completed: {
        type: Boolean, 
        default: false
    }
}, {timestamps:true});

module.exports = { 
    Task: mongoose.model('Task', TaskSchema)
}
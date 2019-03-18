const mongoose = require('mongoose');

module.exports = {
    mongoose: mongoose.connect('mongodb://localhost/task_data', 
        {useNewUrlParser: true})
}
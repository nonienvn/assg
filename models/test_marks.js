const mongoose = require('mongoose');

const markSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    test:{
        type: String,
        required: true
    },
    marks:{
        type: Number,
        required:true
    }
    
    
   
 
})

module.exports = mongoose.model('Mark', markSchema)
const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    create_date:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('todo',todoSchema)
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

const ToDo = module.exports = mongoose.model('todo',todoSchema)
module.exports.get = (callback,limit)=>{
    ToDo.find(callback).limit(limit);
}
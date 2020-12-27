ToDo = require('../models/todoModel')

exports.index = (req, res) => {
    ToDo.get((err, todos) => {
        console.log('todos',todos)
        if (err) {
            res.render('error',{
                error: err
            })
        }else{
            res.render('todo',{
                todos:todos || []
            })
        }
    });
};

exports.new = (req, res) => {
    let todo = new ToDo();
    todo.title = req.body.title
    todo.save((err) => {
        if (err) {
            res.render('error',{
                error: err
            })
        }else{
            res.redirect('/')
        }
    });
};

exports.update = (req,res) => {
    ToDo.findById(req.params.id,(err,todo)=>{
        if (err) {
            res.render('error',{
                error: err
            })
        }else{
            todo.completed = true
            todo.save((err)=>{
                if (err) {
                    res.render('error',{
                        error: err
                    })
                }else{
                    res.redirect('/')
                }
            })
        }
    })
}

exports.delete = (req,res) =>{
    ToDo.remove({
        _id: req.params.id
    }, (err,todo)=>{
        if (err) {
            res.render('error',{
                error: err
            })
        }else{
            res.redirect('/')
        }
    })
}

exports.deleteAllCompleted = (req,res) =>{
    ToDo.remove({'completed':true}, (err,todo)=>{
        if (err) {
            res.render('error',{
                error: err
            })
        }else{
            res.redirect('/')
        }
    })
}
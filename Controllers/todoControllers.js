const{Todo}= require('../models/todo');
//const functionName = ()=>{};
const getAllTodos =(req, res) =>{
    Todo.find()
    .then((response)=>{
        res.send(response)
    }
    ).catch(err=>{
        res.send('error occured')
    });
    // res.send('Get all todos');
};
const getTodoById = (req,res)=>{
    const id = req.params.id
    Todo.findById(id).then(response => {
        res.send(response)
    }).catch(err =>{
        res.send("an error occured");
    })
}


const createTodo = (req,res)=>{
    const todo = new Todo(req.body);
  todo.save().then(response =>{
        res.send(response)
    }).catch(err =>{
        console.log(err);
        res.send("an error occured err",err);
    })
}

const deleteTodo =(req,res)=>{
    const id =req.params.id;

    Todo.findByIdAndDelete(id)
    .then((response)=>{
        res.send("Todo with specified ID deleted");
    })
    .catch((err)=>{
        onsole.log(err);
        res.send('an error occured',err);
    });
};
const updateTodo =(req,res)=>{
    const id =req.params.id;

    Todo.findByIdAndUpdate({ _id:id}, req.body)
    .then((response)=>{
        res.send("Todo with specified ID updated");
    })
    .catch((err)=>{
        onsole.log(err);
        res.send('an error occured while updating todo',err);
    });
};


module.exports= {
getAllTodos,
getTodoById,
createTodo,
deleteTodo,
updateTodo,
};
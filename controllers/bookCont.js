const db=require("../models");

module.exports ={
    findAll: function(req,res){
        db.Book.find(req.keywords)
        .then(dbModel=>res.json(dbModel))
        .catch(err=>console.log(err))
    },
    create:function(req,res){
        db.Book.create(req.body)
        .then(dbModel=>res.json(dbModel))
        .catch(err=>console.log(err))
    },
    remove:function(req,res){
        db.Book.findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err))
    }
};
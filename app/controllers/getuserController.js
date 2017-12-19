'use strict';

var db = require('../services/database'),
    User = require('../models/user');

// Metodo buscar todo models User.
var GetuserController = {
    index: function(req, res) {
        var datosU = '';
        db.sync().then(function(){
            User.findAll({ raw: true}).then(function(users){
                this.datosU = users;
                res.status(200).send(this.datosU);
            });
        });
        
    },
// Metodo Crear User 
    create: function(req, res){
        if(!req.body.nombreUsuario || !req.body.apellidoUsuario || !req.body.emailUsuario || !req.body.password ) {
            res.json({ message: 'Por favor ingrese datos requeridos.' });
        } else {
            db.sync().then(function() {
                var newUser = {
                    nombreUsuario: req.body.nombreUsuario,
                    apellidoUsuario: req.body.apellidoUsuario,
                    emailUsuario: req.body.emailUsuario,
                    avatarUsuario: req.body.avatarUsuario,
                    password: req.body.password,
                    telefonoMovil: req.body.telefonoMovil,
                    telefonoFijo: req.body.telefonoFijo
                };
    
                return User.create(newUser).then(function() {
                    res.status(201).json({ message: 'Account created!' });
                });
            }).catch(function(error) {
                console.log(error);
                res.status(403).json({ message: 'nombreUsuario already exists!' });
            });
    
        }
    }
};



module.exports = GetuserController;
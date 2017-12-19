'use strict';

var db = require('../services/database'),
    usr_Cliente = require('../models/usr_cliente');

// Metodo buscar todo models usr_cliente.
var Getusr_clienteController = {
    index: function(req, res) {
        var datosC = '';
        db.sync().then(function(){
            usr_Cliente.findAll({ raw: true}).then(function(usr_clientes){
                this.datosC = usr_clientes;
                res.status(200).send(this.datosC);
            });
        });
        
    },
// Metodo Crear usr_cliente 
    create: function(req, res){
        if(!req.body.nombreCliente || !req.body.apellidoPCliente ||!req.body.emailCliente || !req.body.password || !req.body.empresaId) {
            res.json({ message: 'El nombre, apellido paterno, email, contraseña y empresa son datos obligatorios.' });
        } else {
            db.sync().then(function() {
                var newusr_Cliente = {
                    nombreCliente: req.body.nombreCliente,
                    apellidoPCliente: req.body.apellidoPCliente,
                    apellidoMCliente: req.body.apellidoMCliente,
                    emailCliente: req.body.emailCliente,
                    telefonoFijoCliente: req.body.telefonoFijoCliente,
                    telefonoMovilCliente: req.body.telefonoMovilCliente,
                    password: req.body.password,
                    empresaId: req.body.empresaId
                };
                
                return usr_Cliente.create(newusr_Cliente).then(function() {
                    res.status(201).json({ message: 'Cliente guardado satisfactoriamente!' });
                });
            }).catch(function(error) {
                console.log(error);
                res.status(403).json({ message: 'El cliente ya existe!' });
            });
        }
    }
};



module.exports = Getusr_clienteController;
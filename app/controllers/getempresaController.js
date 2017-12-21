'use strict';

var db = require('../services/database'),
    Empresa = require('../models/empresa');

// Metodo buscar todo models Empresa.
var GetempresaController = {
    index: function(req, res) {
        var datosE = '';
        db.sync().then(function(){
            Empresa.findAll({ raw: true}).then(function(empresas){
                this.datosE = empresas;
                res.status(200).send(this.datosE);
            });
            
        });
        
    },
// Metodo Crear Empresa 
    create: function(req, res){
        if(!req.body.nombreEmpresa) {
            res.json({ message: 'Ingrese nombre de la empresa.' });
        } else {
            db.sync().then(function() {
                var newEmpresa = {
                    nombreEmpresa: req.body.nombreEmpresa
                };
    
                return Empresa.create(newEmpresa).then(function() {
                    res.status(201).json({ message: 'Empresa guardada!' });
                });
            }).catch(function(error) {
                console.log(error);
                res.status(403).json({ message: 'La empresa ya existe!' });
            });
       }
    },

    //Metodo Borrar Empresa 
    borrar: function(req, res) {
        console.log('hola');
        // var idempresa = '';
        db.sync().then(function(){
            console.log(req.body);
            var id = req.body.id;
            Empresa.destroy({ where: {'id': id}}).then(function(empresas){
                res.status(200).send('la empresa con el id '+id+ ' ha sido borrada ' );
            });
            
        })
    },

    //Metodo Editar Empresa
    editar: function(req, res) {
        console.log('hola');
        var userID = req.params.id;
        var update = req.body;
        // if(userID != req.update.id){
        //     return res.status(500).send({message: 'Error'});
        // } else{
            Empresa.update({
                'nombreEmpresa': req.body.nombreEmpresa,
              }, {
                where: {
                  'id' : userID
                }
              });
              return res.status(200).send({message: 'Dato modificado.'});
    }  
};



module.exports = GetempresaController;
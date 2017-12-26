'use strict';

var db = require('../services/database'),
    Perfil = require('../models/perfil');

// Metodo buscar todo models User.
var GetperfilController = {
    index: function(req, res) {
        var datosP = '';
        db.sync().then(function(){
            Perfil.findAll({ raw: true}).then(function(perfils){
                this.datosP = perfils;
                res.status(200).send(this.datosP);
            });
        });
        
    },
};



module.exports = GetperfilController;
'use strict';

var db = require('../services/database'),
    General_kpi = require('../models/general_kpi');

// Metodo buscar todo models general_kpi.
var Getgeneral_kpiController = {
    index: function(req, res) {
        var datosk = '';
        db.sync().then(function(){
            User.findAll({ raw: true}).then(function(general_kpis){
                this.datosK = general_kpis;
                res.status(200).send(this.datosK);
            });
        });
        
    },
// Metodo Crear general_kpi
    create: function(req, res){
        db.sync().then(function() {
            var newGeneral_kpi = {
                fans: req.body.fans,
                alcance: req.body.alcance,
                impresiones: req.body.impresiones,
                interacciones: req.body.interacciones,
                publicaciones: req.body.publicaciones,
                followers: req.body.followers,
                reach: req.body.reach,
                impressions: req.body.impressions,
                contribuidores: req.body.contribuidores,
                twettGenerados: req.body.twettGenerados,
                retweets: req.body.retweets,
                respuestas: req.body.respuestas,
                menciones: req.body.menciones,
                visitas: req.body.visitas,
                rebote: req.body.rebote,
                permanencia: req.body.permanencia,
                nombreTipoMedio: req.body.nombreTipoMedio,
                fechaInicio: req.body.fechaInicio,
                fechaFinal: req.body.fechaFinal
            };

            return General_kpi.create(newGeneral_kpi).then(function() {
                res.status(201).json({ message: 'Datos guardados satisfactoriamente!' });
            });
        }).catch(function(error) {
            console.log(error);
            res.status(403).json({ message: 'ya existe!' });
        });
    }
};



module.exports = Getgeneral_kpiController;
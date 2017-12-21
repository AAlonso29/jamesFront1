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
    },

      //Metodo Borrar KPi 
      borrar: function(req, res) {
        console.log('hola');
        // var idempresa = '';
        db.sync().then(function(){
            console.log(req.body);
            var id = req.body.id;
            General_kpi.destroy({ where: {'id': id}}).then(function(general_kpis){
                res.status(200).send('el Kpi con el id '+id+ ' ha sido borrado ' );
            });
            
        })
    },

    //Metodo Editar KPi
    editar: function(req, res) {
        console.log('hola');
        var userID = req.params.id;
        var update = req.body;
        // if(userID != req.update.id){
        //     return res.status(500).send({message: 'Error'});
        // } else{
            Empresa.update({
                'fans': req.body.fans,
                // 'alcance': req.body.alcance,
                // 'impresiones': req.body.impresiones,
                // 'interacciones': req.body.interacciones,
                // 'publicaciones': req.body.publicaciones,
                // 'followers': req.body.followers,
                // 'reach': req.body.reach,
                // 'impressions': req.body.impressions,
                // 'contribuidores': req.body.contribuidores,
                // 'twettGenerados': req.body.twettGenerados,
                // 'retweets': req.body.retweets,
                // 'respuestas': req.body.respuestas,
                // 'menciones': req.body.menciones,
                // 'visitas': req.body.visitas,
                // 'rebote': req.body.rebote,
                // 'permanencia': req.body.permanencia,
                // 'nombreTipoMedio': req.body.nombreTipoMedio,
                // 'fechaInicio': req.body.fechaInicio,
                // 'fechaFinal': req.body.fechaFinal
              }, {
                where: {
                  'id' : userID
                }
              });
              return res.status(200).send({message: 'Dato modificado.'});
    }  
};



module.exports = Getgeneral_kpiController;
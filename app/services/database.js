'use strict';

var config = require('./../config'),
    Sequelize = require('sequelize');

module.exports = new Sequelize(
    config.db.name,
    config.db.user,
    config.db.password,
    config.db.details
);

var Empresa = require('../models/empresa');
var General_kpi = require('../models/general_kpi');

var Usr_cliente = require('../models/usr_cliente');

//creando las llaves foraneas
Usr_cliente.belongsTo(Empresa);
Empresa.hasMany(Usr_cliente);

var User = require('../models/user');
var Perfil = require('../models/perfil');

User.belongsTo(Perfil);
Perfil.hasMany(User);






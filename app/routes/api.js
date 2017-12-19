'use strict';

var router = require('express').Router();

var config = require('../config'),
    allowOnly = require('../services/routesHelper').allowOnly,
    AuthController = require('../controllers/authController'),
    UserController = require('../controllers/userController'),
    GetuserController = require('../controllers/getuserController'),
    Getusr_clienteController = require('../controllers/getclienteController'),
    GetempresaController = require('../controllers/getempresaController'),
    Getgeneral_kpiController = require('../controllers/getkpiController'),
    AdminController = require('../controllers/adminController');

var APIRoutes = function(passport) {
    // POST Routes.
    router.post('/admin/signup', GetuserController.create);
    router.post('/admin/empresa', GetempresaController.create);
    router.post('/admin/usr_cliente', Getusr_clienteController.create);
    router.post('/general_kpi', Getgeneral_kpiController.create);
    router.post('/authenticate', AuthController.authenticateUser);

    // GET Routes.
    router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
    router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));
    router.get('/admin/perfiles', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));


    router.get('/admin/getuser', GetuserController.index);
    router.get('/admin/getcliente', Getusr_clienteController.index);
    router.get('/admin/getempresa', GetempresaController.index);
    router.get('/admin/getkpicl', Getgeneral_kpiController.index);

    return router;
};

module.exports = APIRoutes;
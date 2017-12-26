'use strict';

var router = require('express').Router();

var config = require('../config'),
    allowOnly = require('../services/routesHelper').allowOnly,
    AuthController = require('../controllers/authController'),
    UserController = require('../controllers/userController'),
    GetperfilController = require('../controllers/getperfilController'),
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


    router.get('/admin/getperfil', GetperfilController.index);
    router.get('/admin/getuser', GetuserController.index);
    router.get('/admin/getcliente', Getusr_clienteController.index);
    router.get('/admin/getempresa', GetempresaController.index);
    router.get('/admin/getkpi', Getgeneral_kpiController.index);

    //DELETE Routes.

    router.delete('/admin/getempresa', GetempresaController.borrar);
    router.delete('/admin/getuser', GetuserController.borrar);
    router.delete('/admin/getcliente', GetempresaController.borrar);
    router.delete('/admin/getkpi', Getgeneral_kpiController.borrar);

    //PUT Routes.
    router.put('/admin/getempresa/:id', GetempresaController.editar);
    router.put('/admin/getuser/:id', GetuserController.editar);
    router.put('/admin/getusr_cliente/:id', Getusr_clienteController.editar);
    router.put('/amdin/getkpi/:id', Getgeneral_kpiController.editar);

    return router;
};

module.exports = APIRoutes;
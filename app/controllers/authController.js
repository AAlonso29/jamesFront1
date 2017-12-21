'use strict';

var jwt = require('jsonwebtoken');

var config = require('../config'),
    db = require('../services/database'),
    usr_Cliente = require('../models/usr_cliente'),
    General_kpi = require('../models/general_kpi'),
    User = require('../models/user');

// The authentication controller.
var AuthController = {};

// Authenticate a user.
AuthController.authenticateUser = function(req, res) {
    if(!req.body.nombreUsuario || !req.body.password) {
        res.status(404).json({ message: 'nombreUsuario and password are needed!' });
    } else {
        var nombreUsuario = req.body.nombreUsuario,
            password = req.body.password,
            potentialUser = { where: { nombreUsuario: nombreUsuario } };

        User.findOne(potentialUser).then(function(user) {
            if(!user) {
                res.status(404).json({ message: 'Authentication failed!' });
            } else {
                user.comparePasswords(password, function(error, isMatch) {
                    if(isMatch && !error) {
                        // var nombreUsuario = jwt.sign(
                        //     { nombreUsuario: user.nombreUsuario},
                        //     config.keys.secret,
                        //     {expiresIn: '30m'}
                        // );
                        var token = jwt.sign(
                            { nombreUsuario: user.nombreUsuario },
                            config.keys.secret,
                            { expiresIn: '30m' }
                        );

                        res.json({
                            success: true,
                            token: 'JWT ' + token,
                            nombreUsuario:  'JWT ' + nombreUsuario,                            
                            role: user.role
                        });
                    } else {
                        res.status(404).json({ message: 'Login failed!' });
                    }
                });
            }
        }).catch(function(error) {
            res.status(500).json({ message: 'There was an error!' });
        });
    }
}

module.exports = AuthController;

// %7B%22role%22%3A4%2C%22token%22%3A%22JWT%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmVVc3VhcmlvIjoiYWRtaW4iLCJpYXQiOjE1MTM4MDQ1NDgsImV4cCI6MTUxMzgwNjM0OH0.tryZOVaYdJUtdrTLOoKd1nATH3d8C0c0aXTqxv6Bs1o%22%7D
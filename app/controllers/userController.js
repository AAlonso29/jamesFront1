'use strict';
var lol = [ 
{idPerfil: "1", nombrePerfil: "admin"},

{idPerfil: "2", nombrePerfil: "CM-admin"},

{idPerfil: "3", nombrePerfil: "CM-user"},

{idPerfil: "4", nombrePerfil: "cliente"}
];

// lol[1]['nombrePerfil']
// The user controller.
var UserController = {
    index: function(req, res) {
                
        res.status(200).json({ message: 'Welcome to the users area ' + lol + '!' });
    }
};

module.exports = UserController;
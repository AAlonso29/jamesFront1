(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('Editarusr_clienteController', [
            '$http',
            editarusr_clienteController
        ]);

    function editarusr_clienteController($http) {
        var vm = this;

        vm.DatosC = '';
   

        $http({ method: 'PUT', url: '/api/getusr_cliente/' })
            .then(function(response) {
                if(response && response.data) {
                    vm.DatosC = response.data.datosC;

                }
            });
    }
})();
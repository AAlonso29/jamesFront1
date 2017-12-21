(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('Deleteusr_clienteController', [
            '$http',
            deleteusr_clienteController
        ]);

    function deleteusr_clienteController($http) {
        var vm = this;

        vm.DatosC = '';
   

        $http({ method: 'DELETE', url: '/api/getcliente/' })
            .then(function(response) {
                if(response && response.data) {
                    vm.DatosC = response.data.datosC;

                }
            });
    }
})();
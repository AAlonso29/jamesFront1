(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('EditarempresaController', [
            '$http',
            editarempresaController
        ]);

    function editarempresaController($http) {
        var vm = this;

        vm.DatosE = '';
   

        $http({ method: 'PUT', url: '/api/getempresa/' })
            .then(function(response) {
                if(response && response.data) {
                    vm.DatosE = response.data.datosE;

                }
            });
    }
})();
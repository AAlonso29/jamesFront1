(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('DeleteempresaController', [
            '$http',
            deleteempresaController
        ]);

    function deleteempresaController($http) {
        var vm = this;

        vm.DatosE = '';
   

        $http({ method: 'DELETE', url: '/api/getempresa/' })
            .then(function(response) {
                if(response && response.data) {
                    vm.DatosE = response.data.datosE;

                }
            });
    }
})();
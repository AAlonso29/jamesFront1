(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('Getusr_clienteController', [
            '$http',
            '$scope',
            getusr_clienteController
        ]);

    function getusr_clienteController($http, $scope) {
        // var vm = this;

        var DatosC = [];
   

        $http({ method: 'GET', url: '/api/admin/getcliente' })
            .then(function(response) {
                if(response && response.data) {
                    $scope.DatosC = response.data;

                }
            });
    }
})();
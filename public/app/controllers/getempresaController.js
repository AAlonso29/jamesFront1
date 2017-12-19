(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('GetempresaController', [
            '$http',
            '$scope',
            getempresaController
        ]);

    function getempresaController($http, $scope) {
        // var vm = this;

        var DatosE = [];
   

        $http({ method: 'GET', url: '/api/admin/getempresa' })
            .then(function(response) {
                if(response && response.data) {
                    $scope.DatosE = response.data;
                }
        });
    }
})();
(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('GetperfilController', [
            '$http',
            '$scope',
            getperfilController
        ]);

    function getperfilController($http, $scope) {
        // var vm = this;

        var DatosP = [];
   

        $http({ method: 'GET', url: '/api/admin/getperfil' })
            .then(function(response) {
                if(response && response.data) {
                    $scope.DatosP = response.data;
                }
        });
    }
})();
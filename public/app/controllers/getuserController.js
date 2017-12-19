(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('GetuserController', [
            '$http',
            '$scope',
            getuserController
        ]);

    function getuserController($http, $scope) {
        // var vm = this;

        var DatosU = [];
   

        $http({ method: 'GET', url: '/api/admin/getuser' })
            .then(function(response) {
                if(response && response.data) {
                    $scope.DatosU = response.data;
                }
        });
    }
})();
(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('Getgeneral_kpiController', [
            '$http',
            '$scope',
            getgeneral_kpiController
        ]);

    function getgeneral_kpiController($http, $scope) {
        // var vm = this;

        var DatosK = [];
   

        $http({ method: 'GET', url: '/api/admin/getkpi' })
            .then(function(response) {
                if(response && response.data) {
                    $scope.DatosK = response.data;

                }
            });
    }
})();
(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('DeletekpiController', [
            '$http',
            deletekpiController
        ]);

    function deletekpiController($http) {
        var vm = this;

        vm.DatosK = '';
   

        $http({ method: 'DELETE', url: '/api/getkpi/' })
            .then(function(response) {
                if(response && response.data) {
                    vm.DatosK = response.data.datosK;

                }
            });
    }
})();
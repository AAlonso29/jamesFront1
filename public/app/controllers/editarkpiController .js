(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('EditarkpiController', [
            '$http',
            editarkpiController
        ]);

    function editarkpiController($http) {
        var vm = this;

        vm.DatosK = '';
   

        $http({ method: 'PUT', url: '/api/getkpi/' })
            .then(function(response) {
                if(response && response.data) {
                    vm.DatosK = response.data.datosK;

                }
            });
    }
})();
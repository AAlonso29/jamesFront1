(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('EditaruserController', [
            '$http',
            editaruserController
        ]);

    function editaruserController($http) {
        var vm = this;

        vm.DatosU = '';
   

        $http({ method: 'PUT', url: '/api/getuser/' })
            .then(function(response) {
                if(response && response.data) {
                    vm.DatosU = response.data.datosU;

                }
            });
    }
})();
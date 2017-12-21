(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('DeleteuserController', [
            '$http',
            deleteuserController
        ]);

    function deleteuserController($http) {
        var vm = this;

        vm.DatosU = '';
   

        $http({ method: 'DELETE', url: '/api/getuser/' })
            .then(function(response) {
                if(response && response.data) {
                    vm.DatosU = response.data.datosU;

                }
            });
    }
})();
(function() {

        // funcion controlador ------------------------------------------------------------------------------------------------
// function hola($http) {
//     var vm = this;

//     vm.holo = '';

//     $http({ method: 'GET', 
//     url: 'http://localhost/james/public/app/src/server/prueba.php' })
//     .then(function(response) {
//             if(response && response.data) {
//                 vm.message = response.data.message;
//             }
//         });
// }
        var vm = this;

        vm.message = '';

JamesAuth.controller('ProfileController', ['$scope', '$http', 
    function ($scope, $http) {
        console.log(response);
     $http.get('http://localhost/james/public/app/src/server/prueba.php').
        then(function(response) {
            console.log(response);
            if(response && response.data) {
                console.log(response);
            vm.message = response.data.message;
        }
    })
    .success(function(data) {
        $scope.contents = data;
    });
}]);

});
(function() {
    'use strict';

    var jamesAuth = angular.module('jamesAuth', [
        'ui.router',
        'ngCookies'
    ]);

    // API Request Interceptor
    jamesAuth.factory('requestInterceptor', [
        '$cookies',
        function($cookies) {
            return {
                request: function(config) {
                    var user = $cookies.get('user'),
                        token = null;

                    if(user) {
                        user = JSON.parse(user);
                        token = user.token ? user.token : null;
                    }

                    if(token) {
                        config.headers = config.headers || {};
                        config.headers.Authorization = token;
                    }

                    return config; 
                }
            };
        }
    ]);

    // Static data constant.
    var staticData = {};

    var userRoles = staticData.userRoles = {
        guest: 1,
        user: 2,
        admin: 4
    };

    staticData.accessLevels = {
        guest: userRoles.guest | userRoles.user | userRoles.admin,
        user: userRoles.user | userRoles.admin,
        admin: userRoles.admin
    };

    jamesAuth.constant('staticData', staticData);

    // Config block.
    jamesAuth.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$httpProvider',
        '$locationProvider',
        'staticData',
        authConfig
    ]);

    function authConfig(
        $stateProvider,
        $urlRouterProvider,
        $httpProvider,
        $locationProvider,
        staticData ) {
        
        // Index route.
        $stateProvider.state('index', {
            url: '/',
            templateUrl: 'app/views/partials/partial-index.html'
        });

        // Login route.
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'app/views/partials/partial-login.html',
            controller: 'LoginController as lc'
        });

        // User area route.
        $stateProvider.state('profile', {
            url: '/profile',
            templateUrl: 'app/views/partials/partial-profile.html',
            controller: 'ProfileController as pc',
            data: {
                accessLevel: staticData.accessLevels.user
            }
        });


        // Admin area route.
        $stateProvider.state('admin', {
            url: '/admin',
            templateUrl: 'app/views/partials/dashboard.html',
            controller: 'AdminController as ac',
            data: {
                accessLevel: staticData.accessLevels.admin
            }
        });

        //admin option area.
        $stateProvider.state('adminPerfil',{
            url: '/admin/perfiles',
            templateUrl: 'app/src/component/perfil.html',
            controller: 'AdminController as ac',
            data: {
                accessLevel: staticData.accessLevels.admin

            }
            });

//-------------------------------------------------------------------------------------------------------------------------

            //OPcion ver perfil
            $stateProvider.state('adminVisualizarP',{
                url: '/admin/getperfil',
                templateUrl: 'app/src/component/perfil.html',
                controller: 'GetperfilController as gpc',
                data: {
                    accessLevel: staticData.accessLevels.admin
    
                }
            });

//----------------------------------------------------------------------------------------------------------------------------
             //opcion agregar empresa.
        $stateProvider.state('adminAgregarE',{
            url: '/admin/empresa',
            templateUrl: 'app/src/component/formularioEmpresa.html',
            controller: 'empresaController as ec',
            data: {
                accessLevel: staticData.accessLevels.admin

            }
            });

             //opcion ver empresas.
        $stateProvider.state('adminVisualizarE',{
            url: '/admin/getempresa',
            templateUrl: 'app/src/component/empresas.html',
            controller: 'GetempresaController as gec',
            data: {
                accessLevel: staticData.accessLevels.admin

            }
            });

            //opcion eliminar empresa
            $stateProvider.state('adminBorrarE',{
                url: '/admin/getempresa/',
                templateUrl: 'app/src/component/empresas.html',
                controller: 'DeleteempresaController as dec',
                data: {
                    accessLevel: staticData.accessLevels.admin
    
                }
            });

            //opcion editar empresa
                        //opcion eliminar empresa
            $stateProvider.state('adminEditarE',{
                    url: '/admin/getempresa/',
                templateUrl: 'app/src/component/empresas.html',
                controller: 'EditarempresaController as eec',
                data: {
                    accessLevel: staticData.accessLevels.admin
                
                }
            });
//--------------------------------------------------------------------------------------------

             //opcion agregar cliente.
        $stateProvider.state('adminAgregarC',{
            url: '/admin/usr_cliente',
            templateUrl: 'app/src/component/formularioCliente.html',
            controller: 'usr_clienteController as cc',
            data: {
                accessLevel: staticData.accessLevels.admin

            }
            });

             //opcion ver clientes.
        $stateProvider.state('adminVisualizarC',{
            url: '/admin/getcliente',
            templateUrl: 'app/src/component/clientes.html',
            controller: 'Getusr_clienteController as gcc',
            data: {
                accessLevel: staticData.accessLevels.admin

            }
            });

            //opcion borrar cliente
            $stateProvider.state('adminBorrarC',{
                url: '/admin/getcliente/',
                templateUrl: 'app/src/component/clientes.html',
                controller: 'Deleteusr_clienteController as dcc',
                data: {
                    accessLevel: staticData.accessLevels.admin
    
                }
            });

            //opcion Editar cliente
            $stateProvider.state('adminEditarC',{
                url: '/admin/getcliente/',
                templateUrl: 'app/src/component/clientes.html',
                controller: 'Editarusr_clienteController as ecc',
                data: {
                    accessLevel: staticData.accessLevels.admin
    
                }
            });
//---------------------------------------------------------------------------------------------------------------
             //opcion agregar usuario.
        $stateProvider.state('adminAgregarU',{
            url: '/admin/signup',
            templateUrl: 'app/src/component/formulariousuario.html',
            controller: 'SignupController as sc',
            data: {
                accessLevel: staticData.accessLevels.admin

            }
            });

             //opcion ver usuarios.
        $stateProvider.state('adminVisualizarU',{
            url: '/admin/getuser',
            templateUrl: 'app/src/component/usuarios.html',
            controller: 'GetuserController as guc',
            data: {
                accessLevel: staticData.accessLevels.admin

            }
            });

            //opcion borrar usuario
            $stateProvider.state('adminBorrarU',{
                url: '/admin/getuser',
                templateUrl: 'app/src/component/usuarios.html',
                controller: 'DeleteuserController as duc',
                data: {
                    accessLevel: staticData.accessLevels.admin
    
                }
            });

            //opcion editar usuario
            $stateProvider.state('adminEditarU',{
                url: '/admin/getuser',
                templateUrl: 'app/src/component/usuarios.html',
                controller: 'EditaruserController as euc',
                data: {
                    accessLevel: staticData.accessLevels.admin
    
                }
            });


//-------------------------------------------------------------------------------------------------------------------------

        //opcion para guardar datos para KPI
        $stateProvider.state('general_kpi', {
            url: '/general_kpi',
            templateUrl: 'app/src/component/formularioKpi.html',
            controller: 'general_kpiController as gc',
            data: {
                accessLevel: staticData.accessLevels.user 
            }
        }); 
        
        //opcion para ver datos generales de KPI
        $stateProvider.state('getgeneral_kpi', {
            url: '/getkpi',
            templateUrl: 'app/src/component/formularioKpi.html',
            controller: 'Getgeneral_kpiController as ggc',
            data: {
                accessLevel: staticData.accessLevels.user 
            }
        });

        //opcion para eliminar datos para guardado de KPI 
        $stateProvider.state('Borrargeneral_kpi', {
            url: '/getkpi',
            templateUrl: 'app/src/component/formularioKpi.html',
            controller: 'DeletekpiController as dgc',
            data: {
                accessLevel: staticData.accessLevels.user 
            }
        });

          //opcion para editar datos para guardado de KPI 
          $stateProvider.state('editargeneral_kpi', {
            url: '/getkpi',
            templateUrl: 'app/src/component/formularioKpi.html',
            controller: 'EditarkpiController as egc',
            data: {
                accessLevel: staticData.accessLevels.user 
            }
        });

//----------------------------------------------------------------------------------------------------------------------------

        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('requestInterceptor');
    }

    // Run block.
    jamesAuth.run([
        '$rootScope',
        '$state',
        'authService',
        authRun
    ]);

    function authRun($rootScope, $state, authService) {
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            if(toState.data && toState.data.accessLevel) {
                var user = authService.getUserData();
                if(!(toState.data.accessLevel & user.role)) {
                    event.preventDefault();
                    $state.go('index');
                    return;
                }
            }
        });
    }

    // jamesAuth.controller('myCtrlp', function($scope, $http) {
    //     $http.get("http://localhost/james/public/app/src/server/prueba.php")
    //     .then(function mySuccess(response) {
    //         $scope.mywelcome = response.data;
    //       }, function myError(response) {
    //         $scope.mywelcome = response.statusText;
    //     });
    // });

})();
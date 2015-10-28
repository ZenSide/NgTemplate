app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/accueil.html',
                controller: 'AccueilCtrl'
            })
    }
])

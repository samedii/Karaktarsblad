var app = angular.module('CharacterSheet', [
    'ngRoute',
    'mobile-angular-ui',
    //'mobile-angular-ui.gestures',
    'autosize',
    'puElasticInput'
]);

/*app.run(function($transform) {
    window.$transform = $transform;
});*/

app.config(function($routeProvider) {

    $routeProvider.when('/intro', {
        templateUrl: 'partials/intro.html',
        reloadOnSearch: false
    });
    $routeProvider.when('/description', {
        templateUrl: 'partials/description.html',
        reloadOnSearch: false
    });
    $routeProvider.when('/characteristics', {
        templateUrl: 'partials/characteristics.html',
        reloadOnSearch: false
    });
    $routeProvider.when('/inventory', {
        templateUrl: 'partials/inventory.html',
        reloadOnSearch: false
    });
    $routeProvider.when('/combat', {
        templateUrl: 'partials/combat.html',
        reloadOnSearch: false
    });
    $routeProvider.when('/injuries', {
        templateUrl: 'partials/injuries.html',
        reloadOnSearch: false
    });
    $routeProvider.when('/counters', {
        templateUrl: 'partials/counters.html',
        reloadOnSearch: false
    });
    $routeProvider.when('/journal', {
        templateUrl: 'partials/journal.html',
        reloadOnSearch: false
    });
    $routeProvider.when('/saveload', {
        templateUrl: 'partials/saveload.html',
        reloadOnSearch: false
    });
    $routeProvider.otherwise({redirectTo: '/saveload'});
});
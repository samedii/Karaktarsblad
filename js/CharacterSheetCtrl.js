app.controller('CharacterSheetCtrl', function($rootScope, $scope, $location){

    // Needed for the loading screen
    $rootScope.$on('$routeChangeStart', function(){
        $rootScope.loading = true;
    });

    $rootScope.$on('$routeChangeSuccess', function(){
        $rootScope.loading = false;
    });

    $rootScope.moment = moment;

    var state = localStorage.getItem('state');
    if(state) {
        $scope.state = angular.fromJson(state);
    } else {
        $scope.state = {};
        $location.path('/saveload');
    }

    $scope.$watch('state', function() {
        localStorage.setItem('state',angular.toJson($scope.state));
    },true);

});
app.controller('SaveLoadCtrl', function($scope, $http, $location, SharedState){
    SharedState.initialize($scope, 'modalKeywordNotFound');
    SharedState.initialize($scope, 'modalSaveSuccess');

    $scope.load = function() {

        $http.post(
            'http://direwolf.se/mm/sheet/load.php',
            {
                keyword: $scope.state.keyword || 'Exempel'
            },
            {})
            .then(function successCallback(response) {
                if(response.data.error) {
                    SharedState.turnOn('modalKeywordNotFound');
                }
                else {
                    angular.extend($scope.state,response.data);
                    $location.path('/intro');
                }
            }, function errorCallback(response) {
                console.error('Something went wrong when loading');
            });

    };

    $scope.save = function() {

        delete $scope.state.error;
        $http.post(
            'http://direwolf.se/mm/sheet/save.php',
            {
                keyword: $scope.state.keyword,
                state: JSON.stringify($scope.state)
            },
            {})
            .then(function successCallback(response) {
                if(response.data.error) {
                    console.error('Server responded but something went wrong when saving');
                }
                else {
                    SharedState.turnOn('modalSaveSuccess');
                }
            }, function errorCallback(response) {
                console.error('Something went wrong when saving');
            });

    };

    $scope.clear = function() {
        localStorage.clear();
        location.reload();
    };

});

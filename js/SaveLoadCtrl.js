app.controller('SaveLoadCtrl', function($scope, $http, $location, SharedState){
    SharedState.initialize($scope, 'modalKeywordNotFound');
    SharedState.initialize($scope, 'modalSaveSuccess');

    $scope.load = function() {

        $.getJSON(
            'http://direwolf.se/mm/sheet/load.php', {
                keyword: $scope.state.keyword || 'Exempel'
            },
            function success(data, textStatus, jqXHR) {
                $scope.$apply(function() {
                    $.extend($scope.state,data);
                    $location.path('/intro');
                });
            })
            .fail(function(jqxhr, textStatus, error) {
                $scope.$apply(function() {
                    SharedState.turnOn('modalKeywordNotFound');
                });
            });

    };

    $scope.save = function() {

        $.post('http://direwolf.se/mm/sheet/save.php',
            {
                keyword: $scope.state.keyword,
                state: JSON.stringify($scope.state)
            },
            function success(data, textStatus, jqXHR) {
                $scope.$apply(function() {
                    SharedState.turnOn('modalSaveSuccess');
                });
            });
    };

    $scope.clear = function() {
        localStorage.clear();
        location.reload();
    };

});
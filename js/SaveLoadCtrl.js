app.controller('SaveLoadCtrl', function($scope, $http, $location){

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
            });

    };

    $scope.save = function() {

        $.post('http://direwolf.se/mm/sheet/save.php',
            {
                keyword: $scope.state.keyword,
                state: JSON.stringify($scope.state)
            },
            function success(data, textStatus, jqXHR) {

            });
    };

    $scope.clear = function() {
        $scope.state = {};
        localStorage.clear();
    };

});
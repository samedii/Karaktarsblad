app.controller('InjuriesCtrl', function($scope){

    $scope.$watch('state.injuries', function(injuries, oldInjuries, scope) {

        var length = injuries.length;

        for(var i=length-1;i>=0;--i) {
            var injury = injuries[i];
            var healing = injury.progress.numerator/injury.progress.denominator;
            if(healing >= 1) {
                scope.state.scars.push({
                    name: injury.name,
                    details: injury.details,
                    showDetails: injury.showDetails,
                    level: injury.level,
                    added: injury.added
                });
                scope.state.injuries.splice(i,1);
            }
        }

    },true);

});
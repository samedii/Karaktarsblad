app.controller('CombatCtrl', function($scope){

    $scope.$watch('state.injuries', function(injuries, oldInjuries, scope) {
        length = injuries.length;

        checkboxes = [3,2,1,1,1];

        for(var i=length-1;i>=0;--i) {
            injury = injuries[i];
            healing = injury.progress.numerator/injury.progress.denominator;
            grade = Math.round(injury.level*(1-healing));
            if(grade<0 | grade > 4) continue;

            while(checkboxes[grade-1] <= 0 && grade < 5) grade++;
            checkboxes[grade-1]--;
        }

        scope.checkboxes = checkboxes;

    },true);

});
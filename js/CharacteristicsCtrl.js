app.controller('CharacteristicsCtrl', function($scope){

    $scope.$watch('state.characteristics', function(characteristics, oldCharacteristics, scope) {
        if(characteristics === undefined) return;

        length = characteristics.length;

        used = 0;

        for(var i=length-1;i>=0;--i) {
            c = characteristics[i];
            p = c.progress;
            if(p.numerator/p.denominator >= 1) {
                c.level++;
                p.numerator = 0;
                p.denominator = c.level+1;
            }
            if(p.numerator < 0) {
                c.level--;
                p.numerator = c.level;
                p.denominator = c.level+1;
            }

            used = used + c.cost*((c.level+1)*c.level/2+p.numerator);

        }

        scope.used = used;

    },true);

});

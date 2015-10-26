angular.module('autosize', [])
    .directive('autosize',
        function() {
            return function(scope, element, attrs) {

                autosize(element);

                scope.$on('$destroy', function() {
                    autosize.destroy(element);
                });

                //some hacks
                setTimeout(function() {
                    autosize.update(element);
                },0);
                setTimeout(function() {
                    autosize.update(element);
                },200);
                setTimeout(function() {
                    autosize.update(element);
                },1000);
                setTimeout(function() {
                    autosize.update(element);
                },5000);
            };
        });

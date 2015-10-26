app
    .directive('counter', [
        function() {
            return {
                scope: {
                    'counter': '='
                },
                templateUrl: 'partials/counter.html',
                link: function(scope, element, attrs) {

                    noOfdataNames = 50;

                    dataNames = Array.apply(null, Array(noOfdataNames)).map(function(x, index) {
                        return ('data' + index);
                    });

                    columns = dataNames.map(function(name, index) {
                        return ([name, 1]);
                    });

                    classes = function(scope) {
                        return (dataNames.reduce(function(dict, name, index) {
                            dict[name] = index < scope.counter.numerator ? 'done' : 'not-done';
                            return (dict);
                        }, {}));
                    };

                    var chart = c3.generate({
                        bindto: element.find('#chart')[0],
                        size: {
                            width: 70,
                            height: 70
                        },
                        data: {
                            columns: columns,
                            order: null,
                            type: 'donut',
                            classes: classes(scope),
                            color: function() {}
                        },
                        donut: {
                            title: '', //Math.round(100*scope.counter.numerator/scope.counter.denominator) + '%',
                            label: {
                                show: false
                            }
                        },
                        interaction: {
                            enabled: false
                        },
                        legend: {
                            hide: true
                        },
                        padding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    });

                    scope.$on('$destroy', function() {
                        chart = chart.destroy();
                    });

                    scope.$watch('counter.numerator', function(newValue, oldValue, scope) {
                        chart.load({
                            classes: classes(scope)
                        })
                    }, false);

                    scope.$watch('counter.denominator', function(newValue, oldValue, scope) {
                        chart.hide(dataNames.slice(newValue, noOfdataNames));
                        chart.show(dataNames.slice(0, newValue));
                    }, false);

                }
            }
        }
    ])
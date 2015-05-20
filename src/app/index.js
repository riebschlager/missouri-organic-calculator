'use strict';

angular.module('missouriOrganicCalculator', []);

angular.module('missouriOrganicCalculator')
    .controller('MainCtrl', ['$scope', '$log',
        function($scope, $log) {

            $log.debug('MainCtrl');

            $scope.bed = {};
            $scope.product = {};

            $scope.setShape = function(bed) {
                $scope.bed = bed;
            };

            $scope.setProduct = function(product) {
                $scope.product = product;
                if (!$scope.bed.depth) {
                    $scope.bed.depth = $scope.product.recommendedDepth;
                }
                $scope.bed.calculate();
            };

            $scope.products = [{
                name: 'Nature Wise Compost',
                description: '',
                price: 27.95,
                recommendedDepth: 3
            }, {
                name: 'Organically Enriched Top Soil',
                description: 'pulverized',
                price: 30.95,
                recommendedDepth: 3
            }, {
                name: 'Garden Soil Blend',
                description: 'top soil/compost',
                price: 34.95,
                recommendedDepth: 3
            }, {
                name: 'Turf Soil Blend',
                description: 'top soil/sand/compost',
                price: 37.95,
                recommendedDepth: 3
            }, {
                name: 'Premium 1 Mulch',
                description: '',
                price: 17.95,
                recommendedDepth: 3
            }, {
                name: 'Colored Mulches',
                description: 'red, black, gold, brown',
                price: 32.95,
                recommendedDepth: 3
            }, {
                name: 'Natural Darkwood Mulch',
                description: '',
                price: 13.95,
                recommendedDepth: 3
            }, {
                name: 'Erosion Control Mulch',
                description: '',
                price: 9.00,
                recommendedDepth: 3
            }, {
                name: 'Cedar Mulch',
                description: '',
                price: 34.95,
                recommendedDepth: 3
            }, {
                name: 'Hardwood Chips',
                description: '',
                price: 34.95,
                recommendedDepth: 3
            }];

            $scope.beds = [{
                name: 'Rectangle',
                calculate: function() {
                    if ($scope.bed.width && $scope.bed.length && $scope.bed.depth && $scope.product.name) {
                        $scope.bed.totalCubicYards = (($scope.bed.width * $scope.bed.length * ($scope.bed.depth / 12)) / 27).toFixed(2);
                        $scope.bed.totalPrice = $scope.product.price * $scope.bed.totalCubicYards;
                    } else {
                        $scope.bed.totalCubicYards = undefined;
                        $scope.bed.totalPrice = undefined;
                    }
                }
            }, {
                name: 'Circle',
                calculate: function() {
                    if ($scope.bed.diameter && $scope.bed.depth && $scope.product.name) {
                        $scope.bed.totalCubicYards = ((Math.PI * Math.pow(($scope.bed.diameter / 2), 2) * ($scope.bed.depth / 12)) / 27).toFixed(2);
                        $scope.bed.totalPrice = $scope.product.price * $scope.bed.totalCubicYards;
                    } else {
                        $scope.bed.totalCubicYards = undefined;
                        $scope.bed.totalPrice = undefined;
                    }
                }
            }, {
                name: 'Semi-Circle',
                calculate: function() {
                    if ($scope.bed.diameter && $scope.bed.depth && $scope.product.name) {
                        $scope.bed.totalCubicYards = (((Math.PI * Math.pow(($scope.bed.diameter / 2), 2) * ($scope.bed.depth / 12)) / 27) / 2).toFixed(2);
                        $scope.bed.totalPrice = $scope.product.price * $scope.bed.totalCubicYards;
                    } else {
                        $scope.bed.totalCubicYards = undefined;
                        $scope.bed.totalPrice = undefined;
                    }
                }
            }];
        }
    ]);
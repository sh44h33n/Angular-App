angular.module('tourOfHeros').controller('HeroEditController', ['$scope', '$routeParams', 'heroService', function($scope, $routeParams, heroService) {
    $scope.hero = heroService.getHero($routeParams.hero);
}]);
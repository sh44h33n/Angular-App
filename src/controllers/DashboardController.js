angular.module('tourOfHeros').controller('DashboardController', ['$scope', 'heroService', function($scope, heroService) {
    var ctrl = this;

    $scope.heroes = heroService.getTopHeroes();

    $scope.callHero = function(hero) {
        console.log(hero.name);
    }
   


}]);
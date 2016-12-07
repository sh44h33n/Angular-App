angular.module('tourOfHeros').controller('HeroesListController', ['$scope', 'heroService', function($scope, heroService) {
    $scope.heroes = heroService.getAllHeroes();


}]);
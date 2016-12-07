angular.module('tourOfHeros').controller('DashboardController', ['$scope', 'heroService', function($scope, heroService) {
    var ctrl = this;

    $scope.heroes = heroService.getTopHeroes();

    $scope.callHero = function(hero) {
        console.log(hero.name);
    }
    $scope.myInterval = 1500;
    $scope.slides = [{
            image: './slideImages/1.jpg'
        },
        {
            image: './slideImages/2.jpg'
        },
        {
            image: './slideImages/3.jpg'
        },
        {
            image: './slideImages/4.jpg'
        }
    ];


}]);
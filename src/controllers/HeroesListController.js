angular.module('tourOfHeros').controller('HeroesListController', ['$scope', 'heroService', function($scope, heroService) {
    $scope.heroes = heroService.getAllHeroes();
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
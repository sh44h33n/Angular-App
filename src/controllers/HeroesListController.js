angular.module('fsAlbum').controller('HeroesListController', ['$scope', 'hotelService', function($scope, hotelService) {
    var ctrl = this;

    $scope.hotels = hotelService.getTopHotels();

    $scope.callHotel = function(hotel) {
        console.log(hotel.name);
    }



}]);
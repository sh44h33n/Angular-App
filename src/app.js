var toh = angular.module('tourOfHeros', ['ngRoute', 'ui.bootstrap']);
toh.factory('DataSource', ['$http', function($http) {
    return {
        get: function(fileName, callback) {
            $http.get(fileName).
            success(function(data, status) {
                callback(data);
            });
        }
    };
}]);
toh.config(function($routeProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl: './views/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/classic', {
            templateUrl: './views/classic.html',
            controller: 'HeroesListController'
        })
        .when('/heroes/:hero/edit', {
            templateUrl: './views/subview.html',
            controller: 'HeroEditController'
        })
        .when('/page/:page', {
            templateUrl: function(params) {
                return 'views/' + params.page + '.html'
            }
        })
        .otherwise('/dashboard');
});
toh.controller('LGGalleryController', function($scope, DataSource) {
    var IMAGE_WIDTH = 760;
    $scope.IMAGE_LOCATION = "./src/images/landaa/";

    // Retrieve and set data 
    DataSource.get("./src/JsonImageFiles/LGimages.json", function(data) {
        $scope.galleryData = data;
        $scope.selected = data[0];
    });

    // Scroll to appropriate position based on image index and width
    $scope.scrollTo = function(image, ind) {
        $scope.listposition = { left: (IMAGE_WIDTH * ind * -1) + "px" };
        $scope.selected = image;
    };
});

toh.controller('KHGalleryController', function($scope, DataSource) {
    var IMAGE_WIDTH = 800;
    $scope.IMAGE_LOCATION = "./src/images/kuda/";

    // Retrieve and set data 
    DataSource.get("./src/JsonImageFiles/KHimages.json", function(data) {
        $scope.galleryData = data;
        $scope.selected = data[0];
    });

    // Scroll to appropriate position based on image index and width
    $scope.scrollTo = function(image, ind) {
        $scope.listposition = { left: (IMAGE_WIDTH * ind * -1) + "px" };
        $scope.selected = image;
    };
});

toh.controller('VGalleryController', function($scope, DataSource) {
    var IMAGE_WIDTH = 800;
    $scope.IMAGE_LOCATION = "./src/images/vovah/";

    // Retrieve and set data 
    DataSource.get("./src/JsonImageFiles/KHimages.json", function(data) {
        $scope.galleryData = data;
        $scope.selected = data[0];
    });

    // Scroll to appropriate position based on image index and width
    $scope.scrollTo = function(image, ind) {
        $scope.listposition = { left: (IMAGE_WIDTH * ind * -1) + "px" };
        $scope.selected = image;
    };
});

toh.controller('EXGalleryController', function($scope, DataSource) {
    var IMAGE_WIDTH = 800;
    $scope.IMAGE_LOCATION = "./src/images/explorer/";

    // Retrieve and set data 
    DataSource.get("./src/JsonImageFiles/EXimages.json", function(data) {
        $scope.galleryData = data;
        $scope.selected = data[0];
    });

    // Scroll to appropriate position based on image index and width
    $scope.scrollTo = function(image, ind) {
        $scope.listposition = { left: (IMAGE_WIDTH * ind * -1) + "px" };
        $scope.selected = image;
    };
});
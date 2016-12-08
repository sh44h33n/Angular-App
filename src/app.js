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
//creating controller to bind FS Landaa Images
toh.controller('LGGalleryController', function($scope, DataSource) {
    var IMAGE_WIDTH = 768;
    $scope.IMAGE_LOCATION = "./src/images/landaa/";

    // Retrieving and creating image array using json files
    DataSource.get("./src/JsonImageFiles/LGimages.json", function(data) {
        $scope.galleryData = data;
        $scope.selected = data[0];
    });

    // Scrolling images to index position
    $scope.scrollTo = function(image, index) {
        $scope.listposition = { left: (IMAGE_WIDTH * index * -1) + "px" };
        $scope.selected = image;
    };
});
////creating controller to bind FS Kuda huraa Images
toh.controller('KHGalleryController', function($scope, DataSource) {
    var IMAGE_WIDTH = 768;
    $scope.IMAGE_LOCATION = "./src/images/kuda/";

    // Retrieving and creating image array using json files
    DataSource.get("./src/JsonImageFiles/KHimages.json", function(data) {
        $scope.galleryData = data;
        $scope.selected = data[0];
    });

    // Scroll to appropriate position based on image index and width
    $scope.scrollTo = function(image, index) {
        $scope.listposition = { left: (IMAGE_WIDTH * index * -1) + "px" };
        $scope.selected = image;
    };
});
//creating controller to bind FS Vovah Images
toh.controller('VGalleryController', function($scope, DataSource) {
    var IMAGE_WIDTH = 768;
    $scope.IMAGE_LOCATION = "./src/images/vovah/";

    // Retrieving and creating image array using json files
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
//creating controller to bind FS Explorer Images
toh.controller('EXGalleryController', function($scope, DataSource) {
    var IMAGE_WIDTH = 768;
    $scope.IMAGE_LOCATION = "./src/images/explorer/";

    // Retrieving and creating image array using json files
    DataSource.get("./src/JsonImageFiles/EXimages.json", function(data) {
        $scope.galleryData = data;
        $scope.selected = data[0];
    });

    // Scroll to appropriate position based on image index and width
    $scope.scrollTo = function(image, index) {
        $scope.listposition = { left: (IMAGE_WIDTH * index * -1) + "px" };
        $scope.selected = image;
    };
});

toh.controller('Slidee', function($scope, DataSource) {


    // Retrieving images from directory in to slide array;


    $scope.myInterval = 1500;

    $scope.slides = [{
            image: './src/images/slides/1.jpg'
        },
        {
            image: './src/images/slides/2.jpg'
        },
        {
            image: './src/images/slides/3.jpg'
        },
        {
            image: './src/images/slides/4.jpg'
        }
    ];





});
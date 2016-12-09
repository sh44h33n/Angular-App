angular.module('fsAlbum').service('hotelService', function($filter) {
    var hotels = [{
            id: 1,
            name: "FS Landaa Giraavaru",
            page: 'one'
        },
        {
            id: 2,
            name: "FS Kuda Huraa",
            page: 'two'
        },
        {
            id: 3,
            name: "FS Explorer",
            page: 'three'
        },
        {
            id: 4,
            name: "FS Vovah",
            page: 'four'
        }
    ];

    return {
        getTopHotels: function() {
            return hotels;
        },

        getHotel: function(id) {
            id = parseInt(id);
            var hotel = $filter('filter')(hotels, { id: id }, true);

            if (hotel.length) {
                return hotel[0];
            } else {
                return {};
            }
        },

        getAllHeroes: function() {
            return hotels;
        }
    }
});
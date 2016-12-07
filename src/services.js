angular.module('tourOfHeros').service('heroService', function($filter) {
    var heroes = [{
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
        getTopHeroes: function() {
            return heroes;
        },

        getHero: function(id) {
            id = parseInt(id);
            var hero = $filter('filter')(heroes, { id: id }, true);

            if (hero.length) {
                return hero[0];
            } else {
                return {};
            }
        },

        getAllHeroes: function() {
            return heroes;
        }
    }
});
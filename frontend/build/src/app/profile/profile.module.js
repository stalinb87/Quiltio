(function (module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('profile', {
            url: '/profile/:id?',
            views: {
                "main": {
                    controller: 'ProfileController as model',
                    templateUrl: 'profile/profile.tpl.html'
                }
            },
            data: {
                pageTitle: 'Profile'
            }
        });
    }]);

}(angular.module("quiltio.profile", [
    'ui.router'
])));

(function (module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('profile', {
            url: '/profile/:id?',
            views: {
                "main": {
                    controller: 'ProfileController as model',
                    templateUrl: 'profile/profile.tpl.html'
                }
            },
            data: {
                pageTitle: 'Profile'
            }
        });
    }]);

}(angular.module("quiltio.profile", [
    'ui.router'
])));

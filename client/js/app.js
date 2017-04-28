angular.module('music-app', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login></login>',
                component: 'login'
            })
            .state('signup', {
                url: '/signup',
                template: '<sign-up></sign-up>',
                component: 'signUp'
            })
            .state('home', {
                url: '/home',
                template: '<home></home>',
                component: 'home'
            })
            .state('daw', {
                url: '/daw',
                template: '<daw></daw>',
                component: 'daw'
            })
            .state('synth', {
                url: '/synth',
                template: '<synth></synth>',
                component: 'synth'
            })
            .state('groupPage', {
                url: '/grouppage',
                template: '<group-page></group-page>',
                component: 'groupPage'
            })



        $urlRouterProvider.otherwise('/');

    })

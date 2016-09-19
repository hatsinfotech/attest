var app = angular.module('mainApp', ['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/add-batch');
    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: "pages/login.html",
        controller: 'loginCtrl'
     })
        .state('userHome', {
        url: '/user-home',
        templateUrl: "pages/user_home.html",
        controller: 'userHomeCtrl'
     })
        .state('adminHome', {
        url: '/admin-home',
        templateUrl: "pages/admin_home.html",
        controller: 'adminHomeCtrl'
     })
        .state('addBatch', {
        url: '/add-batch',
        templateUrl: "pages/AddBatch.html",
        controller: 'addBatchCtrl'
     })
    
}]);
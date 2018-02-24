angular.module('vendalivros', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/livros', {
        templateUrl: 'partials/principal.html',
        controller: 'LivrosController'     
    });

    $routeProvider.when('/livros/new', {
        templateUrl: 'partials/livro.html',
        controller: 'LivroController'
    });

    $routeProvider.when('/livros/edit/:livroId', {
        templateUrl: 'partials/livro.html',
        controller: 'LivroController'
    });

    $routeProvider.otherwise({redirectTo: '/livros'});
});
angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

	var ddo = {};
	ddo.restrict = "AE"; 
	ddo.scope = {
		titulo: '@' 
	};
	ddo.transclude = true;
	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
})

.directive("botaoPerigo", function(){

	var ddo = {};

	ddo.restrict = "E"
	ddo.scope = {
		nome: '@',
		acao: '&' 
	};
	ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(livro)">{{nome}}</button>';

	return ddo;
});
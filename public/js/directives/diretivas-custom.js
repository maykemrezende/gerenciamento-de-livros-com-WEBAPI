angular.module('diretivasCustom', [])
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
})

.directive("onFocusCustomizado", function(){

	var ddo = {};

	ddo.restrict = "A";

	ddo.link = function(scope, element) {
		scope.$on('livroCadastrado', function(){
			element[0].focus();
		});
	}

	return ddo;
});
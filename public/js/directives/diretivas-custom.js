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
})

.directive('numberOnly', function() {
	var ddo = {};

	ddo.restrict = 'A',
	ddo.require = 'ngModel',
	
	ddo.link = function(scope, element, attrs, ngModel) {
		var negativo = /\-/.test(attrs.numberOnly);
		var decimal = /\.|\,/.test(attrs.numberOnly) ? /\.|\,/.exec(attrs.numberOnly)[0] : null;
  
		var regExp = '^';
		regExp += negativo ? '[\\-]{0,1}' : '';
		regExp += '[\\d]+';

		if(decimal != null) {
			regExp += '[\\'+decimal+'][\\d]+|';
			if(negativo) {
			regExp += '[\\-]{0,1}'
			}
			regExp += '[\\d]+'
		}

		regExp += '';
		regExp = new RegExp(regExp);
  
		ngModel.$parsers.unshift(function(input) {
			if(input === undefined) return null;
			if(input === null) return;

			input = input.toString().replace(/\./, decimal);
			if(input == '-') return input;
			if(decimal !== null && input.charAt(input.length-1) == decimal) return input;

			input = regExp.test(input) ? regExp.exec(input)[0] : null;

			var viewVal = null;

			if (input !== null) {
			input = decimal != null ? parseFloat(input.replace(/\,/, '.')) : parseInt(input);
			}

			viewVal = isNaN(input) || input === null ? '' : input;

			ngModel.$setViewValue(decimal != null ? viewVal.toString().replace(/\./, decimal) : viewVal.toString());
			ngModel.$render();

			return isNaN(input) ? null : input;
		});
  
		ngModel.$formatters.unshift(function(value) {
			if(value !== undefined && value !== null) {
				return decimal != null ? value.toString().replace(/\./, decimal) : value.toString();
			}
		});
	}
	return ddo;
});
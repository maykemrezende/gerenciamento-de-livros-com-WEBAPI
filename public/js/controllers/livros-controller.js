angular.module('vendalivros').controller('LivrosController', function($scope, deletaLivro, buscaLivros) {
	
	$scope.livros = [];
	$scope.filtro = '';
	$scope.mensagem = ''; 

	buscaLivros.query(function(livros){
		console.log(livros)
		$scope.livros = livros;
	}, function(erro){
		console.log(erro);
	});

	$scope.removerLivro = function(livro){

		deletaLivro.delete({ID : livro.ID}, function() {
			var indiceLivro = $scope.livros.indexOf(livro);
			$scope.livros.splice(indiceLivro, 1);

			$scope.mensagem = 'Livro ' + livro.Titulo + ' foi removido com sucesso';

		}, function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi possível remover o livro ' + livro.Titulo;
		});
	};

});
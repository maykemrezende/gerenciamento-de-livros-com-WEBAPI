angular.module('vendalivros').controller('LivroController', function($scope, cadastroDeLivros, 
                                                                    recursoLivro, $routeParams){

    $scope.livro = {};
    $scope.mensagem = '';

    if ($routeParams.livroId){
        recursoLivro.get({LivroId : $routeParams.livroId}, function(livro){
            console.log(livro)
            $scope.livro = livro;

        }, function(erro){
            $scope.mensagem = 'Não foi possível obter o livro';
            console.log(erro);
        });
    }

    $scope.cadastraLivro = function(){
        if ($scope.formulario.$valid) {
            console.log($scope.livro)
            cadastroDeLivros.cadastrar($scope.livro)
            .then(function(dados){
                $scope.mensagem = dados.mensagem;

                if(dados.inclusao){
                    $scope.livro = {};
                }
            })
            .catch(function(dados){
                $scope.mensagem = dados.mensagem;
            })
        }       
    };

});
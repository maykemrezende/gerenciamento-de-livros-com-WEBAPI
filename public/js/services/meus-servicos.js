angular.module('meusServicos', ['ngResource'])
.factory('recursoLivro', function($resource){

    return $resource('http://localhost:17735/api/Livro/:LivroId', null, {
        update : {
            method: 'PUT'
        }
    });

})
.factory('buscaLivros', function($resource){
    return $resource('http://localhost:17735/api/Livro/BuscarLivros', null, {

        get: {
            method: 'GET',
            headers: {'Accept': 'application/json'}
        }
    });
})
.factory('deletaLivro', function($resource){
    return $resource('http://localhost:17735/api/Livro/:ID', null, {

        delete: {
            method: 'DELETE'
        }
    });
})
.factory('buscaLivro', function($resource){
    return $resource('http://localhost:17735/api/Livro/:LivroId', null, {

        get: {
            method: 'GET',
            headers: {'Accept': 'application/json'}
        }
    });
})
.factory('cadastroDeLivros', function(recursoLivro, $q){

    var servico = {};

    servico.cadastrar = function(livro){

        return $q(function(resolve, reject){

            if(livro.ID){
                
                recursoLivro.update({LivroId: livro.ID}, livro, function(){
                    resolve({
                        mensagem: 'Livro ' + livro.Titulo + ' atualizado com sucesso!',
                        inclusao: false
                    });
                }, function(erro){
                    console.log(erro)
                    reject({
                        mensagem: 'Não foi possível alterar o livro ' + livro.Titulo
                    });
                });

            } else {

                recursoLivro.save(livro, function(){
                    resolve({
                        mensagem: 'Livro ' + livro.Titulo + ' incluído com sucesso!',
                        inclusao: true

                    }, function(erro){
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível incluir o livro ' + livro.Titulo
                        });
                    });
                })
            }

        });
    };

    return servico;
});
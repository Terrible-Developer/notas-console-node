const fs = require('fs');

const lerAnotacao = function(){
    return 'Anotação';
}
const inserirAnotacao = function(titulo, conteudo){
    const anotacoes = carregarAnotacoes(titulo);
    anotacoes.push({
        titulo: titulo,
        conteudo: conteudo
    });
    
    //console.log(anotacoes);
    salvarAnotacoes(anotacoes);
}

const salvarAnotacoes = function(anotacoes){
    console.log(anotacoes);
    console.log(anotacoes.titulo);
    const anJson = JSON.stringify(anotacoes);
    console.log(anJson);
    console.log(anJson.titulo);
    // fs.writeFileSync(`${anJson.titulo}.json`, anJson);
}

const carregarAnotacoes = function(titulo){
    try{
        const buffer = fs.readFileSync(titulo + '.json');
        const dadosJson = buffer.toString();
        return JSON.parse(dadosJson);
    }
    catch(e){
        return [];
    }
}


module.exports = {
    lerAnotacao: lerAnotacao,
    inserirAnotacao: inserirAnotacao,
    carregarAnotacoes: carregarAnotacoes
}



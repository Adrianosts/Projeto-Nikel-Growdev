const nome = "Adriano Silva";   // Const - É uma (constante) e não pode ser alterado
let nome2 = "Adriano Silva"    // Let - É uma (variável) que pode ser alterado a qualquer momento
let pessoaDefault = {        // Declarando um objeto
    nome: "Adriano SS",
    idade: "35",
    trabalho: "Estudante"
}

let nomes = ["Adriano Silva", "Pedro Augusto", "Maria Aparecida"];      // Array[] - Serve para criarmos uma lista

let pessoas = [               // Objetos{} dentro de uma lista[]
    {
        nome: "Adriano SS",
        idade: "35",
        trabalho: "Estudante"
    },
    {
        nome: "Pedro Augusto",
        idade: "40",
        trabalho: "Designer"
    }
];        

console.log("Valor inicial:")
console.log(nome);

nome2 = "Pedro Augusto";

console.log("Valor alterdo:")
console.log(nome2);

function alterarNome() {          // Aqui estou declarando a função
    nome2 = "Rodrigo Neves"
    console.log("Valor alterdo:");     // Aqui vai imprimir o nome Valor alterado
    console.log(nome2);            // E aqui vai imprimir o novo valor de nome2
}


function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterdo recebendo um nome:");
    console.log(nome2);
}


function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}


function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);      //Push - Serve para adicionar
}


function imprimirPessoas() {
    pessoas.forEach((item) => {       // forEach - Estrututa de repetição que percorre uma lista dentro de um Array[]
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}


imprimirPessoas();

adicionarPessoa ({
    nome: "Manoel Silva",
    idade: "66",
    Trabalho: "Aposentado"
});

imprimirPessoas();


//console.log(nomes[2]);   // Coloca-se [] para selecionar qual objeto de uma lista eu quero que apareça.




//imprimirPessoa(pessoaDefault);


//imprimirPessoa ({
//   nome: "Maria Silva",
//    idade: "40",
//    trabalho: "Designer"
//}); 
    


//recebeEalteraNome("João da Silva");

//alterarNome();   // E aqui estou chamando a função 

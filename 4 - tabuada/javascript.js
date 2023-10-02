function gerarTabuada() {
    //pega do HTML o elemento pelo ID
    const numeroInput = document.getElementById("numeroInput");

    //pega o valor do input do elemento    
    const valorTabuada = parseInt(numeroInput.value);

    // checar se o numero é valido
    if (!isNaN(valorTabuada)) {
        // gera e mostra a tabuada
        let tableOutput = "";
        for (let i = 1; i <= 10; i++) {
            tableOutput += `${valorTabuada} x ${i} = ${valorTabuada * i}<br>`;
        }

        // mostra a tabela na div "tableOutput"
        document.getElementById("tableOutput").innerHTML = tableOutput;
    } else {
        // da o alerta se tentar informar algo que não seja numero
        alert("Por favor insira um numero valido");
    }
}
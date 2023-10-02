function calcularResultado() {
    //Pega os valores dos campos e seleciona a operacao
    const numeroPri = parseFloat(document.getElementById('numeroPri').value);
    const numeroSeg = parseFloat(document.getElementById('numeroSeg').value);
    const operacao = document.getElementById('operacao').value;

    // Verifica se os numero são validos
    if (!isNaN(numeroPri) && !isNaN(numeroSeg)) {
        // Faz o calculo baseado na operacao
        let result;
        switch (operacao) {
            case '+':
                result = numeroPri + numeroSeg;
                break;
            case '-':
                result = numeroPri - numeroSeg;
                break;
            case '*':
                result = numeroPri * numeroSeg;
                break;
            case '/':
                // Checa a divisão por zero
                if (numeroSeg === 0) {
                    document.getElementById('result').textContent = 'Erro: Divisão por zero';
                    return;
                }
                result = numeroPri / numeroSeg;
                break;
            default:
                document.getElementById('result').textContent = 'Operacao invalida';
                return;
        }

        // Display the result
        document.getElementById('result').textContent = result;
    } else {
        // Handle invalid input
        document.getElementById('result').textContent = 'Invalid input';
    }
}

function calcularCustoFinal() {
    // Obter os valores dos campos de entrada
    const custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
    const percDistribuidor = parseFloat(document.getElementById('percDistribuidor').value) / 100;
    const percImpostos = parseFloat(document.getElementById('percImpostos').value) / 100;

    // Calcular o custo final
    const custoFinal = custoFabrica + (custoFabrica * percDistribuidor) + (custoFabrica * percImpostos);

    // Exibir o resultado no campo de texto de saída
    document.getElementById('valorFinal').value = custoFinal.toFixed(2);
}

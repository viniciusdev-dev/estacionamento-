class Estacionamento {
  calcular() {
    const valor = parseFloat(document.getElementById("valor").value);
    const mensagem = document.getElementById("mensagem");

    if (isNaN(valor)) {
      mensagem.textContent = "Insira um valor válido!";
      return;
    }

    if (valor < 1.00) {
      mensagem.textContent = "Valor inválido!";
      return; 
    }

    let tempo = 0;
    let preco = 0;

    if (valor >= 3.00) {
      tempo = 120;
      preco = 3.00;
    } else if (valor >= 1.75) {
      tempo = 60;
      preco = 1.75;
    } else if (valor >= 1.00) {
      tempo = 30;
      preco = 1.00;
    }

    const troco = valor - preco;

    mensagem.textContent = `Tempo: ${tempo} minutos. Troco: R$ ${troco.toFixed(2)}`;
  }
}

// Criando instância da classe
const estacionamento = new Estacionamento();

import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log("Criação de veículo");
const carro: Veiculo = criaVeiculo();

while (true) {
  console.log("########### MENU ###########");
  console.log("1 - Acelerar");
  console.log("2 - Frear");
  console.log("3 - Subir marcha");
  console.log("4 - Descer marcha");
  console.log("5 - Imprimir dados do veículo");
  console.log("0 - Sair");

  const opcao = +teclado("Escolha uma opção: ");
  if (opcao === 0) {
    break;
  }
  switch (opcao) {
    case 1:
      acelerar(carro);
      break;

    case 2:
      frear(carro);
      break;

    case 3:
      subirMarcha(carro);
      break;

    case 4:
      descerMarcha(carro);
      break;
    case 5:
      imprimirDados(carro);
      break;
    default:
      break;
  }
}

console.table(carro);

function acelerar(veiculo: Veiculo): void {
  if (veiculo.marchaAtual != 0) {
    veiculo.velocidade += veiculo.potencia * 0.1;
    console.log(veiculo.velocidade);
  }
}

function subirMarcha(veiculo: Veiculo): void {
  if (veiculo.marchaAtual < veiculo.numeroMarchas) {
    veiculo.marchaAtual++;
    console.log(veiculo.marchaAtual);
  }
}

function descerMarcha(veiculo: Veiculo): void {
  if (veiculo.marchaAtual > 0) {
    veiculo.marchaAtual--;
    console.log(veiculo.marchaAtual);
  }
}
function frear(veiculo: Veiculo): void {
  if (veiculo.velocidade > 0) {
    veiculo.velocidade -= veiculo.potencia * 0.1;
    if (veiculo.velocidade < 0) {
      veiculo.velocidade = 0;
    }
  }
  console.log(veiculo.velocidade);
}

function imprimirDados(veiculo: Veiculo): void {
  console.table(veiculo);
}

function criaVeiculo(): Veiculo {
  const veiculo: Veiculo = new Veiculo();
  veiculo.marca = teclado("Marca: ");
  veiculo.modelo = teclado("Modelo: ");
  veiculo.potencia = +teclado("Potência: ");
  veiculo.numeroMarchas = +teclado("Número de marchas: ");
  return veiculo;
}

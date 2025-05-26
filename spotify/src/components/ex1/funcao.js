import prompt from 'prompt-sync'
let ler = prompt();


export function calcularMedia(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;
  return media;
}

export function apresentarPrograma() {
  console.log('-----------------------');
  console.log('-- PROGRAMA DA MÉDIA --');
  console.log('-----------------------\n');
}

export function pedirNumero(msg) {
  console.log(msg);
  let num = Number(ler());

  return num;
}

export function apresentarResposta(n1, n2, n3, media) {
  console.log(`\nA média de ${n1}, ${n2} e ${n3} é ${media}`);
}


export function finalizar() {
  console.log('\n\n...programa finalizado.');
}


export function calcularSoma(num1, num2) {
  let soma = num1 + num2;
  return soma;
}




export function apresentarPrograma() {
  console.log('-----------------------');
  console.log('-- PROGRAMA DA SOMA --');
  console.log('-----------------------\n');
}


export function pedirNumero(msg) {
  console.log(msg);
  let num = Number(ler());

  return num;
}


export function apresentarResposta(n1, n2, soma) {
  console.log(`\nA soma de ${n1} e ${n2} é ${soma}`);
}


export function finalizar() {
  console.log('\n\n...programa finalizado.');
}
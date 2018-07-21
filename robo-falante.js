let nome;
let $imagemRobo = document.querySelector(".robo");
let $secaoPalco = document.querySelector(".palco");

function fazPerguntas() {
  $imagemRobo.src = "nano-normal.png";
  $secaoPalco.style.backgroundImage = "url('espaco.png')";
  perguntaNome();
  perguntaSeEstaBem();
  perguntaSeQuerIrParaLua();
}

function perguntaNome() {
  nome = prompt("Qual é o seu nome?");
  alert(`Olá ${nome}!`);
}

function perguntaSeEstaBem() {
  let estaBem = prompt("Você está bem?");
  if (estaBem == 'sim') {
    $imagemRobo.src = 'nano-feliz.png';
    alert('Que bom! :)');
  } else {
    $imagemRobo.src = 'nano-triste.png';
    alert('Que pena. :(');
  }
}

function perguntaSeQuerIrParaLua() {
  let vamos = prompt(`Você que ir para a lua comigo ${nome}?`);
  if (vamos == 'sim') {
    $secaoPalco.style.backgroundImage = "url('lua.png')";
    alert('Chegamos! :)');
  } else {
    alert('Que pena. :(');
  }
}
// Eco100 - cuide da natureza
// Script por Lucas Gabriel (lucmsilva)
// BSD-3-Clause: veja o arquivo LICENSE

// carrega as msg do json
async function carregarMsgs() {
  try {
    const response = await fetch('Textos/Mensagens.json');
    const data = await response.json();
    return data.messages;
  } catch (error) {
    console.error('Erro ao carregar as mensagens:', error);
    return [];
  }
}

// calcula a msg hj
function mensagemHoje(messages) {
  const hoje = new Date();
  const diaDoAno = pegarDiaDoAno(hoje);

  const msgIndex = diaDoAno % messages.length;
  return messages[msgIndex];
} 

// pega o dia atual pra funcao de msg diaria
function pegarDiaDoAno(date) {
  const inicio = new Date(date.getFullYear(), 0, 0);
  const diferenca = date - inicio + (inicio.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  const umDia = 1000 * 60 * 60 * 24;
  return Math.floor(diferenca / umDia);
}

// auto explicativo
async function mostrarMsgDiaria() {
  const msgs = await carregarMsgs();
  const msgDiaria = mensagemHoje(msgs);
  document.getElementById("msg-diaria").textContent = msgDiaria;
}

mostrarMsgDiaria();
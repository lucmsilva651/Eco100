// Eco100 - cuide da natureza
// Script por Lucas Gabriel (lucmsilva)
// BSD-3-Clause: veja o arquivo LICENSE

// botao pra copiar o pix
function copiarChavePix() {
  const chavePix = "00020101021126810014br.gov.bcb.pix01368d6a266f-59e5-4084-be71-ee134b21e6de0219PIX DOACAO VIA SITE5204000053039865802BR5918LUCAS G M DA SILVA6007PIQUETE62070503***6304AB6D";
  navigator.clipboard.writeText(chavePix).then(() => {
    alert('Chave Pix copiada para a área de transferência!\nCole no seu app do banco para fazer a doação.');
  }).catch(err => {
    alert('Erro ao copiar chave Pix:' + err);
  });
};

// botao pra mostrar o qrcode do pix
function mostrarQrCode() {
  document.getElementById("img-pix").style.display = "initial";
  document.getElementById("mostrarQrLink").style.display = "none";
  document.getElementById("esconderQrLink").style.display = "inline";
};

// oculta o qrcode da pagina de sobre
function ocultarQrCode() {
  document.getElementById("img-pix").style.display = "none";
  document.getElementById("mostrarQrLink").style.display = "inline";
  document.getElementById("esconderQrLink").style.display = "none";
};

ocultarQrCode();
// Calculadora de Reembolso Corporativo
// Desenvolvido por Guilherme Eduardo Bernardes - JS

function iniciarReembolso() {
  alert("Bem-vindo à Calculadora de Reembolso Corporativo!");

  const limiteReembolso = 1250; // em reais

  let transporte = parseFloat(prompt("Digite o valor gasto com TRANSPORTE:"));
  let alimentacao = parseFloat(prompt("Digite o valor gasto com ALIMENTAÇÃO:"));
  let hospedagem = parseFloat(prompt("Digite o valor gasto com HOSPEDAGEM:"));
  let outros = parseFloat(prompt("Digite o valor gasto com OUTROS:"));

  if (
    isNaN(transporte) || isNaN(alimentacao) ||
    isNaN(hospedagem) || isNaN(outros)
  ) {
    alert("Todos os valores devem ser numéricos. Tente novamente.");
    return;
  }

  const total = transporte + alimentacao + hospedagem + outros;

  console.clear();
  console.log("===== RELATÓRIO DE REEMBOLSO =====");
  console.log("Transporte: R$ " + transporte.toFixed(2));
  console.log("Alimentação: R$ " + alimentacao.toFixed(2));
  console.log("Hospedagem: R$ " + hospedagem.toFixed(2));
  console.log("Outros: R$ " + outros.toFixed(2));
  console.log("----------------------------------");
  console.log("TOTAL SOLICITADO: R$ " + total.toFixed(2));

  if (total > limiteReembolso) {
    const excedente = total - limiteReembolso;
    console.log("⚠️ Valor acima do limite! Excedeu R$ " + excedente.toFixed(2));
  } else if (total === limiteReembolso) {
    console.log("✅ Valor exato ao limite de reembolso.");
  } else {
    const restante = limiteReembolso - total;
    console.log("🔹 Ainda restam R$ " + restante.toFixed(2) + " para reembolso.");
  }

  console.log("===================================");
}

iniciarReembolso();
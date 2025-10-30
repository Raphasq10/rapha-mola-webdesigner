// script.js (Versão final: Coleta de Dados + Limpeza de Formulário)

const button = document.querySelector('#soli-serv');
const form = document.querySelector('#form-soli-serv'); // Captura o formulário uma vez

const addloading = () => {
    button.innerHTML = '<img src="./assets/img/loading.png" class="loading" alt="carregando">';
}

const removeloading = () => {
    button.innerHTML = 'Enviar mensagem';
}

const servSubmit = (event) => {
    event.preventDefault();
    addloading();

    // 1. Coleta dos dados do formulário
    const name = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const telefone = document.querySelector('input[name=whatsapp]').value;
    const mensagem = document.querySelector('textarea[name=mensagem]').value;
    
    // 2. Coleta da data e hora
    const dataHora = new Date().toLocaleString('pt-BR');
    
    // 3. Coleta do User Agent COMPLETO (a string longa)
    const userAgentCompleto = navigator.userAgent; 
    
    // 4. Extração Simples do Nome do Navegador 
    let navegadorSimplificado = 'Desconhecido';
    
    if (userAgentCompleto.includes('Edg')) {
        navegadorSimplificado = 'Microsoft Edge';
    } else if (userAgentCompleto.includes('Chrome') && !userAgentCompleto.includes('OPR') && !userAgentCompleto.includes('Brave')) {
        navegadorSimplificado = 'Google Chrome';
    } else if (userAgentCompleto.includes('Firefox')) {
        navegadorSimplificado = 'Mozilla Firefox';
    } else if (userAgentCompleto.includes('Safari') && !userAgentCompleto.includes('Chrome')) {
        navegadorSimplificado = 'Apple Safari';
    } else if (userAgentCompleto.includes('OPR') || userAgentCompleto.includes('Opera')) {
        navegadorSimplificado = 'Opera';
    }
    
    // Envio dos dados via fetch para o SheetMonkey
    fetch('https://api.sheetmonkey.io/form/ntBhUEAF9ksE55UCYvDWJx', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name, 
            email, 
            telefone, 
            mensagem,
            dataHora, 
            navegadorCompleto: userAgentCompleto,
            navegadorSimplificado: navegadorSimplificado
        }),
    })
    .then(() => {
        alert('Mensagem Enviada! Obrigado pelo contato.');
        // Limpa todos os campos do formulário
        form.reset(); 
    })
    .catch(error => { 
        console.error('Erro ao enviar:', error);
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
    })
    .finally(() => removeloading()); // Remove o loading, independente de sucesso ou falha
}

// Adiciona o listener para o evento de submit do formulário
form.addEventListener('submit', servSubmit);





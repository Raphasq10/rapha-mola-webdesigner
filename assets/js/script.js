$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


// Aguarda o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', () => {

  // 1. Seleciona o elemento do menu que vai mudar de cor
  const menuWrapper = document.querySelector('.navbar-content-wrapper');

  // 2. Define a função que verifica a posição do scroll
  const handleScroll = () => {
    // Calcula 10% da altura da janela do navegador
    const scrollThreshold = window.innerHeight * 0.8;

    // 3. Verifica se o scroll vertical passou do limite de 10%
    if (window.scrollY > scrollThreshold) {
      // Se passou, adiciona a classe .rolagem
      menuWrapper.classList.add('rolagem');
    } else {
      // Se voltou para o topo, remove a classe .rolagem
      menuWrapper.classList.remove('rolagem');
    }
  };

  // 4. Adiciona um "ouvinte" que executa a função handleScroll sempre que o usuário rolar a página
  window.addEventListener('scroll', handleScroll);

});






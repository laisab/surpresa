const quizForm = document.getElementById('quiz-form');

const respostasCorretas = ['a', 'b', 'c'];

quizForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o envio do formulário

    const respostasSelecionadas = [];
    const checkboxes = document.querySelectorAll('input[name="q1"]:checked');

    checkboxes.forEach(checkbox => {
        respostasSelecionadas.push(checkbox.value);
    });

    if(respostasSelecionadas.length === respostasCorretas.length && respostasCorretas.every(resposta => respostasSelecionadas.includes(resposta))){
        window.location.href = "surpresa.html";
    }
});


/*

      // Verifica se todas as respostas corretas foram selecionadas
      if (respostasSelecionadas.length === respostasCorretas.length && 
          respostasCorretas.every(resposta => respostasSelecionadas.includes(resposta))) {
        window.location.href = "pagina_de_sucesso.html"; 
      } else {
        window.location.href = "pagina_de_erro.html"; 
      }
    }); */
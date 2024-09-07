
function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada 
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um personagem</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";
  
    // Itera sobre cada resultado da pesquisa.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descrição = dado.descrição.toLowerCase()
      tags = dado.tags.toLowerCase()
      //se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href=${dado.linkYoutube} target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descrição}</p>
          <a href=${dado.linkInfo} target="_blank">Mais informações</a>
        </div>
      `;
      }
      // Constrói o HTML para cada resultado, formatando os links e o conteúdo.
      
    }

    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui o HTML gerado à seção, atualizando a interface do usuário.
    section.innerHTML = resultados;
  }

 




import { infoTabela } from "./data.js"
const body = document.querySelector('.tBody')


    for (let i = 0; i < infoTabela.length; i++) {

        infoTabela.status = i
    switch (infoTabela.status){
        case '1': "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
      }        

        const template =
            `
        <tr class="tableRow">
            <!-- coluna Codigo -->
            <td class="colunas coluna1">
                <div class="conteudo1">
                    <button class="btn_editar"><img src="imgs/editar.svg" alt="editar"></button>
                    <label class="label_codigo">${infoTabela[i].id}</label>
                </div>
            </td>

            <!-- coluna Categoria-->
            <td class="colunas coluna2">
                <div class="conteudo2">
                    <label class="label_categoria">${infoTabela[i].objeto}</label>
                </div>
            </td>

            <!-- coluna Descrição-->
            <td class="colunas coluna3">
                <div class="conteudo3">
                    <label class="label_descricao_conteudo">${infoTabela[i].descricao}</label>
                </div>
            </td>

                <!-- coluna Status-->
            <td class="colunas coluna4">
                <div class="conteudo4">
                    ${infoTabela[i].status}
                </div>
            </td>
        </tr>
        `

        body.innerHTML += template
    }

    const linhas = document.querySelectorAll(".tableRow")
    linhas.forEach(linha => {
        linha.addEventListener("click", () => {
            const template =
                `
        <td class="colunas coluna1">
        <div class="conteudo1">
            <button class="btn_editar"><img src="imgs/editar.svg" alt="editar"></button>
            <label class="label_codigo">${infoTabela[i].id}</label>
        </div>
        </td>
    `
            body.innerHTML += template
        })
    })
var API_KEY = 'ff42562d3e064cc689c7bf1600919125'
function exibeNoticias() {
    let diviTela = document.querySelector('div#buscador')
    let texto = ' '

    //montar o texto

    let dados = JSON.parse(this.responseText);
    for (i = 0; i < dados.articles.lenght; i++) {
        let noticia = dados.articles[i];
        let data = new Date(noticia.publishedAt);
        texto = texto + `
            <div class="div1">
                <img src="${noticia.urlToImage}" alt="">
                <span class="titulo">${noticia.title}</span><br>
                <span class="creditos">${data.toLocaleDateString()} - 
                    ${noticia.source.name} - 
                    ${noticia.author}</span><br>
                <span class="text">
                ${noticia.content} <a href="${noticia.url}">Leia mais ...</a>
                </span>
            </div>            
        `;
    };
    //preencher
    diviTela.innerHTML = texto;
}


function executaPesquisa() {
    var pesquisa = document.querySelector('input#txtPesquisa').value;
    var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest;
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    };
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${pesquisa}&apiKey=${API_KEY}`);
    xhr.send();
}

document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);
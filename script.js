
var tela = document.querySelector('div#tela');
function funcionaPesquisa(){
        var pega;
        if (window.XMLHttpRequest) {
            pega = new XMLHttpRequest;
        } else {
            pega = new ActiveXObject("Microsoft.XMLHTTP");
        }
        //let tela = document.querySelector('div#tela');
        pega.open('GET', 'https://newsapi.org/v2/everything?q=belo-horizonte&apiKey=ff42562d3e064cc689c7bf1600919125');
        pega.onload = function () {
            if (pega.status>= 200 && pega.status <400){
            var ourdata = JSON.parse(pega.responseText);
            geradado(ourdata);
            }else{
                console.log("We connected but it returned an error")
            }
        }
        pega.onerror = function(){
            console.log("Connection error");
        }
        pega.send()
}
function funcionaPesquisa2(){
    var pega;
    if (window.XMLHttpRequest) {
        pega = new XMLHttpRequest;
    } else {
        pega = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //let tela = document.querySelector('div#tela');
    pega.open('GET', 'https://newsapi.org/v2/everything?q=ultimas-noticias-brasil&apiKey=ff42562d3e064cc689c7bf1600919125');
    pega.onload = function () {
        if (pega.status>= 200 && pega.status <400){
        var ourdata = JSON.parse(pega.responseText);
        geradado(ourdata);
        }else{
            console.log("We connected but it returned an error")
        }
    }
    pega.onerror = function(){
        console.log("Connection error");
    }
    pega.send()
}
function funcionaPesquisa3(){
    var pega;
    if (window.XMLHttpRequest) {
        pega = new XMLHttpRequest;
    } else {
        pega = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //let tela = document.querySelector('div#tela');
    pega.open('GET', 'https://newsapi.org/v2/everything?q=covid-no-brasil&apiKey=ff42562d3e064cc689c7bf1600919125');
    pega.onload = function () {
        if (pega.status>= 200 && pega.status <400){
        var ourdata = JSON.parse(pega.responseText);
        geradado(ourdata);
        }else{
            console.log("We connected but it returned an error")
        }
    }
    pega.onerror = function(){
        console.log("Connection error");
    }
    pega.send()
}
function geradado(data){
    tela.innerHTML=" ";
    for(i=0;i<3;i++){
        var htmlString = data.articles[i];
        var date = new Date(htmlString.publishedAt);
        tela.innerHTML+=`<div class="noticiai">
            <img src="${htmlString.urlToImage}" alt="">
            <br>
            <span class="titulo"><strong>${htmlString.title}</strong></span><br>
            <span class="creditos"><i>${date.toLocaleDateString()} - 
            ${htmlString.source.name} - 
            ${htmlString.author}</i></span><br>
            <span class="text">
            ${htmlString.content} <a href="${htmlString.url}">Leia mais ...</a>
            </span>
        </div>`;
    }
}
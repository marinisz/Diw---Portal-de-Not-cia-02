var pageCounter = "";
var btn = document.getElementById("btn");
var tela = document.querySelector('div#tela');
pageCounter = document.getElementById("txtPesquisa").value;
btn.addEventListener("click", function (){
        pageCounter = document.getElementById("txtPesquisa").value;
        var pega;
        if (window.XMLHttpRequest) {
            pega = new XMLHttpRequest;
        } else {
            pega = new ActiveXObject("Microsoft.XMLHTTP");
        }
        //let tela = document.querySelector('div#tela');
        pega.open('GET', 'https://newsapi.org/v2/everything?q='+pageCounter+'&apiKey=ff42562d3e064cc689c7bf1600919125');
        pega.onload = function () {
            if (pega.status>= 200 && pega.status <400){
            var ourdata = JSON.parse(pega.responseText);
            renderHTML(ourdata);
            }else{
                console.log("We connected but it returned an error")
            }
        }
        pega.onerror = function(){
            console.log("Connection error");
        }
        pega.send()
});
function renderHTML(data){
    console.log('https://newsapi.org/v2/everything?q='+pageCounter+'&apiKey=ff42562d3e064cc689c7bf1600919125')
    tela.innerHTML=" ";
    for(i=0;i<10;i++){
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
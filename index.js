

document.addEventListener("DOMContentLoaded", () => {

    const fchtml = '<label class="love"><input type="checkbox"> Feliz cumpleaños <span class= "alot" style="display:none;">muxo</span></label>';
    const lovehtml = '<label class="teamo"><input type="checkbox"> <b> <33!!!! </b><span class= "alot" style="display:none;">muxo</span></label>';

    repeat(304, "top" ,fchtml)
    
    document.getElementById("love").innerHTML= lovehtml;
    
    repeat(500, "bot" ,fchtml)
    
    const loveLabels = document.querySelectorAll('.love');

    const alots = [
        "tq &#128140;",
        "<33!",
        "Eloisa &#10024;",
        "eloo! &#128158;",
        "t amu &#128152;",
        "te qiero teqiero te qieroooo  &#127879;",
        "&#128149; &#128149; &#128149;",
        "&#127881; &#128147; &#127881;",
        "tot &#128149;",
        "te quiero!! &#127882;",
        "uwu &#129395;",
        "uwu &#129392;",
        "te quiero muxo muxo!!!! &#9786;&#65039;",
        "pide 1 deseo &#127874;",
        "señorita &#128540;",
        "&#129322; &#129322; &#129322;",
        "&#127882; &#129395; &#127882;"
    ]
    
    let id = 1;

    const teamu = document.querySelector('.teamo');
    teamu.addEventListener("click", download);
    
    loveLabels.forEach( love => {
        love.setAttribute("id" , `love${id}`);

        const input = love.querySelector('input');
        const target = love.querySelector('.alot');
        
        input.setAttribute("onclick", `toggleContent(${id})`);
        target.innerHTML = alots[Math.floor(Math.random() * alots.length)];
        if (input.checked) toggleContent(id);
        id++;
    })
});


function toggleContent(id) {
    const label  = document.querySelector(`#love${id}`);
    const input = label.querySelector('input');
    const target = label.querySelector('.alot');
    target.style.display = input.checked ? "inline" : "none";
}

function download(){
    const element = document.createElement('a');
    element.style.display = 'none';
    element.setAttribute('href', 'caja envuelta en papel de regalo.zip');
    element.setAttribute('download','');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function repeat(n, id, Txt){
    var string = '';
    for(i=0; i<n;i++){
        string += Txt;
    }
    document.getElementById(id).innerHTML=string;
}
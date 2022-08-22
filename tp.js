

function changeColor(){
    var div = document.getElementById("main").querySelectorAll(".div");
    var span = document.getElementById("main").querySelectorAll("span");

    // const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 


    for (let i = 0; i < div.length; i++) {
        if (div[i].classList.contains('color')) {
            div[i].classList.remove('color')
            span[i].classList.remove('span')
        } else {
            div[i].classList.add('color')
            span[i].classList.add('span')
            
        }
    }
}

const form = document.getElementById("form");
const table = document.getElementById("table");
const main = document.querySelector("main");
const section = document.querySelector("section");


function getData(e){
    e.preventDefault();


    const data = document.getElementsByClassName('input');
    const tab_body = document.querySelector('#tab_body');
    
    const tr = document.createElement('tr');

    for (let i = 0; i < 4; i++) {
        if (data[i].value == ' ' || data[i].value == null) {
            alert('Supprimer les espaces');
            return;
        }
        const td = document.createElement('td');
        td.style.color='black';
        td.textContent=data[i].value
        
        tr.appendChild(td)
    }
    tab_body.appendChild(tr);
    const tre = document.createElement('tr');

    tab_body.appendChild(tre)

    
    document.querySelector('td:last-child').setAttribute('rowspan', '4');

    document.getElementById("form").reset();
}
form.addEventListener('submit', getData);

function show_Hide() {
    
    if (form.style.display === "none" && table.style.display === "block") {
        form.style.display = "block";
        table.style.display = "none";
    } else {
        form.style.display = "none";
        table.style.display = "block";

    }
}

function switchBloc() {
    
    if (main.style.display === "none" && section.style.display === "block") {
        main.style.display = "block";
        section.style.display = "none";
    } else {
        main.style.display = "none";
        section.style.display = "block";

    }
}



function changeColor(){
    var div = document.getElementById("main").querySelectorAll(".div");
    for (let i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
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
        if (data[i].value == ' ' || data[i].value == '') {
            alert('Veillez remplir le champs '+ data[i].id);
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

    
    // document.querySelector('td:last-child').setAttribute('rowspan', '4');

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

function switchBlocColor() {
    
    var div = document.getElementById("main").querySelectorAll(".div");
    for (let i = 0; i < div.length; i++) {
        div[i].classList.toggle('color');
    }
}

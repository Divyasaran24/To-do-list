const input_list = document.getElementById("input-box");
const list_items = document.getElementById("list-box");

function additems(){
    if(input_list.value === ''){
        alert("You want to write something...!");
    }else{
        let list = document.createElement("li");
        list.innerHTML = input_list.value;
        list_items.appendChild(list);
        let span1 = document.createElement("span");
        span1.innerHTML = "\u00d7";
        list.appendChild(span1);
    }
    input_list.value = '';
    saveData();
}

list_items.addEventListener("click", action);
function action(strick){
    if(strick.target.tagName === "LI"){
        strick.target.classList.toggle("checked");
        saveData();
    }
    else if(strick.target.tagName === "SPAN"){
        strick.target.parentElement.remove();
        saveData();
    }
}

function saveData(){
    localStorage.setItem("data", list_items.innerHTML);
}

function showlist(){
    list_items.innerHTML = localStorage.getItem("data");
}
showlist();


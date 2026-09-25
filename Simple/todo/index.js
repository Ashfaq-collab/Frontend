let todos = [];

function add(todo) {
    if (todo.trim() !== "") {
        todos.push(todo);
        render();
        document.getElementById("gettodo").value="";
    }else{
        alert("Please enter a todo item");
    }
}

function del(index) {
    todos.splice(index, 1);
    render();
}

function render() {

    let showContainer = document.getElementById('show');
    showContainer.innerHTML = "";



    todos.forEach(function (texttodos, index) {
        let rowDiv = document.createElement('div');
        rowDiv.className = "d-flex align-items-center mb-1 mt-2 ";

        let card = document.createElement('div');
        card.className = "card mb-3 mt-1 overflow-auto";

        let cardbody = document.createElement('div');
        cardbody.className = "card-body boxbody d-flex flex-column justify-content-center flex-wrap";

        let item = document.createElement('h6');
        item.innerText = texttodos;
        item.className = "text-black text-break";
        item.id = "todolist";

        cardbody.appendChild(item);
        card.appendChild(cardbody);

        let dels = document.createElement('button');
        dels.innerText = "X";
        dels.className = "btn mb-2 ml-4";
        dels.id = "delete";
        dels.onclick = () => del(index);

        rowDiv.appendChild(card);
        rowDiv.appendChild(dels);

        showContainer.appendChild(rowDiv);
    });
}
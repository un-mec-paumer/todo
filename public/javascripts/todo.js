console.log('todo.js chargé');
const displayMessage = msg => document.getElementById('content').textContent = msg;
const divList = document.getElementById('list');

const setup = async () => {
    displayMessage('prêt');

    const res = await fetch('/api/tasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

    divList.innerHTML = '';
    res.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.innerHTML = `<p>${element.description}  (${element.urgency})</p> <button id="${element._id}" class="delete" >X</button>`;
        divList.appendChild(div);
        document.getElementById(element._id).addEventListener('click', () => deleteTask(element._id));
    });
}

const addTask = async () => {
    const description = document.getElementById('desc').value;
    const urgency = document.getElementById('urgency').value;

    if (!description || !urgency) {
        displayMessage('Veuillez remplir tous les champs');
        return
    }

    const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: description, urgency: urgency })
    }).then(res => res.json());

    console.log(res);
    await setup();
    displayMessage(res.msg + ' avec id: ' + res.taskId);
    
};

const deleteTask = async (id) => {
    const res = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

    await setup();
    displayMessage(res.msg);
    
};


(async() => {
    await setup();
    document.getElementById('create').addEventListener('click', addTask);
})();



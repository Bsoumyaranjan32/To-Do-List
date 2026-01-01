let input = document.querySelector("#taskinput");
let addTask = document.querySelector("#addtask");
let tasks = document.querySelector(".tasks");


input.addEventListener('keyup', () => {
    if(input.value.trim() != 0) {
        addTask.classList.add('active');
    } else {
        addTask.classList.remove('active')
    }
})


addTask.addEventListener('click', () => {
    if(input.value.trim() != 0) {
        let newItem = document.createElement('task-item');
        newItem.classList.add('task-item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
            <div class="item-btn">
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>
            `

            tasks.appendChild(newItem);
            input.value = '';
    } else {
        alert('Please enter a task')
    }
})


tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
})


tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-pen-to-square')) {
        e.target.parentElement.parentElement.classList.
        toggle('completed');
    }
})
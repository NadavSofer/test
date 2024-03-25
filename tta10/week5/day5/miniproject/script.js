const tasks = ['task 1', 'hello'];

let div = document.getElementsByClassName('listTasks')[0]

function addTask(event) {
    event.preventDefault()
    div.innerHTML = ''
    let inputValue = document.getElementsByTagName('input')[0].value
    tasks.push(inputValue)

    for (const task of tasks) {
        let p = document.createElement('p')
        p.textContent = task
        div.appendChild(p)
    }
}

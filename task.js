const taskList = [
    "Charge Macbook",
    "Master JavaScript"
]

goMainMenu();

function goMainMenu() {
    let MainMenu = prompt(`TASK MANAGER\n\nWhat would you like to do? (Plese enter one of the options below):\n"TASKS" - Display All Tasks\n"NEW" - Add A New Task\n"REMOVE" - Remove A Task\n"CLOSE" - Close The Task Manager\n`);

    if (MainMenu == "CLOSE") {
        alert(`Thank you for using Task Manager.`);
    }
    if (MainMenu == "REMOVE") {
        REMOVE();
    }
    if (MainMenu == "NEW") {
        NEW();
    }
    if (MainMenu == "TASKS") {
        TASKS();
    }
    else {
        goMainMenu();
    }
}

function NEW() {
    let newTask = prompt("Please enter the new task:")

    if (taskList.includes(newTask)) {
        alert("This task is already added")
    }

    else if (taskList.includes(newTask) == false) {
        taskList.push(newTask);
        alert("Task successfully added")
        goMainMenu();
    }
}

function REMOVE() {
    let removeTask = prompt(`Please enter a number to remove the task:\n${LISTTASK()}`);
    taskList.splice((removeTask - 1), 1);
    goMainMenu();
}

function TASKS() {
    alert(taskBreak())
    goMainMenu();
}

function LISTTASK() {
    numberedList = ""
    for (item of taskList) {
        numberedList += (taskList.indexOf(item) + 1) + ": " +  item + "\n"
    }
    return(numberedList)
}

function taskBreak() {
    breakList = ""
count = 1
    for (item of taskList) {

        if (taskList.length == count) {
            breakList += item
        }

        else {
            breakList += item + "\n"
        }
        
        count++
    }
    return(breakList)
}

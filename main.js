import inquirer from "inquirer";
import chalk from "chalk";
console.log(`${chalk.bold.yellow("----------MY TO-DO LIST----------")}`);
let toDos = [];
let condition = true;
while (condition) {
    let question = await inquirer.prompt([
        {
            name: "todos",
            type: "input",
            message: "What do you want to add to your To-Do list?",
        },
    ]);
    if (question.todos) {
        toDos.push(question.todos);
        console.log("Task added.");
    }
    let addTask = await inquirer.prompt([
        {
            name: "add",
            type: "confirm",
            message: "Do you want to add more?",
            default: true,
        }
    ]);
    condition = addTask.add;
}
console.log(`${chalk.bold.blueBright("----------TO-DO-LIST----------")}`);
let index = 0;
while (index < toDos.length) {
    let task = toDos[index];
    console.log(`${index + 1}. ${task}`);
    index++;
}
;

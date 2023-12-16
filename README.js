# Building-a-Calculator-with-inquirer



import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
    type: "number",
    name: "num1",
    message: "enter your first number"
},
{
    type: "number",
    name: "num2",
    message: "enter your second number"
},
{
    type: "list",
    name: "operator",
    message: "select your operator",
    choices: ["Add", "Subtract", "Multiply", "Divide"]
}
])
let result;
switch(answer.operator){
    case 'Add':
        result = answer.num1 + answer.num2;
        console.log("The answer of addition is: " + result);
        break;

    case 'Subtract':
        result = answer.num1 - answer.num2;
        console.log("The answer of subtraction is: " + result);
        break;   
    
    case 'Multiply':
        result = answer.num1 * answer.num2;
        console.log("The answer of multiplication is: " + result);
        break;  
        
    case 'Divide':
        result = answer.num1 / answer.num2;
        console.log("The answer of division is: " + result);
        break;
}

// According to Microsoft to-do server;
// A to-do list is:
// A list of errands and other tasks that one needs or intends to accomplish
// So in this list you can enter your task and remove them if they're accomplished.

export { }
const inquirer = require('inquirer');
const ls = [];
inquirer
  .prompt([
    {
      type: "input",
      name: "user_tasks",
      message: "Enter Tour Tasks separated by comma ',' they will be saved in your todo list?\n"
    },
    {
      type: "input",
      name: "comp_tasks",
      message: "If you have completed your any of task enter the task again and it will be removed\n or simply press s to skip,,,\n"
    }
  ])
  .then((answers) => {
    const t1:string = answers.user_tasks;
    const t2:string = answers.comp_tasks;
      const arr = t1.split(",");
      for (let toor = 0; toor < arr.length; toor++) {
        ls.push(arr[toor]);
      }
      console.log("Tasks entered in the todo list are:")
      console.log(ls);
    let idx = ls.indexOf(t2);
    if (t2 == 's') {
      return;
    }else if((idx != -1)){
      ls.splice(idx,1)
      console.log("Tasks remaining in the list are:")
      console.log(ls); 
    }else{
      console.log('This is not in the task list please enter first,,,')
    }       
});



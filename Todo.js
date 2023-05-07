const todoList=[{
    name:'make dinner' ,
    dueDate:'2023-11-10'
},
    {
       name : 'wash dishes ',
       dueDate :  '2023-12-6'
    }];

function renderTodoList(){
    let todoListHTML='';
    for(let i=0;i<todoList.length;i++){
        const todoObject=todoList[i];
        // const name=todoObject.name;
        // const dueDate=todoList.object;
        const{name,dueDate}=todoObject;//shortcut of above line called as destructuring
    
        const html=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${i},1);
          renderTodoList();"
          class="delete-todo-button"> Delete</button>`;
        todoListHTML+=html;

    }
    document.querySelector('.js-todolist').innerHTML=todoListHTML;
}

function ADD(){
   const inputElement= document.querySelector('.js-name-input');
   const name=inputElement.value;
   const dateInputElement=document.querySelector('.js-due-date-input');
   const dueDate=dateInputElement.value;
   todoList.push({
   
    name,
    dueDate
   });
   
   inputElement.value=' ';
   renderTodoList();
}
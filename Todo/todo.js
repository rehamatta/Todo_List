// selector

const toboBtn=document.querySelector(".todo-btn");
const todoInput=document.querySelector(".todo-input");
const todoList=document.querySelector(".todo-list");

// event listeners
toboBtn.addEventListener("click",addTask);
todoList.addEventListener("click",checkOrDelete);

// function
function addTask(e){
    e.preventDefault(); // to prevent form from submiting

//create li
    const todoli=document.createElement("li");
    todoli.classList.add("todo");

//create div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo-item");

//add input value to div
    tododiv.innerText = todoInput.value;

//create button complete
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.innerHTML='<i class="fas fa-check"></i>';

//create button trash
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn");
    trashBtn.innerHTML='<i class="fas fa-trash"></i>';

//  add div + button 1 + button 2 --> li
    todoli.appendChild(tododiv);
    todoli.appendChild(completeBtn);
    todoli.appendChild(trashBtn);

//add li to ul
    todoList.appendChild(todoli);

//remove input value
todoInput.value="";
}
function checkOrDelete(e) {
    // مين الي ضغطت عليه ويختاره وبيطلعها علي شكل اراي ف هختار اول واحد منها الي هو اندكس 0
    const item = e.target; 

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement; // بيحدد الي اختارته
        todo.classList.toggle("completed");  // مش هيشيل الخط لو رجعت ف كلامي وكان لسه مش نفذت التاسك ديadd  عشان لما ادوس عليه تاني يشيل الخط الي على الكلمه انما لو استخدم toggle  استخدمت 
    }
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("fall");
        // after transitionend delet the element
        todo.addEventListener("transitionend",() => {
            todo.remove();
        });
    }
}

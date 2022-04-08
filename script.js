const form = document.querySelector("form");
const inputUser = document.querySelector("#input-user");
const list = document.querySelector(".todo");
const button = document.querySelector("#submit");

button.addEventListener("click",function(){
    console.log(list); 
    list.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <h3>${inputUser.value}</h3>
    <span class="fs-3">
    <i class="bi bi-x-square-fill text-danger" id="delete-btn"></i>
  </span>
  </li>`

  inputUser.value = "";


})

list.addEventListener("click",function(event){
    if(event.target.id == "delete-btn"){
        event.target.parentElement.parentElement.remove();
    }
})



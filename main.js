document.addEventListener("DOMContentLoaded", () => {

    var taskInput = document.getElementById('taskInput');
    var addBtn = document.getElementById('addBtn');
    var divTask = document.getElementById('divTask')

    addBtn.addEventListener('click', () => {
const trimInput = taskInput.value.trim();

if (trimInput== ''){
    alert('please add a task')
}else{
/////////////////add task section and the button///////////////////
        const ultask = document.createElement('ul');
        ultask.classList.add('ultask');
        divTask.appendChild(ultask);

        const li = document.createElement('li');
        li.textContent = taskInput.value;
        li.classList.add('liTask');
        ultask.appendChild(li);

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'حذف';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.setAttribute('id', "deleteBtn")
        ultask.appendChild(deleteBtn);

        taskInput.value = '';

////////////////delete section/////////////////

            deleteBtn.addEventListener('click', (e) => {
              divTask.removeChild(ultask);
              setData();
          
            });
}
setData()
  });
/*my local section */
  function setData(){
    localStorage.setItem("data",divTask.innerHTML);
}

function getData(){

    divTask.innerHTML = localStorage.getItem("data");
    var btns = document.querySelectorAll('.deleteBtn')
    btns.forEach(e =>{
  e.addEventListener('click', () => {
    const ultask = e.parentElement;
        divTask.removeChild(ultask);

        setData()

      });
    })
  

}
//////////////////

/////////////////////fetch section//////////////////////

fetch(`https://wttr.in/Tehran?format=%c%t`) 
          .then(response=>response.text())
          .then(data=>{
            document.getElementById('dama').innerHTML=data
          })
getData()
});


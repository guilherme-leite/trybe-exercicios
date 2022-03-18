function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const daysList = document.getElementById('days');
  
  for(let index = 0; index < dezDaysList.length; index += 1) {
    const days = document.createElement('li');

    if(dezDaysList[index] === 24 || dezDaysList[index] === 31 ) {
      days.classList = 'day hollyday';
    } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
      days.classList = 'day friday';
    } else if (dezDaysList[index] === 25) {
      days.classList = 'day friday hollyday';
    }else {
      days.classList = 'day';
    }
    days.innerHTML = dezDaysList[index];
    daysList.appendChild(days);
  }
}

createDaysOfTheMonth();

function btnGenerator(str){
  const btnContainder = document.querySelector(".buttons-container");
  const btn = document.createElement('button');
  btn.innerText = str;
  btn.id = 'btn-hollyday';
  btnContainder.appendChild(btn);
}

btnGenerator('Feriados');

function btnEventListener() {
  const hollydayBtn = document.getElementById('btn-hollyday');
  hollydayBtn.addEventListener('click', showHollydays)
}

btnEventListener();

function showHollydays() {
  const hollyDays = document.getElementsByClassName('hollyday');

  for(let index = 0; index < hollyDays.length; index += 1) {
    if(hollyDays[index].style.backgroundColor !== 'rgb(0, 128, 0)'){
    hollyDays[index].style.backgroundColor = 'rgb(0, 128, 0)';
    } else {
      hollyDays[index].style.backgroundColor = '';
    }
  }
}

function fridayBtnGenerator(str) {
  const fridayBtnContainer = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.classList = 'friday-btn';
  btn.innerText = str;
  fridayBtnContainer.appendChild(btn);
}

fridayBtnGenerator('Sexta-feira');

function fridayBtnEventListener() {
  const fridayBtn = document.querySelector('.friday-btn');
  fridayBtn.addEventListener('click', changeFridayText);
}

fridayBtnEventListener();

function changeFridayText() {
  const fridaysArr = [4, 11, 18, 25];
  const fridays = document.querySelectorAll('.friday');
  const newText = 'Sextou!';
  for(let index = 0; index < fridays.length; index += 1){
    if(fridays[index].innerText !== newText){
      fridays[index].innerText = newText;
    } else {
      fridays[index].innerText = fridaysArr[index];
    }
  }
}

function daysZoomEventListener() {
  const days = document.querySelectorAll('.day');
  for(let index = 0; index < days.length; index += 1){
    days[index].addEventListener('mouseover', zoomIn);
    days[index].addEventListener('mouseleave', zoomOut);
  }
}

daysZoomEventListener();

function zoomIn(event){
  event.target.style.fontSize = '30px';
  event.target.style.fontWeight = '600';
}

function zoomOut(event) {
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '200';
}

// function createTask(task) {
//   const taskContainer = document.querySelector('.my-tasks');
//   const taskSpan = document.createElement('span');
//   taskSpan.innerText = task;
//   taskContainer.appendChild(taskSpan);
// }

function createTaskDiv(color) {
  const taskContainer = document.querySelector('.my-tasks');
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  taskDiv.style.backgroundColor = color;
  taskContainer.appendChild(taskDiv);
}

createTaskDiv('green');

function tasksEventListener() {
  const taskDivs = document.querySelectorAll('.task');
  for(let index = 0;index < taskDivs.length; index += 1){
    taskDivs[index].addEventListener('click', taskSelectToggle);
  }
}

tasksEventListener();

function taskSelectToggle(event) {
  const taskDivs = document.querySelectorAll('.task');
  const taskSelected = 'task selected';
  
  if(event.target.className !== taskSelected){
    event.target.className = taskSelected;
  } else {
    event.target.className = 'task';
  }
}

// function addSelectedColorToDay() {
//   const days = document.querySelectorAll('.day');
//   for(let index = 0;index < days.length;index += 1){
//     days[index].addEventListener('click', changeColorBySelectedTask);
//   }
// }

// addSelectedColorToDay();


function changeColorBySelectedTask(event) {
  let taskSelected = document.querySelector('.task')
  const taskSelectedColor = taskSelected.style.backgroundColor;
  const days = document.querySelectorAll('.day');
  
  for(let index = 0;index < days.length;index += 1){
    days[index].addEventListener('click', changeColorBySelectedTask);
  }

  if(event){
    if(event.target.style.backgroundColor !== taskSelectedColor) {
      event.target.style.backgroundColor = taskSelectedColor;
    } else {
      event.target.style.backgroundColor = '';
    }
  }
}

changeColorBySelectedTask();

function addTasks() {
  const addBtn = document.querySelector('#btn-add');
  const inputTask = document.querySelector('#task-input');
  const taskContainer = document.querySelector('.my-tasks');
  const taskSpan = document.createElement('span');

  inputTask.addEventListener('keyup', function() {
    taskSpan.innerText = inputTask.value;
  })  
  addBtn.addEventListener('click', function(){
    taskContainer.appendChild(taskSpan);
  });
}

addTasks();
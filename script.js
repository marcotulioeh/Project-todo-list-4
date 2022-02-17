const list = document.querySelector('#lista-tarefas');

function crossOutTasks(scratched) {
  const itemScratched = scratched.target;
  if (itemScratched.className === 'completed') {
    itemScratched.removeAttribute('class');
  } else {
    itemScratched.classList.add('completed');
  }
}

function doubleClik() {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    document.querySelectorAll('li')[i].addEventListener('dblclick', crossOutTasks);
  }
}

function colorGrey(item) {
  const itemGrey = item.target;
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    document.getElementsByTagName('li')[i].style.removeProperty('background-color');
  }
  itemGrey.style.backgroundColor = 'grey';
}

function eventClick() {
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    document.getElementsByTagName('li')[i].addEventListener('click', colorGrey);
  }
}

function isertIput() {
  const item = document.getElementById('texto-tarefa').value;
  const itemList = document.createElement('li');
  itemList.innerHTML = item;
  list.appendChild(itemList);
  const input = document.getElementById('texto-tarefa');
  input.value = '';
  eventClick();
  doubleClik();
}

function deletList() {
  const delet = document.querySelectorAll('li');
  for (let i = 0; i < delet.length; i += 1) {
    delet[i].remove();
  }
}

function removeFinish() {
  const finish = document.querySelectorAll('.completed');
  for (let i = 0; i < finish.length; i += 1) {
    finish[i].remove();
  }
}

function searchEvent() {
  list.innerHTML = localStorage.getItem('list');
  eventClick();
  doubleClik();
}

window.onload = searchEvent;

function saveList() {
  localStorage.setItem('list', list.innerHTML);
}

function moveUp() {
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    if (document.getElementsByTagName('li')[i].style.backgroundColor === 'grey' && (i - 1) !== -1) {
      list.insertBefore(document.getElementsByTagName('li')[i],
        document.getElementsByTagName('li')[i - 1]);
    }
  }
}

function moveDown() {
  for (let i = document.getElementsByTagName('li').length - 1; i >= 0; i -= 1) {
    if (document.getElementsByTagName('li')[i].style.backgroundColor === 'grey'
      && (i + 1) !== document.getElementsByTagName('li').length) {
      list.insertBefore(document.getElementsByTagName('li')[i + 1],
        document.getElementsByTagName('li')[i]);
    }
  }
}

function removeSe() {
  for (let i = document.getElementsByTagName('li').length - 1; i >= 0; i -= 1) {
    if (document.getElementsByTagName('li')[i].style.backgroundColor === 'grey') {
      (document.getElementsByTagName('li')[i]).remove();
    }
  }
}

document.getElementById('criar-tarefa').addEventListener('click', isertIput);
document.getElementById('funcionamento').addEventListener('dblclick', crossOutTasks);
document.getElementById('apaga-tudo').addEventListener('click', deletList);
document.getElementById('remover-finalizados').addEventListener('click', removeFinish);
document.getElementById('salvar-tarefas').addEventListener('click', saveList);
document.getElementById('mover-cima').addEventListener('click', moveUp);
document.getElementById('mover-baixo').addEventListener('click', moveDown);
document.getElementById('remover-selecionado').addEventListener('click', removeSe);

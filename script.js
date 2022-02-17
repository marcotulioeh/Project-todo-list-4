const list = document.querySelector('#lista-tarefas');

// Risca o item da lista quando o mesmo é clicado duas vezes.
function crossOutTasks(scratched) {
  const itemScratched = scratched.target;
  if (itemScratched.className === 'completed') {
    itemScratched.removeAttribute('class');
  } else {
    itemScratched.classList.add('completed');
  }
}

// Adiciona o evento de double click nos elementos da lista.
// const dQallLi = document.querySelectorAll('li');

function doubleClik() {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    document.querySelectorAll('li')[i].addEventListener('dblclick', crossOutTasks);
  }
}

// Pìnta de cinza o intem da lista quando o meso é clicado uma vez.
// const dGtNli = document.getElementsByTagName('li');
function colorGrey(item) {
  const itemGrey = item.target;
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    document.getElementsByTagName('li')[i].style.removeProperty('background-color');
  }
  itemGrey.style.backgroundColor = 'grey';
}


// Adiciona o evento de click nos itens da lista.
function eventClick() {
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    document.getElementsByTagName('li')[i].addEventListener('click', colorGrey);
  }
}

// Insere o elemento do input na lista e depois chama o evento1 e evento 2.
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

// Deleta a lista.
function deletList() {
  const delet = document.querySelectorAll('li');
  for (let i = 0; i < delet.length; i += 1) {
    delet[i].remove();
  }
}

// Remove os itens finalizados que estão riscados.
function removeFinish() {
  const finish = document.querySelectorAll('.completed');
  for (let i = 0; i < finish.length; i += 1) {
    finish[i].remove();
  }
}

// Busca a lista salva no localStorage e adiciona o evento1 e evento2.
function searchEvent() {
  list.innerHTML = localStorage.getItem('list');
  eventClick();
  doubleClik();
}

window.onload = searchEvent;

// Salva a lista no localStorage.
function saveList() {
  localStorage.setItem('list', list.innerHTML);
}

// Move o item selecionado para cima na lista.
function moveUp() {
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    if (document.getElementsByTagName('li')[i].style.backgroundColor === 'grey' && (i - 1) !== -1) {
      list.insertBefore(document.getElementsByTagName('li')[i],
        document.getElementsByTagName('li')[i - 1]);
    }
  }
}

// Move o item selecionado para baixo na lista.
function moveDown() {
  for (let i = document.getElementsByTagName('li').length - 1; i >= 0; i -= 1) {
    if (document.getElementsByTagName('li')[i].style.backgroundColor === 'grey'
      && (i + 1) !== document.getElementsByTagName('li').length) {
      list.insertBefore(document.getElementsByTagName('li')[i + 1],
        document.getElementsByTagName('li')[i]);
    }
  }
}

// Remove o item selecionado da lista.
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

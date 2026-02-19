const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const btnShow = document.getElementById("hide");
const trashIconSvg = `
<svg class="trash" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 7h2v9h-2v-9zm4 0h2v9h-2v-9zM7 10h2v9H7v-9zm-1-1h12l-1 13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 9z"/>
</svg>
`;

btnShow.addEventListener('click', function(event){
  list.classList.toggle('hide');
})
function createTodoItem(text) {
  const li = document.createElement('li');
  li.className = 'item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'item__check';

  const span = document.createElement('span');
  span.className = 'item__text';
  span.textContent = text;

  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.className = 'item__delete';
  delBtn.innerHTML = trashIconSvg;
  delBtn.setAttribute('aria-label', 'Delete');

  checkbox.addEventListener('change', () => {
    span.classList.toggle('done', checkbox.checked);
  });

  delBtn.addEventListener('click', () => {
    list.removeChild(li);
  });

  li.append(checkbox, span, delBtn);
  return li;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = input.value.trim();
  if (value === '') return;

  list.appendChild(createTodoItem(value));
  input.value = '';
  input.focus();
});

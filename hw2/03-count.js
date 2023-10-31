addEventListener('keydown', searchText);

function searchText() {
  const text2 = new Mark(document.querySelector('.text'));
  text2.unmark();
  text2.mark(document.querySelector('.find').value, {
    className: 'bg-warning',
    accuracy: 'exactly',
  });
}

//https://markjs.io/

createGrid(8);

function createGrid(size) {
  for (let i = 0; i < size; i++) {

    let line = '';

    for (let j = 0; j < size; j++) {
      if ((j + i) % 2) {
        line += '#';
      } else {
        line += ' ';
      }
    }

    console.log(line);
  }
}
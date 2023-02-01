const name = 'square';

function instanciar(length, color) {
  return {
    length: length,
    color: color
  };
}

function reportArea(length) {
  console.log(length*length);
}

function reportPerimeter(length) {
    console.log(4*length);
}

export { name, instanciar, reportArea, reportPerimeter };
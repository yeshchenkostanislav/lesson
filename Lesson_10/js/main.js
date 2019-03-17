class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  createDiv() {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = 'Привет, я новый блок!';

    div.style.cssText = `height: ${this.height};\
      width: ${this.width};\
      background-color: ${this.bg};\
      font-size: ${this.fontSize};\
      text-align: ${this.textAlign};\
    `;
  }
}
const characteristics = new Options('200px', '200px', 'red', '400', 'center');
characteristics.createDiv();


// маска поля ввода номера тел
let inp = document.querySelector('input');

// Проверяем фокус
inp.addEventListener('focus', () => {
  // Если там ничего нет или есть, но левое
  if (!/^\+\d*$/.test(inp.value))
    // То вставляем знак плюса как значение
    inp.value = '+';
});

inp.addEventListener('keypress', (e) => {
  // Отменяем ввод не цифр
  if (!/\d/.test(e.key)) {
    e.preventDefault();
    alert("Прошу вводить только цыфры")
  } else {
    if (inp.value.length == 2) inp.value = inp.value + "(";
    if (inp.value.length == 6) inp.value = inp.value + ")-";
    if (inp.value.length == 11) inp.value = inp.value + "-";
    if (inp.value.length == 14) inp.value = inp.value + "-";
    if (inp.value.length > 16) inp.value = inp.value.substring(0, 16);
  }
});
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
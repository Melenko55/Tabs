class Options{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    addDiv(){
      let  newDiv = document.createElement('div');
      document.body.appendChild(newDiv);
      let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg};font-size::${this.fontSize}px;text-align:${this.textAlign};`;
      newDiv.style.cssText = param;  

    }
}

const div1 = new Options(50, 50, "green", 15, "center");

div1.addDiv();
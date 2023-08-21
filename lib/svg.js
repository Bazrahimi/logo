const { Triangle, Circle, Square} = require('./shape');
class SVG {
  constructor(answers) {
    this.text = answers.text;
    this.textColor = answers.textColor;

    switch (answers.shape.toLowerCase()) {
      case 'triangle':
        this.shape = new Triangle(answers.shapeColor);
        break;
    
      case 'circle':
        this.shape = new Circle(answers.shapeColor);
        break;
      
      case 'square':
        this.shape = new Square(answers.shapeColor);
        break;
    
      default:
        throw new Error("Invalid shape provided");
    }
    
  }
  generateSVG() {
    return this.shape.generateSVG(this.text, this.textColor);
  }
}

module.exports = SVG;

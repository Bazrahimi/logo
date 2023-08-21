//svg.js
//importing the shapes classes from the "shape " modules
const { Triangle, Circle, Square} = require('./shape');
// defining the SVG class.
class SVG {
  //constructor for SVG class
  constructor(answers) {
    this.text = answers.text;
    this.textColor = answers.textColor;

    //switch statement to determine which shape to be created based on user input
    //toLowerCase() function make th case-insensitive
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
  //method to create SVG content using a choose shape.
  generateSVG() {
    return this.shape.generateSVG(this.text, this.textColor);
  }
}

//export the SVG class 
module.exports = SVG;
